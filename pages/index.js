import Link from 'next/link';

export default function Home() {

  return (
  <div className='flex h-screen w-full bg-scroll bg-slate-300 flex-col justify-center items-center p-5 font-poppins'>
        <p className="text-2xl p-5 font-poppins"> Choose Request Type </p>
        <div className=" flex items-center flex-row gap-5">
          <Link href="/fetch/indexFetch" className="w-[100px] h-6 text-center font-bold text-white 
            rounded-lg outline-none bg-orange-500 hover:bg-orange-400 active:translate-y-0.5">
            Fetch
          </Link>
          <Link href="/axios/indexAxios" className="w-[100px] h-6 text-center font-bold text-white 
            rounded-lg outline-none bg-orange-500 hover:bg-orange-400 active:translate-y-0.5">
            Axios
          </Link>
          <Link href="/xhr/indexXHR" className="w-[100px] h-6 text-center font-bold text-white 
            rounded-lg outline-none bg-orange-500 hover:bg-orange-400 active:translate-y-0.5">
            XHR
          </Link>
        </div>
  </div>
  )
}
