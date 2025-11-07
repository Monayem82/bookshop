import React, {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getLocalStorageData } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router';

const ReadAndWishlist = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // const [localStorageData,setLocalStoreageData]=useState('bookList')
    const bookallData=useLoaderData()
    console.log(bookallData)


    


    // const handleReadListData=(storetype)=>{
    //     const getReadListData=getLocalStorageData(storetype)
    //     console.log(getReadListData)

    //     const readList = bookallData.filter(book => getReadListData.includes(book.bookId));

        
    //     console.log(readList)
    // }
    
    

    useEffect(()=>{
        const bookLocalStorage=getLocalStorageData("bookList")
        const wishLocalStorage=getLocalStorageData("wishlist")

        const bookReadList = bookallData.filter(book => bookLocalStorage.includes(book.bookId));
        const bookwishList = bookallData.filter(book => wishLocalStorage.includes(book.bookId));

        console.log(bookReadList)
        console.log(bookwishList)
    },[])

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>WishList</Tab>
                </TabList>
                <TabPanel>This is pannel 1</TabPanel>
                <TabPanel>This is pannel 2</TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadAndWishlist;