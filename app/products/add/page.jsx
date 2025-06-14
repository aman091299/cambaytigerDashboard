"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';


const addProduct = () => {
      const [description, setDescription] = useState("");
      const [searchEngine,setSearchEngine]=useState(false);
      const [showMetaData,setShowMetaData]=useState(false);


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

                <div className="py-6">
            <div className="w-[calc(100%-35%)] bg-white border border-gray-300  rounded-lg">
                <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">Metadata</div>
                {!showMetaData &&
                   <div className="px-4 py-4 flex flex-col gap-3">
                   <div className='text-xl'>There is no metadata created for this element.
                        Use the button below to add new metadata field</div>
                </div>
                }
                {
                  showMetaData&&
                  <div>
                        <div className="px-4 py-4 flex flex-col gap-3">
                 <div>1 Field </div>
                 <div className="grid grid-cols-24">
                  <div className="col-span-8">
                          <div>Field</div>
                     <input type="text" placeholder='Key'  className="py-2 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>

                  </div>
                               <div className="col-span-8">
                          <div>Value</div>
                     <input type="text"  disabled={true}  className="py-2 px-4 disabled:bg-[#f4f4f4] rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "/>

                  </div>

                               <div className="col-span-8">
                          <div>Actions</div>
                      <div className="flex gap-2 ">
                         <svg  className="w-6 h-6" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>

                        <svg  className="w-6 h-6" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                      </div>

                  </div>
                 </div>
                </div>
                  </div>
                }
               
                <div 
                className="py-4 flex text-[#06847B] cursor-pointer justify-end text-xl border-t border-gray-300 w-full px-4 "
                 onClick={()=>setShowMetaData(true)}>ADD FIELD</div>

            </div>
          </div>
            
            <div></div>
        </div>

    </div>
  )
}

export default addProduct