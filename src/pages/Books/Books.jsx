import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ booksData }) => {
    console.log(booksData)
    return (
        <div>
            <h1 className='text-3xl p-3 text-center'>Books : {booksData.length}</h1>
            <hr />
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 '>
                <Suspense fallback={<span>Each Book Loading</span>}>
                    {
                        booksData.map(eachBook => <Book key={eachBook.bookId} eachBook={eachBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;