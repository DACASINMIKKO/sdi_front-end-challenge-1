import React from 'react'

const DateBox = ({ month, day }: { month: string, day: string }) => {
    return (
        <div className="relative w-24 h-24 bg-red-500 transform -skew-x-6 text-white overflow-hidden flex justify-center items-center">
            <div className="">
                <div className="text-4xl font-bold">{day}</div>
                <div className=" font-semibold">{month}</div>
            </div>
        </div>
    )
}

export default DateBox