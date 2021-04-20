import React,{useState, useRef} from 'react'
import '../styles/main.scss'

function AuthorInput({fetchBooksList }){
    
    const [searchValue, setSearchValue] = useState("");
    const searchField = useRef(null);

    function getURL(){
        const urlSearchValue = encodeURIComponent(searchValue.trim()); 
        const userURL = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${urlSearchValue}&api-key=PVnPqWozx1UIW1lsm6IEAHjyh4qxDKJR`
        return userURL  
    } 

    function handleSubmit(e){
        e.preventDefault();
        searchField.current.focus();
        fetchBooksList(getURL());
        setSearchValue("");
    } 
    
    return(
        <>
            <div className = "author-search">
                <form onSubmit={handleSubmit} action = "">
                    <label>Enter authors name:</label><br></br>
                    <input 
                    ref={searchField}  
                    value={searchValue}
                    onChange ={(e) => setSearchValue(e.target.value)}  
                    type = "text"
                    placeholder = "e.g. David Mitchell"
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AuthorInput
