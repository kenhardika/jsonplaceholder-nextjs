import { useCallback, useEffect, useState } from "react";
import { axiosDeleteData, axiosGetData, axiosPostData } from "../../api/axiosAPI";
import Card from "../../components/Card";
import ContentContainer from "../../components/ContentContainer";
import FormsModal from "../../components/Modal/FormsModal";
import ModalContainer from "../../components/Modal/ModalContainer";

export default function IndexAxios(props) {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [loading, setLoading] = useState(false);
    const getDataFromAPI = useCallback( async () => {
        const response = await axiosGetData();
        setData(response.data);
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

    async function handleSubmit(e){
        e.preventDefault();
        let responseAPI = await axiosPostData(selectedData);
        responseAPI.data.id = randomizeID();
        console.log(responseAPI.data);

        const responseData = responseAPI.data;
        setData((prev)=>([responseData, ...prev]));
        setShowModal(false);
        // setShowAddButton(false);
        // setLoading(false);
    }
    
    async function handleDelete(selectedDataId){
        const responseAPI = await axiosDeleteData(selectedDataId);
            if(responseAPI.status === 200 ){
                    const newData = data.filter((item)=> item.id !== selectedDataId);
                    setData(newData);
                    setLoading(false);
                }
    }

    useEffect(()=>{
        getDataFromAPI();
    },[getDataFromAPI]);

    return (
        <ContentContainer>
                {
                 showModal? 
                  <ModalContainer onHideModal = {()=> setShowModal(false) }> 
                    <FormsModal 
                        onChangeEvent = {onChangeEvent} 
                        onChangeCompany ={onChangeCompany}
                        onHandleSubmit = {handleSubmit}
                        onHideModal = {()=> setShowModal(false)}
                        />
                  </ModalContainer> : ""
                }
                <p className="text-3xl font-bold p-5"> Data Ids </p>
                <div className="flex flex-col items-center h-[1000px] ">
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
                                data.map((item) => { 
                                    return <Card 
                                            key={item.id} 
                                            data={item}
                                            onHandleDelete = {()=> handleDelete(item.id)}
                                            /> } ) : ""
                            }
                    </div>
                 </div>
        </ContentContainer>
    );
}
