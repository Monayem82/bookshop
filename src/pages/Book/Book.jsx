import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Book = ({ eachBook, status,handleRemoveDataForReadList}) => {
    // console.log(eachBook)
    const { author, bookName, category, image, publisher, rating, tags, yearOfPublishing, bookId } = eachBook
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <NavLink to={`/bookdetails/${bookId}`}>
                <figure className="px-10 p-10 bg-amber-50 mx-auto">

                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-42 w-32" />

                </figure>
                <div className="card-body items-center text-center ">
                    <div className='flex gap-4'>
                        {
                            tags.map((tag, index) => <ul key={index} className='bg-gray-50 p-2 rounded'>
                                {tag}
                            </ul>)
                        }
                    </div>
                    <h2 className='text-2xl'>{bookName} {yearOfPublishing}</h2>
                    <div className='grid grid-cols-2'>
                        <p>By : {author}</p>
                        <p>publisher: {publisher}</p>
                    </div>
                    {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                    <div className='border-t-2 border-dashed'>

                    </div>
                </div>
            </NavLink>
            <div className="card-actions justify-between my-2 mx-4 justify-items-center">
                <div className="badge badge-outline">{category}</div>
                {
                    status && <button onClick={()=>handleRemoveDataForReadList(bookId,'bookList')} className='btn btn-primary'>Remove</button>
                }
                <div className="badge"><FaRegStarHalfStroke size={16} /> {rating}</div>
            </div>

        </div>
    );
};

export default Book;