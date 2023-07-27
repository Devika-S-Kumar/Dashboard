import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlineHome, AiOutlineShop, AiOutlineUnorderedList,AiOutlineAppstore,AiOutlinePlus} from 'react-icons/ai';
import { BsListNested} from 'react-icons/bs';
import { Dropdown } from "flowbite-react";
import {FiSettings} from 'react-icons/fi';
import {BsChevronDown,BsBag} from 'react-icons/bs';
import {GoPeople} from 'react-icons/go';
import {RiErrorWarningLine} from 'react-icons/ri';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between ${inter.className} font-poppins`}>
      <div className='w-full bg-neutral-900 text-white flow-root py-2 px-7'>
       
   
      
       <div className='float-left py-4 px-1'>
       <AiOutlineHome/>
       </div>
        <a href='#' className='float-left py-3 pr-10'>Home</a>

  

     
      
       <div className='float-left py-4 px-1'>
       <AiOutlineUnorderedList/>
       </div>
        <a href='#' className='float-left py-3 pr-10'>Contents</a>

        

     
      
       <div className='float-left py-4 px-1'>
       <BsListNested/>
       </div>
        <a href='#' className='float-left py-3 pr-10'>Categories</a>



      
      
       <div className='float-left py-4 px-1'>
       <FiSettings/>
       </div>

       <a href='#' className='float-left py-3 pr-10'>Settings</a>
        

       <div className='float-right py-4'>
        <p className='bg-white font-light text-black p-1 px-2 rounded-2xl' >ismail ihsan Bulbul</p>

       </div>
       
        

      </div>

      <div className='w-full h-full flow-root bg-neutral-800'>
      
      <div className='w-1/5 h-full bg-neutral-800 border border-neutral-900 float-left'>
      <div className="grid grid-cols-1 divide-neutral-900 divide-y">
 <div className='p-5 px-8 '>
     <div className='bg-neutral-200 rounded-sm p-4 flow-root'>
       
      <div className='float-left py-1 px-2'>
      <AiOutlinePlus/>
      </div>
       <p className='text-neutral-800 float-left '>New Item</p>
      </div>


     </div>


     <div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Dashboard"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
</div>


<div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Application"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
 </div>

 <div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Elements"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
 </div>

 <div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Forms"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
 </div>

 <div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Plugins"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
 </div>


 <div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Datagrids"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
 </div>

 <div className='p-4 text-white'>
        <div className='float-left py-1 px-1'>
      <AiOutlineAppstore/>
      </div> 
      <div className='float-left px-3'>
      <Dropdown
       arrowIcon={true}
       inline={true}
       label="Setting"
       className='bg-neutral-800 border border-neutral-800'>
  <Dropdown.Item>
    <p className='text-white'>Commarce</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Analytics</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Crypto</p>
  </Dropdown.Item>
  <Dropdown.Item>
  <p className='text-white'>Helpdesk</p>
  </Dropdown.Item>
</Dropdown>
</div>
 </div>
</div>
</div>

      
      
      
      
      
      
      



<div className='w-4/5 bg-neutral-300 float-left'>


<div className='w-full bg-white text-white flow-root py-2 px-7'>
       
   
      
       
        <a href='#' className='float-left py-3 pr-10 font-semibold text-xl font-san text-neutral-800'>Add new post</a>

  
        
        <div className='float-left py-5 px-1 text-neutral-800'>
        <AiOutlinePlus/>
       </div>

       <a href='#' className='float-left py-4 pr-10 text-neutral-800'>Add Content</a>



      
      
       <div className='float-left py-5 px-1 text-neutral-800'>
       <FiSettings/>
       </div>

       <a href='#' className='float-left py-4 text-neutral-800 pr-10'>Settings</a>
        

       <div className='float-right py-4'>
       
      
<form>   
    
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-neutral-800 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-neutral-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search content" required></input>
        
    </div>
</form>


       </div>
       
        

      </div>







      <div className="h-91 pt-10 grid grid-cols-4 gap-10 content-center ... px-10">
  
  
  <div className='bg-white p-4 rounded-lg flow-root text-center'>


<div className='text-orange-600  text-xl font-bold '>
    <BsBag/>
</div>




  <label className="block mb-2 font-light text-sm font-sans text-gray-600">Total Sales</label>
  <p className='font-semibold text-center text-lg font-san text-neutral-800'>$2,456</p>

  </div>

  <div className='bg-white p-4 rounded-lg flow-root text-center'>


<div className='text-violet-600  text-xl font-bold '>
    <AiOutlineShop/>
</div>




  <label className="block mb-2 font-light text-sm font-sans text-gray-600">Total Expense</label>
  <p className='font-semibold text-center text-lg font-san text-neutral-800'>$3,326</p>

  </div>


  <div className='bg-white p-4 rounded-lg flow-root text-center'>


<div className='text-emerald-600  text-xl font-bold '>
    <GoPeople/>
</div>




  <label className="block mb-2 font-light text-sm font-sans text-gray-600">Total Visitors</label>
  <p className='font-semibold text-center text-lg font-san text-neutral-800'>$5,325</p>

  </div>




  <div className='bg-white p-4 rounded-lg flow-root text-center'>


<div className='text-purple-600  text-xl font-bold '>
    <BsListNested/>
</div>




  <label className="block mb-2 font-light text-sm font-sans text-gray-600">Total Orders</label>
  <p className='font-semibold text-center text-lg font-san text-neutral-800'>$1,326</p>

  </div>









</div>




























<div className='flow-root py-10 px-10'>

<div className='w-full bg-white float-left p-10  rounded-xl'>

<h1 className='font-semibold text-xl font-san text-neutral-800'>Form Title</h1>
        <p className='font-light text-m font-san text-neutral-800'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim..</p>


      <div className='pt-5 flow-root'>
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg  bg-red-50 border border-red-800 border-2 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-sm float-left px-1"><RiErrorWarningLine/></span> Senectus malesuada suspendisse bibendum elit amet vitae.
</div>
</div>

<div >

<table className='border border-neutral-800content-center'>
  <thead className='bg-neutral-300 border border-neutral-800'>
    <tr>
      <th className='border'>Table Title</th>
      <th className='border'>Table Title</th>
      <th className='border'>Table Title</th>
      <th className='border'>Table Title</th>

    </tr>
  </thead>
  <tbody>
    <tr >
      <td className='border'>Etiam purus in</td>
      <td className='border'>Curabitur donec dui</td>
      <td className='border'>Morbi pharetra, accumsan</td>
      <td className='border'></td>
    </tr>
    <tr >
      <td className='border'>Duis eget habitant</td>
      <td className='border'>At amet odio</td>
      <td className='border'>Commodo eget scelerisque</td>
      <td className='border'></td>
    </tr>
    
  </tbody>
</table>






</div>




</div>


</div>





















<div className='px-10 pt-10'> 
<div className='w-full bg-white float-left p-10  rounded-xl'>

<h1 className='font-semibold text-xl font-san text-neutral-800'>Form Title</h1>
        <p className='font-light text-m font-san text-neutral-800'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim..</p>

        <div className='flow-root'>


<div className='float-left pt-3 px-2'>
<button id="small-input" className="block w-full  p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 hover:bg-amber-200 hover:border-amber-300">English</button>
</div>

<div className='float-left pt-3 px-2'>
<button id="small-input" className="block w-full p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 hover:bg-amber-200 hover:border-amber-300">Turkish</button>
</div>
</div>

<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>



    <div className='flow-root'>

    <div className='float-left pr-10'>

    <label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    
    <select id="countries" className="block w-[300px] p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 "placeholder="Placeholder content" required>
      <option selected>choose</option>
      <option value="US">T1</option>
      <option value="CA">T2</option>
      <option value="FR">T3</option>
      <option value="DE">T4</option>
    </select>


</div>





<div className='float-left'>

<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 px-20 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
</div>

<div className='float-right'>
<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 px-20 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
</div>
</div>







    <div className='flow-root'>


<div className='float-left'>

<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 px-20 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
</div>

<div className='float-right'>
<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 px-20 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
</div>
</div>



<div>
<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
<textarea id="message" className="block w-full p-3 h-[191px] font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></textarea>
</div>


</div>

</div>














 
 
  <div className='flow-root py-20 px-10'>
    
    
    

  <div className='w-2/3 bg-white float-left p-10 rounded-xl'>

  <h1 className='font-semibold text-xl font-san text-neutral-800'>Form Title</h1>
        <p className='font-light text-m font-san text-neutral-800'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim..</p>

        <label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>

    <label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    
<select id="countries" className="block w-full p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 "placeholder="Placeholder content" required>
  <option selected></option>
  <option value="US">T1</option>
  <option value="CA">T2</option>
  <option value="FR">T3</option>
  <option value="DE">T4</option>
</select>


<div className='flow-root'>


<div className='float-left'>

<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 px-20 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
</div>

<div className='float-right'>
<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 px-20 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>
</div>
</div>



<div>
<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
<textarea id="message" className="block w-full p-3 h-[191px] font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></textarea>
</div>



  </div>




  <div className='bg-white float-right w-1/4 p-10 rounded-xl'>

    

  <h1 className='font-semibold text-xl font-san text-neutral-800'>Form Title</h1>
        
        <label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    <input type="text" id="small-input" className="block w-full p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></input>

    <label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
    
<select id="countries" className="block w-full p-3 font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 "placeholder="Placeholder content" required>
  <option selected></option>
  <option value="US">T1</option>
  <option value="CA">T2</option>
  <option value="FR">T3</option>
  <option value="DE">T4</option>
</select>

<label className="block mb-2 pt-5 font-light text-m font-sans text-neutral-800">Label title</label>
<textarea id="message" className="block w-full p-3 h-[170px] font-light font-sans text-lg text-neutral-800 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg placeholder:font-light  placeholder:font-sans placeholder:text-neutral-700 " placeholder="Placeholder content" required></textarea>
<div className='pt-5'>
<button type="submit" className="block w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-lg font-sans p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "><a href='p2.tsx'>Button title</a></button>
</div>
  </div>

    
    
    
    
    </div>  

















</div>       


      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>


    </main>
  )
}
