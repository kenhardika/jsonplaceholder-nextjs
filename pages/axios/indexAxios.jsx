import { useCallback, useEffect, useState } from "react";
import { axiosGetData } from "../../api/axiosAPI";
import Card from "../../components/Card";
import ContentContainer from "../../components/ContentContainer";
import ModalContainer from "../../components/Modal/ModalContainer";

export default function IndexAxios(props) {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const getDataFromAPI = useCallback( async () => {
        const response = await axiosGetData();
        setData(response.data);
    }, [])
    
    useEffect(()=>{
        getDataFromAPI();
    },[getDataFromAPI])
    
    return (
        <ContentContainer>
                {
                 showModal? 
                  <ModalContainer hideModal = {()=> setShowModal(false) }/> : ""
                }
                <p className="text-3xl font-bold p-5"> Data Ids </p>
                <div className="flex flex-col items-center  ">
                    <button className="block w-[100px] h-[40px] text-white bg-red-400 hover:bg-red-600 
                        font-medium rounded-lg text-sm text-center active:translate-y-[2px]"
                        onClick = {()=>{
                            setShowModal(true);
                            }} 
                         >
                        + Add
                    </button>
                    <div className='w-[1500px] border-solid p-5 gap-5 
                        grid grid-cols-4'>
                            { data? 
                                data.map((item) => { return <Card key={item.id} data={item}/> } ) : ""
                            }
                    </div>
                 </div>
        </ContentContainer>
    );
}
