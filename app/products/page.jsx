'use client'
import { useRouter } from 'next/navigation';
import {useState} from 'react'
  import { useRef, useEffect } from 'react';


const dummyData = [
      {
    name: 'Configurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Achari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Achari Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
  {
    name: 'Configurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Achari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Achariiiib Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
  {
    name: 'Acharijhkj Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
  {
    name: 'Achari Fjlkkjljkish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
      {
    name: 'Cojkjlkjjlnfigurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membersolljjl;hip Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44tejlkljkjlkst',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Achari ll;;llFish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Achari Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
  {
    name: 'Configurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Achari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Achari Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
      {
    name: 'Configurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Achari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Achari Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
  {
    name: 'Configurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Achari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Achari Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
    {
    name: 'Configurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1Membership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'Aciiihari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'Acuuuhari Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
  {
    name: 'Con0000figurable',
    sku: 'nan',
    type: 'nan',
    published: false,
    image: null,
    redirect: '#',
    price: null,
  },
  {
    name: '1M999embership Product',
    sku: 'UAS-4',
    type: 'Default',
    published: true,
    image: '/logo.png',
    redirect: '#',
    price: '₹299.00',
  },
  {
    name: '44888test',
    sku: 'abc,qwe,zxc,asd',
    type: 'Lip & Cheek',
    published: true,
    image: '/test-image.png',
    redirect: '#',
    price: '₹249.50 - ₹499.50',
  },
  {
    name: 'lllchari Fish Tikka',
    sku: 'FG97,BLR167',
    type: 'Cambay Tiger',
    published: true,
    image: null,
    redirect: '#',
    price: '₹237.00 - ₹833.00',
  },
  {
    name: 'ggg Fish Tikka - copy (2006)',
    sku: 'FG97-copy-2006,BLR167-copy-2006',
    type: 'Cambay Tiger',
    published: true,
    image: '/refresh-icon.png',
    redirect: '#',
    price: '₹1.00 - ₹200.00',
  },
];


const products = () => {
  const [activeElement,setActiveElement]=useState(-1);
  const [rows,setRows]=useState(10);
  const [closeDropDownRows,setCloseDropDownRows]=useState(false);
  const [startingPageNumber,setStartingPageNumber]=useState(0)
    const [endingPageNumber,setEndingPageNumber]=useState(1)
  const dropdownRef = useRef(null);
  const pages=Math.ceil(dummyData?.length/rows);
  const router=useRouter();
  
  const value=dummyData.slice(startingPageNumber*rows,endingPageNumber*rows);
  console.log("value",value);
  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCloseDropDownRows(false); // 👈 close the dropdown
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
    <div className=" py-4 px-14 text-[#3d3d3d] max-w-[calc(100%-21%)] overflow-y-auto max-h-screen">
    <div className="flex justify-between items-center w-full mb-4">
       <div className="my-5 text-3xl ">
    Products
    </div>
    <button className="bg-[#06847B] px-4 py-3 h-fit rounded-lg text-neutral-50 cursor-pointer" onClick={()=>router.push("/products/add")}>CREATE PRODUCTS</button>
    </div>
    <div className="border border-gray-300 rounded-lg pt-4 ">
    <div className="border-b border-gray-300 "> 
    <div className="border-b-3 border-[#06847B] w-28 py-2 mx-4 px-2 ">
      ALL Products
    </div>
   </div>
    <div className="py-8 px-4 flex gap-3">
       <div className="px-4 py-2 border border-[#06847B] w-fit text-[#06847B] rounded-sm font-semibold">FILTERS</div>
       <input type='text' placeholder='Search Products...' 
  className="w-full border border-gray-300 px-4 focus:border-[#06847B] focus:border-2 rounded-sm outline-none placeholder-transparent focus:placeholder-[#3d3d3d] focus:placeholder-opacity-50"
   />
    </div>
    <div className="overflow-x-auto max-w-full">
    <table className=" text-left border-t border-gray-200 px-2">
      <thead className="bg-gray-100 text-lg text-gray-600 w-full">
        <tr>
   
               <th className="py-3 pr-15 pl-5">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-8">Name</th>
                <th className="py-3 px-8" >Sku</th>
                <th className="py-3 px-8" >Type</th>
                <th className="py-3 px-8">Published</th>
         <th className="py-3 px-8">Redirect	</th>
          <th className="py-3 px-8">Price</th>

        </tr>
      </thead>
      <tbody className="py-3 px-8">
      {dummyData.slice(startingPageNumber*rows,endingPageNumber*rows).map((value,index)=>(
           <tr key={index}
            className={`hover:bg-[#06847b4d]  py-3  px-5  ${index===dummyData.length-1?"":"border-b border-gray-200"} ${
                    index === activeElement ? 'bg-[#06847B]' : 'bg-white'
                  }`}
            onClick={()=>setActiveElement(index)}
           
           >
        <td className="p-3 pl-5">
          <input type='checkbox'/>
        </td>
      
         <td className="px-8 py-3 flex items-center gap-2 "> 
              <div>
          {value.image ? (
                      <img
                        src={value.image}
                        alt="Product"
                        className="w-8 h-8 rounded object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    )}
                    </div>
                  <div className="p-3 px-8">{value.name}</div>

                    </td>
        <td className="p-3 px-8">{value.sku}</td>
        <td className="p-3 px-8">{value.type}</td>
        <td className="p-3 px-8">  
         {value.published ? (
                      <span className="flex items-center gap-2 text-green-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span> Published
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-pink-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-pink-600"></span> Not published
                      </span>
                    )}</td>
         <td className="p-3 px-8">{value.redirect}</td>
        <td className="p-3 px-8">{value.price}</td>           
       
        </tr>
      ))}
      
      </tbody>
    </table>
</div>
    <div className="flex justify-between border-t border-gray-300 py-4 px-8">
       <div className="flex items-center gap-3  ">
           <div>Total Products : {dummyData?.length} |</div>
     <div>Pages: {pages} |</div>
     
     <div className="flex items-center  relative " ref={dropdownRef} >
     <div>
         <span>No of Rows:</span>
          <span className="text-[#06847B]" onClick={()=>setCloseDropDownRows(true)}> {rows} </span>
     </div>
     <span onClick={()=>setCloseDropDownRows(true)}>  
     <svg className="" focusable="false" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg>
</span>
     {closeDropDownRows &&
     <div className="absolute right-0 bottom-0 border bg-white border-gray-300 py-2 px-4 rounded-lg shadow-lg">
      <div className="hover:bg-gray-300 px-4 py-1 rounded-lg" onClick={()=>{setRows(10) 
                                                                                setCloseDropDownRows(false)      }}>10</div>
      <div className="hover:bg-gray-300 px-4 py-1 rounded-lg" onClick={()=>{setRows(20) 
                                                                                setCloseDropDownRows(false)      }}>20</div>
      <div className="hover:bg-gray-300 px-4 py-1 rounded-lg" onClick={()=>{setRows(30) 
                                                                                setCloseDropDownRows(false)      }}>30</div>
      <div className="hover:bg-gray-300 px-4 py-1 rounded-lg" onClick={()=>{setRows(50) 
                                                                                setCloseDropDownRows(false)      }}>50</div>
      <div className="hover:bg-gray-300 px-4 py-1 rounded-lg" onClick={()=>{setRows(100) 
                                                                                setCloseDropDownRows(false)      }}>100</div>
     </div>
     }

    
     </div>
          <div>Page Number: {startingPageNumber + 1} </div>

    </div>
    <div className="flex gap-3">
      <span onClick={()=>{
         if(startingPageNumber  >  0){
            setEndingPageNumber(
          prev=>(prev-1))
          setStartingPageNumber(prev=>(prev-1))
          }
          } 
         }
         disabled={startingPageNumber <= 0}
      >
          <svg fill="#616161"  className="w-7 h-7 rounded-full border border-gray-300 hover:bg-[#93b1af]" width="32" height='32' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 7l-5 5 5 5V7z"></path></svg></span>
          <span>
          <span 
          disabled={startingPageNumber+1 > pages}

          onClick={()=>{
            if(startingPageNumber + 1 < pages)
            {
            setEndingPageNumber(prev=>(prev+1))
          setStartingPageNumber(prev=>(prev+1))
          }
          }
          }>

      <svg  fill="#616161" className="w-7 h-7  rounded-full border border-gray-300 hover:bg-[#93b1af]" focusable="false" width="32" height='32' viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l5-5-5-5v10z"></path></svg>          </span>
</span>
    </div>
    </div>
    </div>
     
    <div>
  
</div>
    </div>
  )
}

export default products