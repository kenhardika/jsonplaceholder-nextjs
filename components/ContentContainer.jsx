import React from 'react';

export default function ContentContainer({children}) {
    return (
        <div className='flex bg-slate-200 flex-col justify-center items-center p-5'>
            {children}           
        </div>
    );
}
