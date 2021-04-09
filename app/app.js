import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import PageHeader from './components/PageHeader'
import AuthorInput from './components/AuthorInput'


function App(){
    return (
        <>
            <PageHeader />
            <AuthorInput />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))

if(module.hot){
    module.hot.accept()
}

