import SearchBar from '@/components/atoms/search-bar'
import React from 'react'
import { FiMapPin } from 'react-icons/fi'

export default function Header() {
    return (
        <>
            <h3 className='text-md text-gray-400'>Your Location</h3>
            <div className='flex items-center text-primary text-md mb-2'>
                <FiMapPin />
                <span className='ml-2 text-black'>Garut</span>
            </div>
            <div>
                <SearchBar />
            </div>
        </>
    )
}
