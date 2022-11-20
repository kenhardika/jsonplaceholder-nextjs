import React from 'react';

export default function ContentContainer({children}) {
    return (
        <div className='flex h-auto w-full bg-scroll bg-slate-300 flex-col justify-start items-center p-5 font-poppins'>
            {children}           
        </div>
    );
}
