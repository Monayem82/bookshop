import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getLocalStorageData } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const ReadAndWishlist = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // const [localStorageData,setLocalStoreageData]=useState('bookList')
    let [bookReadList, setBookReadList] = useState([])
    let [bookWishList, setbookWishList] = useState([])
    const bookallData = useLoaderData()
    // console.log(bookallData)





    // const handleReadListData=(storetype)=>{
    //     const getReadListData=getLocalStorageData(storetype)
    //     console.log(getReadListData)

    //     const readList = bookallData.filter(book => getReadListData.includes(book.bookId));


    //     console.log(readList)
    // }



    useEffect(() => {
        const bookLocalStorage = getLocalStorageData("bookList")
        const wishLocalStorage = getLocalStorageData("wishlist")

        const bookReadListLocal = bookallData.filter(book => bookLocalStorage.includes(book.bookId));
        const bookwishListLocal = bookallData.filter(book => wishLocalStorage.includes(book.bookId));

        setBookReadList(bookReadListLocal)
        setbookWishList(bookwishListLocal)
    }, [])



    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read List {bookReadList.length}</Tab>
                    <Tab>WishList {bookWishList.length}</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            bookReadList.map(eachBook=><Book key={eachBook.bookId} eachBook={eachBook}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            bookWishList.map(eachBook=><Book key={eachBook.bookId} eachBook={eachBook}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadAndWishlist;