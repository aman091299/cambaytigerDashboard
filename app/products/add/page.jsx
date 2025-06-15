"use client";
import React, { useState } from "react";
import { BASE_URL } from "@/app/utils/constants";
import DynamicField from "@/app/components/DynamicField";
import { useRouter } from "next/navigation";
const categories = [
    {
    name: "All",
    slug: "all",
    children: [],
  },
  {
    name: "Parathas",
    slug: "parathas",
    children: [],
  },
  {
    name: "Curries",
    slug: "curries",
    children: [],
  },
  {
    name: "Combos",
    slug: "combos",
    children: [],
  },
  {
    name: "Kits & Combos",
    slug: "kits-and-combos",
    children: [],
  },
  {
    name: "Sustainability",
    slug: "sustainability",
    children: [],
  },
  {
    name: "Product Spotlight",
    slug: "product-spotlight",
    children: [],
  },
  {
    name: "Fish & Sea Food",
    slug: "fish-seafood",
    children: [
      { name: "All", slug: "all" },
      { name: "Recipes", slug: "recipes" },
      { name: "Frozen Raw Seafood", slug: "frozen-raw-seafood" },
      { name: "Sea Water", slug: "sea-water" },
      { name: "Sea Water", slug: "sea-water-2" },
    ],
  },
  {
    name: "Expert Advice",
    slug: "expert-advice",
    children: [],
  },
  {
    name: "Health & Nutrition",
    slug: "health-nutrition",
    children: [],
  },
  {
    name: "Wholesome Wellness",
    slug: "wholesome-wellness",
    children: [],
  },
  {
    name: "Freebies with product",
    slug: "freebies-with-product",
    children: [],
  },
  {
    name: "No search",
    slug: "no-search",
    children: [],
  },
];


const addProduct = () => {

  const [searchEngine, setSearchEngine] = useState(false);
  const [categoryInput, setCategoryInput] = useState(""); 
  const [categoryFocused, setCategoryFocused] = useState(false);
  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const [slug,setSlug]=useState('')
  const [fields, setFields] = useState([]);
  const [searchEngineTitle,setSearchEngineTitle]=useState('')
    const [searchEngineDescription,setSearchEngineDescription]=useState('')
    const [error,setError]=useState({});

   const [dropDownCategories,setDropDownCategories]=useState(false)
    const isFormValid = name.trim() !== "" || categoryInput.trim() !== "";
    console.log("isFormValid",isFormValid)

      const router=useRouter();


      const validateHandler=()=>{
        const errors={}
        if(!name.trim()){
            errors.name="Name is required";
            
        }
      else if (!categoryInput.trim()){
            errors.category="Category is required";
            

        }
        return errors;
      }
  const handleProductSave=async()=>{
   const validatingError= validateHandler();
   console.log(validatingError)

   if(Object.keys(validatingError).length > 0){
    setError(validatingError)
       return;
   }
   
   
    try {
      setError({})
          
            const res=await fetch(BASE_URL+"/product/create/categoryInput",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:'include',
        body:JSON.stringify({name,description,slug,searchEngineTitle,searchEngineDescription,fields})
      })    
      const data=await res.json();
      console.log("data..",data)
      
    } catch (error) {
      console.log("Error while creating via dashboard product",error)
    }

  }

  return (
     <div className=" py-4 px-14 text-[#3d3d3d] max-w-[calc(100%)] overflow-y-scroll max-h-[calc(100%)]">
    <div className="py-10 px-6 w-full ">
    <div>
      <h1 className="text-2xl px-6">New Product</h1>
      <div className="flex gap-10 px-6">
        <div>
          <div className="py-6">
            <div className=" bg-white border border-gray-300  rounded-lg shadow-2xl">
              <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">
                General Information
              </div>
              <div className="px-4 py-4 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                />
                {
                  error.name &&<div className="text-red-600 py-1">{error.name}</div> 
                }
                <div>
                  <textarea
                    rows="4"
                    placeholder="Description"
                    value={description}
                  onChange={(e)=>setDescription(e.target.value)}

                    className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="w-[calc(100%-35%)] bg-white border border-gray-300  rounded-lg shadow-2xl">
              <div className="py-4 text-xl border-b border-gray-300 w-full px-4 flex justify-between">
                <div>Search Engine Preview</div>
                <button
                  className="text-[#06847B] text-lg cursor-pointer"
                  onClick={() => setSearchEngine(true)}
                >
                  EDIT WEBSITE SEO
                </button>
              </div>
              {searchEngine && (
                <div className="px-4 py-4 flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Slug"
                    value={slug}
                    onChange={(e)=>setSlug(e.target.value)}
                    
                    className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                  />
                  <input
                    type="text"
                    placeholder="Search Engine Title"
                    value={searchEngineTitle}
                    onChange={(e)=>setSearchEngineTitle(e.target.value)}
                    className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                  />

                  <div>
                    <textarea
                      rows="4"
                      placeholder="Search Engine Description"
                  value={searchEngineDescription}
                    onChange={(e)=>setSearchEngineDescription(e.target.value)}
                      className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                    />
                  </div>
                </div>
              )}
              {!searchEngine && (
                <div className="py-6 px-4">
                  Add search engine title and description to make this product
                  easier to find
                </div>
              )}
            </div>
          </div>

          <DynamicField setFields={setFields} fields={fields} />
        </div>
        
        <div className="py-6 ">
        <div className=" bg-white border border-gray-300  rounded-lg h-fit  shadow-2xl">
          <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">
        Organize Product        
          </div>
          <div className="px-4 py-4 flex flex-col gap-3 relative">
          <label
                 onClick={() => setCategoryFocused(true)} 
           className={" absolute left-6  top-8  px-1 transition-all " + (categoryFocused ||categoryInput ? " text-[#06847B] !top-5  py-0 text-sm ":"text-gray-500 ")}>
            Category
          </label>
            <input
              type="text"
               value={categoryInput} 
        onChange={(e)=>{}} 
         onFocus={() => setCategoryFocused(true)} 
        onBlur={() => setCategoryFocused(false)} 
            
              className="py-4 px-4 mt-1 rounded-lg pt-6 pb-0   focus:border-2 border  border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
            />
          <div className="absolute top-7 right-4">
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8" onClick={()=> setDropDownCategories(true)}>
    <g>
      <path fillRule="evenodd" d="M7 10l5 5 5-5z" />
    </g>
  </svg>
</div>
{ dropDownCategories &&
<div className="absolute top-22 left-0 bg-white border border-gray-300  rounded-lg  px-4 py-2  max-h-60 overflow-y-auto ">

  {categories?.map((cat)=>(
    <div className="px-4 py-2  hover:bg-gray-100 cursor-pointer"  key={cat.slug} onBlur={()=>setDropDownCategories(false)} onClick={()=>{setCategoryFocused(true)
    setDropDownCategories(false)
    setCategoryInput(cat?.name)}}
      >
      {cat?.name}
    </div>
  ))
  }

 </div>
 }

          </div>
            {
                  error.category &&<div className="text-red-600 py-1 px-4">{error.category}</div> 
                }
        </div>
      </div>
      </div>
    </div>
            { /* Save button at the bottom */ }
    <div className="bg-white rounded-lg w-full max-w-[70%]  mx-auto py-4 border border-gray-300 fixed bottom-0  ml-6 shadow-2xl" >
      <div className="flex justify-end  px-4 gap-8 items-center  ">
        <button className="text-gray-500 hover:bg-gray-100  px-4 py-2  cursor-pointer" onClick={()=>router.push("/products")}>BACK</button>
        <button className={"py-2 px-6 bg-[#06847B] text-neutral-50 rounded-lg hover:bg-[#4a7c79]  disabled:bg-[#55817e]  disabled:text-neutral-900 disabled:opacity-70"+ (isFormValid ? " cursor-pointer":"")} onClick={()=>handleProductSave()}  disabled={!isFormValid}> SAVE </button>

       
      </div>
    </div>

    </div>

    </div>
  );
};

export default addProduct;
