import React from 'react'
import '../styles/main.scss'

function ReviewList({booksList}){
        
    return(
        <>
            <ul>
                {
                    booksList.results && booksList.results.map(function(el,index) {     //'booksList.results &&' provides a check so that the .map() doesn't occur on the initial render
                        return <li key={index}><a href = {el.url}>{el.book_title}</a><small> review by {el.byline}</small></li>
                    })
                }
            </ul>
        </>
    )
}

export default ReviewList
