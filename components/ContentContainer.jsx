import React from 'react';

export default function ContentContainer({children}) {
    return (
        <div className='flex bg-slate-300 flex-col justify-center items-center p-5 font-poppins'>
            {children}           
        </div>
    );
}
