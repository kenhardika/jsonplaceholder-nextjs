import ContentContainer from "../../components/ContentContainer";

export default function indexAxios(props) {
    
    
    return (
        <ContentContainer>
                <p className="text-3xl font-bold p-5"> Data Ids </p>
                <div className="flex flex-col items-center h-[1000px] ">
                    <button className="block w-[100px] h-[40px] text-white bg-red-400 hover:bg-red-600 
                        font-medium rounded-lg text-sm text-center active:translate-y-[2px]">
                        + Add 
                    </button>
                    <div className='w-[1500px] border-solid p-5 gap-5 
                        grid grid-cols-4'>
                            <div>card1</div>
                            <div>card2</div>
                            <div>card3</div>
                            <div>card4</div>
                    </div>

                 </div>
        </ContentContainer>
    );
}
