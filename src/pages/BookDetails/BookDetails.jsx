import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const detailsBook = useLoaderData()
    const { bookId } = useParams()
    const eachbookData = parseInt(bookId)

    const eachBook = detailsBook.find(books => books.bookId === eachbookData)
    const { bookName, image, review, totalPages, yearOfPublishing } = eachBook || {}
    return (
        <div className="card card-side bg-base-100 shadow-sm justify-center">
            <figure className=''>
                <img className='h-80'
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>Pages :{totalPages}</p>
                <p>Published :{yearOfPublishing}</p>
                <p>
                    {review.length > 100 ? `${review.slice(0, 100)}...` : review}
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Mark as Read</button>
                    <button className="btn btn-primary">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;