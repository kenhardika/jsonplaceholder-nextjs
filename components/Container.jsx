import React from 'react';

function Container({children}) {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center p-5 bg-teal-100'>
            {children}           
        </div>
    );
}

export default Container;