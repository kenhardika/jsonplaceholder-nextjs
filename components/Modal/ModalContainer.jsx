import React from 'react';

function ModalContainer({hideModal}) {
    return (
        <div className='h-screen w-screen left-0 top-0 fixed backdrop-blur-sm'>
            <div className=" w-auto h-auto mx-[500px] my-[150px] outline-none focus:outline-none  bg-white rounded-lg shadow-md">
                    <div className='flex justify-end py-3 px-6 lg:px-8
                         text-white bg-white rounded-t-lg h-1/5 items-center'>
                        <button className='w-[30px] h-[30px] bg-red-600 hover:bg-red-600 
                            rounded-full text-sm text-center active:translate-y-[2px] p-1' 
                                onClick={()=>hideModal()}
                                    > 
                                    X 
                                    </button>
                    </div>
                    <form className='flex flex-col w-full h-4/5 p-5 gap-2 items-center space-y-4' 
                             id='formInput'
                            // onSubmit={(e)=>{
                            //     if(showAddButton){
                            //         handleSubmit(e);
                            //         setLoading(true);
                            //     }
                            //     else{
                            //         handleEdit(e);
                            //         setLoading(true);
                            //     }
                            //     }}
                                >
                                    
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-row w-full justify-end px-3 gap-14 '>
                                    <label htmlFor="name" className=''>Name: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300' type="text" 
                                        name='name' placeholder='name' 
                                        // onChange={onChangeEvent} value={selectedData.name}
                                        />
                                </div>
                                <div className='flex flex-row w-full justify-end px-3 gap-14 '>
                                    <label htmlFor="email" className=''>Email: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300'  type="text" 
                                        name='email' placeholder='email' 
                                        // onChange={onChangeEvent} value={selectedData.email}
                                        />
                                </div>
                                <div className='flex flex-row w-full justify-end px-3 gap-14 '>
                                    <label htmlFor="phone" className=''>Phone: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300 ' type="text" 
                                        name='phone' placeholder='phone' 
                                        // onChange={onChangeEvent} value={selectedData.phone}
                                        />
                                </div>
                                <div className='flex flex-row w-full justify-end px-3 gap-14 '>
                                    <label htmlFor="website" className=''>Website: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300' type="text" 
                                        name='website' placeholder='website' 
                                        // onChange={onChangeEvent} value={selectedData.website} 
                                        />
                                </div>
                                <div className='flex flex-row w-full justify-end px-3 gap-14 '>
                                    <label htmlFor="companyname" className=''>Company&apos;s Name: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300' type="text" 
                                        name='name' placeholder="company's name" 
                                        // onChange={onChangeCompany} value={selectedData.company.name}
                                        />
                                </div>
                                <div className='flex flex-row w-full justify-end px-3 gap-14'>
                                    <label htmlFor="companyBs">Company&apos;s BS: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300' type="text" 
                                        name= 'bs' placeholder="company's bs" 
                                        // onChange={onChangeCompany} value={selectedData.company.bs}
                                        />
                                </div>
                                <div className='flex flex-row w-full justify-end px-3 gap-14'>
                                    <label htmlFor="catchPhrase">Catch Phrase: </label> 
                                    <input className='px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300' type="text" 
                                        name= 'catchPhrase' placeholder='catch phrase' 
                                        // onChange={onChangeCompany} value={selectedData.company.catchPhrase}
                                        />
                                </div>
                            </div>
                            <div className='flex flex-col w-[200px] h-[70px] items-center gap-2 justify-center text-white'>
                                    <button className='rounded-lg px-2 w-40 bg-red-300 
                                        text-sm active:translate-y-[2px] p-1' type='submit' form='formInput'> 
                                        {/* { loading? 'loading...' : showAddButton? 'Add' : "Save" }    */}
                                        Add
                                        </button>
                                    <button className='rounded-lg px-2 w-40 bg-red-600 
                                        text-sm active:translate-y-[2px] p-1' form='formInput'
                                        // onClick={()=>{
                                        //     setSelectedData(null);
                                        //     handleModalClose();
                                        //     setShowAddButton(false);
                                        // }}
                                        > Cancel </button>
                            </div> 
                    </form> 
                </div>
        </div>
    );
}

export default ModalContainer;