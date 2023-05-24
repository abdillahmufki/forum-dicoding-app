import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className='wrapperLayout'>
            <Header />
            <main className='content container'>
                {children}
            </main>
            <aside className='sidebar'>
                <div>
                    <ul>
                        <li>#Kategori1</li>
                        <li>#Kategori1</li>
                        <li>#Kategori1</li>
                        <li>#Kategori1</li>
                    </ul>
                </div>
            </aside>
            <Footer />
        </div>
    )
}
