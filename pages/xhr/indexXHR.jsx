import React, { useCallback, useEffect, useState } from 'react';
import { xhrDeleteData, xhrEditData, xhrGetData, xhrPostData } from '../../api/xhrAPI';
import ModalContainer from '../../components/Modal/ModalContainer';
import Card from '../../components/Card';
import FormsModal from '../../components/Modal/FormsModal';

export default function IndexXHR(props) {
    const defaultData = {
        "id": 0,
        "name": "",
        "username": "",
        "email": "",
        "phone": "",
        "website": "",
        "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
        }
    };
    
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);
    const [selectedData, setSelectedData] = useState({});

    const getDataFromAPI = useCallback( async () => {
        const response = await xhrGetData();
        setData(response);
    }, [])
    
    function onChangeEvent(e){
        setSelectedData((prev)=>({...prev,
            [e.target.name]: e.target.value
        }));
    }
    
    function onChangeCompany(e){
        setSelectedData((prev)=>({...prev,
            company: { ...prev.company,
                [e.target.name]: e.target.value 
                }    
        }));
    }

    function randomizeID(){
        const randomId = Math.floor(Math.random()*50);
        if(data.some((item)=> item.id === randomId? true : false)){
            return randomizeID();
        }
        else{
            return randomId;
        }
    }

    async function handleEdit(e){
        e.preventDefault();
            if(selectedData.id < 10){
                console.log(selectedData)
                const responseAPI = await xhrEditData(selectedData);
                console.log(responseAPI);
                const updatedItems = data.map(item => item.id === responseAPI.id ? responseAPI : item);
                setData(updatedItems);
                setShowModal(false);
            } 
            else{
                const updatedItems = data.map(item => item.id === selectedData.id ? selectedData : item);
                setData(updatedItems);
                setShowModal(false);
            }
    }

    async function handleSubmit(e){
        e.preventDefault();
        let responseAPI = await xhrPostData(selectedData);
        responseAPI.id = randomizeID();
        setData((prev)=>([responseAPI, ...prev]));
        setShowModal(false);
    }
    
    async function handleDelete(selectedDataId){
        const responseAPI = await xhrDeleteData(selectedDataId);
            if(responseAPI.status === 200 ){
                    const newData = data.filter((item)=> item.id !== selectedDataId);
                    setData(newData);
                }
    }

    useEffect(()=>{
        getDataFromAPI();
    },[getDataFromAPI]);
    
    return (
    <div className='flex h-auto w-full bg-scroll bg-slate-300 flex-col justify-start items-center p-5 font-poppins'>
        {
        showModal? 
        <ModalContainer onHideModal = {()=> setShowModal(false) }> 
        <FormsModal 
            onChangeEvent = {onChangeEvent} 
            onChangeCompany ={onChangeCompany}
            onHandleSubmit = {handleSubmit}
            onHandleEdit = {handleEdit}
            onHideModal = {()=> setShowModal(false)}
            onShowAddButton = {showAddButton}
            selectedData = {selectedData}
            />
        </ModalContainer> : ""
        }
        <p className="text-3xl font-bold p-5"> Data Ids </p>
        <div className="flex flex-col items-center h-[800px] ">
            <button className="block w-[100px] h-[40px] text-white bg-red-400 hover:bg-red-600 
                font-medium rounded-lg text-sm text-center active:translate-y-[2px]"
                onClick = {()=>{
                    setShowModal(true);
                    setShowAddButton(true);
                    setSelectedData(defaultData);
                    }} 
                    >
                + Add
            </button>
            <div className='w-[1500px] border-solid p-5 gap-5 
                grid grid-cols-4'>
                    { data? 
                        data.map((item) => { 
                            return <Card 
                                    key={item.id} 
                                    data={item}
                                    onHandleDelete = {()=> handleDelete(item.id)}
                                    onHandleEdit = {()=> {
                                        setShowAddButton(false);
                                        setSelectedData(item);
                                        setShowModal(true);
                                    }}
                                    /> } ) : ""
                    }
            </div>
        </div>
    </div>
    );
}
