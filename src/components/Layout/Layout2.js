import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className='wrapperLayout2'>
            <Header />
            <main className='content container'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
