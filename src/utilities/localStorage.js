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
        alert("This book are aleady Read list")
    }else{
        storeData.push(id)
        const addLocal=JSON.stringify(storeData)
        if(storetype==='bookList'){
            localStorage.setItem('bookList',addLocal)
        }else{
            localStorage.setItem('wishlist',addLocal)
        }
        
        console.log(storeData)
    }
}

export {addToLocalStorage,getLocalStorageData}