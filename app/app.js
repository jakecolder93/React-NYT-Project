import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import PageHeader from './components/PageHeader'
import AuthorInput from './components/AuthorInput'
import ReviewList from './components/ReviewList'

function App(){

    const [booksList,setBooksList] = useState([]);

    const fetchBooksList = (url) => {
       fetch(url)
         .then(response => response.json())
         .then(data => setBooksList(data))
    }
    
    return (
        <>
            <PageHeader />
            <AuthorInput fetchBooksList={fetchBooksList}/>
            <ReviewList booksList={booksList}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))

if(module.hot){
    module.hot.accept()
}
