// external imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// local imports
import Root from './Root'

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('app')
)
