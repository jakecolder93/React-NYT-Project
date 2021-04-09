import React,{useState, useRef, useEffect} from 'react'
import '../styles/main.scss'

function AuthorInput(){
    var apiKey = "&api-key=PVnPqWozx1UIW1lsm6IEAHjyh4qxDKJR";
    var queryAuthor = "https://api.nytimes.com/svc/books/v3/reviews.json?author=";

    const [searchValue, setSearchValue] = useState("")
    const searchField = useRef(null)
    

    function handleSubmit(e){
        e.preventDefault()
        searchField.current.focus()

        //Convert user input into a URL string//
        var urlSearchValue = encodeURIComponent(searchValue.trim()) 
        userQuery = queryAuthor + urlSearchValue + apiKey
        setSearchValue("")
    }

    
    
    /*Fetch the data from the NYT API//
    const useFetch = url => {
        const [data, setData] = useState(null)

        useEffect(async () => {
            const response = await fetch(url);
            const data = await response.json();
            const [item] = data.results;
            setData(item);
        }, [])
        return{data}
    }

    data = useFetch(userQuery)
    console.log(data.results) */
    return(
        <>
            <div className = "author-search">
                <form onSubmit={handleSubmit} action = "">
                    <label>Enter authors name:</label><br></br>
                    <input 
                    ref={searchField}
                    value={searchValue}
                    onChange = {(e) => setSearchValue(e.target.value)}
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