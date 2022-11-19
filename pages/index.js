import ContentContainer from "../components/ContentContainer";
import Link from 'next/link';

export default function Home() {

  return (
   <div className="h-screen flex flex-col justify-center bg-slate-300">
    <ContentContainer>
        <p className="text-2xl p-5 font-poppins"> Choose Request Type </p>
        <div className=" flex flex-row gap-5">
          <Link href="/fetch/indexFetch" className="w-[100px] text-center font-bold text-white 
            rounded-lg outline-none bg-orange-500 hover:bg-orange-400 active:translate-y-0.5">
            Fetch
          </Link>
          <Link href="/axios/indexAxios" className="w-[100px] text-center font-bold text-white 
            rounded-lg outline-none bg-orange-500 hover:bg-orange-400 active:translate-y-0.5">
            Axios
          </Link>
          <Link href="/xhr/indexXHR" className="w-[100px] text-center font-bold text-white 
            rounded-lg outline-none bg-orange-500 hover:bg-orange-400 active:translate-y-0.5">
            XHR
          </Link>
        </div>
    </ContentContainer>
   </div>
  )
}
