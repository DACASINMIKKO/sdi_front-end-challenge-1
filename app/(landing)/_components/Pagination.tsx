import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: any }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`py-4 px-6 mx-1 rounded ${currentPage === i ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700'
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="flex justify-start items-center">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="mx-1 py-4 px-6 rounded bg-gray-200 hover:bg-red-500 disabled:bg-gray-200 text-gray-700"
            >
                {'<'}
            </button>
            {renderPageNumbers()}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="mx-1 py-4 px-6 rounded bg-gray-200 hover:bg-red-500 disabled:bg-gray-200 text-gray-700"
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;
