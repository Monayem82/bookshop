import { ToastContainer, toast } from 'react-toastify';

const getLocalStorageData=(storetype)=>{
    let getStoreData
    if(storetype==='bookList'){
        getStoreData=localStorage.getItem('bookList')
    }else{
        getStoreData=localStorage.getItem('wishlist')
    }
    
    if(getStoreData){
        const bookData=JSON.parse(getStoreData)
        return bookData
    }else{
        return []
    }
}

const addToLocalStorage=(id,storetype)=>{
    console.log(id)
    const storeData=getLocalStorageData(storetype)
    console.log(storeData)
    if(storeData.includes(id)){
        toast("Already Exists")
    }else{
        storeData.push(id)
        const addLocal=JSON.stringify(storeData)
        toast("Successfully Added")
        if(storetype==='bookList'){
            localStorage.setItem('bookList',addLocal)
        }else{
            localStorage.setItem('wishlist',addLocal)
        }
        
        console.log(storeData)
    }
}

// Remove for localStorage

const removeFromLocalStorage = (id, storetype) => {
    const storeData = getLocalStorageData(storetype);
    
    if (storeData.includes(id)) {
        const updatedData = storeData.filter(item => item !== id);
        const updatedLocal = JSON.stringify(updatedData);

        if (storetype === 'bookList') {
            localStorage.setItem('bookList', updatedLocal);
        } else {
            localStorage.setItem('wishlist', updatedLocal);
        }

        alert("Successfully Removed");
        console.log(updatedData);
    } else {
        alert("This book is not in the list");
    }
        
};

export {addToLocalStorage,getLocalStorageData,removeFromLocalStorage}