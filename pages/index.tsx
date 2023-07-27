import Image from 'next/image'
import { Inter } from 'next/font/google'
import pImg from '../public/b.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen min-w-[1300px] flex-col items-center justify-between p-24 ${inter.className} font-poppins`}>
      <div className= "bg-white rounded-xl shadow-2xl flex flex-r w-3/4  h-[564px]  ">
      <div className="w-2/4 bg-scroll h-[564px] rounded-l-xl">
        <Image src={pImg} alt='/' className='h-[564px] rounded-l-xl'/>
    </div>

      <div className='w-2/4 p-10' >
        <h1 className='font-semibold text-2xl font-san text-neutral-800'>Login</h1>
        <p className='font-light text-lg font-san text-neutral-700'>Donec tortor quam at duis tortor.</p>
        
        <div className='py-10'>

          <form>

          <label className="block mb-2 font-light text-m font-sans text-gray-600">E-Mail</label>
    <input type="text" id="small-input" className="block w-full p-3 font-light font-sans text-lg text-gray-600 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
         
    <label className="pt-5 block mb-2 font-light text-m font-sans text-gray-600">Password</label>
    <input type="text" id="small-input" className="block w-full p-3 font-light font-sans text-lg text-gray-600 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
    <div className='pt-5 flow-root'>
      <a href='#' className='font-semibold float-right text-sm text-neutral-600 hover:underline'>Forgot Password?</a>
    </div>
    <div className='grid grid-cols-1 divide-y-5'>
      <div className='pt-5'>
    
    <button type="submit" className="block w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-lg font-sans p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "><a href='p2'>Login</a></button>
    </div>

    <div className="inline-flex items-center justify-center w-full pt-2">
    <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    
</div>


    <div className=''>
    <button type="submit" className="block w-full font-semibold text-neutral-600 text-lg  bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none border border-neutral-800 rounded-lg focus:ring-blue-300 font-light rounded-lg text-lg font-sans p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register now</button>
    </div>
    </div>
          </form>




        </div>
        
      </div>

    

      </div>
    </main>
  )
}
