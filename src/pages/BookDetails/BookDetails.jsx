import React from 'react';
import { NavLink, useLoaderData, useNavigate,  useParams } from 'react-router';
import { addToLocalStorage } from '../../utilities/localStorage';

const BookDetails = () => {
    const navigate=useNavigate()
    const detailsBook = useLoaderData()
    const { bookId } = useParams()
    const eachbookData = parseInt(bookId)

    const eachBook = detailsBook.find(books => books.bookId === eachbookData)
    console.log(eachBook)
    const { bookName, image, review, totalPages, yearOfPublishing } = eachBook || {}

    const handleMarkAsRead=(id,storetype)=>{
        addToLocalStorage(id,storetype)
    }

    const handleAddToWishlist=(id,storetype)=>{
        addToLocalStorage(id,storetype)
    }

    const handleReadWishList=()=>{
        console.log('hi')
        navigate('/ReadAndWishlist')
    }


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
                    <button onClick={()=>handleMarkAsRead(eachbookData,'bookList')} className="btn btn-primary">Mark as Read</button>
                    <button onClick={()=>handleAddToWishlist(eachbookData,'wishlist')} className="btn btn-primary">Add To Wishlist</button>
                    <button onClick={()=>handleReadWishList()} className='btn btn-primary'>See Previous list</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;