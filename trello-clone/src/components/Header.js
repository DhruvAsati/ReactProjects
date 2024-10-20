import React from 'react';

const Header = () => {
    return (
        <div className='bg-gray-800 w-full h-14 p-3 border-b border-gray-700 flex justify-between items-center'>
            <div className="left flex items-center">
                <h3 className='text-white text-xl font-semibold'>Trello Clone</h3>
            </div>
            <div className="right flex items-center space-x-4">
                <span className='text-gray-300 text-sm font-medium'>Remote dev</span>
                <img className='rounded-full w-8 h-8 object-cover' src="https://placehold.co/28x28/png" alt="User" />
            </div>
        </div>
    );
}

export default Header;
