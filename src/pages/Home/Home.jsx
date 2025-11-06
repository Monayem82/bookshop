import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const [allBooks,setAllBooks]=useState([])

    // useEffect(()=>{
    //     fetch('booksData.json').then(res=>res.json()).then(data=>setAllBooks(data))
    // },[])

    const booksData=useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span>Books are loading</span>}>
                <Books booksData={booksData}></Books>
            </Suspense>
        </div>
    );
};

export default Home;