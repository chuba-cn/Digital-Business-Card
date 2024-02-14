// eslint-disable-next-line no-unused-vars
import React from 'react'
import Biodata from './components/Biodata';
import Info from './components/Info';
import Footer from './components/Footer'

export default function App() {
    return (
        <div className='container'>
            <Biodata />
            <Info />
            <Footer />
        </div>
    )
}