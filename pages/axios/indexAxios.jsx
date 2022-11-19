import ContentContainer from "../../components/ContentContainer";

export default function indexAxios(props) {
    return (
        <ContentContainer>
            <div className="h-[1000px] w-full flex flex-col items-center bg-red-200">
                <p className="text-3xl font-bold p-5"> Data Ids </p>
                <div className="">
                    <button className="block w-[100px] h-[40px] text-white bg-red-400 hover:bg-red-600 
                        font-medium rounded-lg text-sm text-center active:translate-y-[2px]">
                        + Add 
                    </button>    
                 </div>
            </div>
        </ContentContainer>
    );
}
