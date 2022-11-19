export default function Buttons({ value, bgcolor, txcolor }) {
    return (
        <button className={`w-[100px] h-[30px] font-bold text-${txcolor} 
         rounded-lg outline-none bg-${bgcolor}-500 hover:bg-${bgcolor}-400 active:translate-y-0.5`}>
            {value}
        </button>
    );
}
