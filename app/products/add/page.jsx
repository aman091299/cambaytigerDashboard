"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import DynamicField from '@/app/components/DynamicField';


const addProduct = () => {
      const [description, setDescription] = useState("");
      const [searchEngine,setSearchEngine]=useState(false);


  return (
    <div className="py-10 px-4 w-full">
        <h1 className="text-2xl">New Product</h1>
        <div>
          <div className="py-6">
            <div className="w-[calc(100%-35%)] bg-white border border-gray-300  rounded-lg">
                <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">General Information</div>
                <div className="px-4 py-4 flex flex-col gap-3">
                     <input type="text" placeholder='Name'  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>
                     <div>
                     <textarea rows="4" placeholder='Description'  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>
          
                </div>
                </div>
               
            </div>
          </div>

                    <div className="py-6">
            <div className="w-[calc(100%-35%)] bg-white border border-gray-300  rounded-lg">
                <div className="py-4 text-xl border-b border-gray-300 w-full px-4 flex justify-between">
                <div>Search Engine Preview</div>
                <button className="text-[#06847B] text-lg cursor-pointer" onClick={()=>setSearchEngine(true)}>EDIT WEBSITE SEO</button>
                </div>
               {searchEngine
               && <div className="px-4 py-4 flex flex-col gap-3">
                     <input type="text" placeholder='Slug'  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>
                       <input type="text" placeholder='Search Engine Title'  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>

                    
                     <div>
                     <textarea rows="4" placeholder='Search Engine Description'  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>
          
                </div>

                </div>} 
                {
                   !searchEngine   &&   <div className="py-6 px-4">
                  Add search engine title and description to make this product easier to find
                </div>
                }

                
               
            </div>
               </div>

             <DynamicField/>
            
            <div></div>
        </div>

    </div>
  )
}

export default addProduct