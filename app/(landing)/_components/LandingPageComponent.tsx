'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import news from '../_modules/news'
import image1 from '../../../public/tmsph-ls-midafood.jpeg'
import image2 from '../../../public/tmsph-launches-toyota-rentacar.webp'
import image3 from '../../../public/tmp-lalamove-partnership.webp'
import authors from '../_modules/authors'
import { Share, ShareFat } from '@phosphor-icons/react'
import DateBox from './DateBox'
import { extractMonthAndDay } from '../_modules/helper'
import Pagination from './Pagination'

const LandingPageComponent = () => {
    const initData = news.find((data) => data.id === 1)
    const [page, setPage] = useState<1 | 2 | 3>(2)
    const [data, setData] = useState(initData)
    const [imageData, setImageData] = useState(image1)
    const [author, setAuthor] = useState<any>()
    const [month, setMonth] = useState<string>('')
    const [day, setDay] = useState<string>('')
    useEffect(() => {
        if (data) {
            const dateObject = extractMonthAndDay(data?.created_at)
            setMonth(dateObject.month)
            setDay(dateObject.day.toString())
        }
    }, [data])
    useEffect(() => {
        const authorData = authors.find((auth) => auth.id === data?.author_id)
        setAuthor(authorData)
    }, [data])
    useEffect(() => {
        if (page === 1) {
            setImageData(image1)
        } else if (page === 2) {
            setImageData(image2)
        } else {
            setImageData(image3)
        }
    }, [page])
    useEffect(() => {
        const newData = news.find((data) => data.id === page)
        setData(newData)
    }, [page])
    return (
        <div className=' w-full p-5 flex flex-col gap-4'>
            <div className=' w-full relative'>
                <Image
                    src={imageData}
                    height={1080}
                    width={1080}
                    alt='data alt pic'
                    className=' w-full h-[400px] object-cover object-center'
                />
                <div className=' absolute top-[340px] left-[40px]'>
                    <DateBox month={month} day={day} />
                </div>
            </div>
            <div className=' flex w-full justify-end gap-2 font-bold text-gray-600 text-sm cursor-pointer hover:text-gray-600/40 items-center pr-4'>
                <div>
                    <ShareFat size={20} />
                </div>
                <div>
                    Share
                </div>
            </div>
            <hr className='h-[1px] bg-gray-300' />
            <div className=' flex flex-col gap-1'>
                <div className=' font-semibold text-sm text-red-500'>{author?.name}</div>
                <div className=' font-bold text-2xl'>{data?.title}</div>
            </div>
            <div className=' font-semibold text-sm text-gray-600'>{data?.body}</div>
            <div className=' text-sm underline font-bold cursor-pointer underline-offset-8 hover:text-gray-600/40'>READ ARTICLE</div>
            <div className=' mt-3'>
                <Pagination
                    currentPage={page}
                    totalPages={news.length}
                    onPageChange={setPage}
                />
            </div>
        </div>
    )
}

export default LandingPageComponent