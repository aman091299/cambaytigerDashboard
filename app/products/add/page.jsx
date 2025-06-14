"use client";
import React, { useState } from "react";

import DynamicField from "@/app/components/DynamicField";
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
  const [description, setDescription] = useState("");
  const [searchEngine, setSearchEngine] = useState(false);

  return (
    <div className="py-10 px-6 w-full ">
      <h1 className="text-2xl px-6">New Product</h1>
      <div className="flex gap-10 px-6">
        <div>
          <div className="py-6">
            <div className=" bg-white border border-gray-300  rounded-lg">
              <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">
                General Information
              </div>
              <div className="px-4 py-4 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                />
                <div>
                  <textarea
                    rows="4"
                    placeholder="Description"
                    className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="w-[calc(100%-35%)] bg-white border border-gray-300  rounded-lg">
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
                    className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                  />
                  <input
                    type="text"
                    placeholder="Search Engine Title"
                    className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                  />

                  <div>
                    <textarea
                      rows="4"
                      placeholder="Search Engine Description"
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

          <DynamicField />
        </div>
        <div className="py-6">
        <div className=" bg-white border border-gray-300  rounded-lg h-fit  ">
          <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">
        Organize Product        
          </div>
          <div className="px-4 py-4 flex flex-col gap-3 relative">
            <input
              type="text"
              placeholder="Category"
              className="py-4 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
            />
          <div className="absolute top-7 right-4">
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
    <g>
      <path fillRule="evenodd" d="M7 10l5 5 5-5z" />
    </g>
  </svg>
</div>
<div className="absolute top-22 left-0 bg-white border border-gray-300  rounded-lg  px-4 py-2  max-h-60 overflow-y-auto ">
{ 
  categories?.map((cat)=>(
    <div className="px-4 py-2" key={cat.slug}>
      {cat?.name}
    </div>
  ))
 
}
 </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default addProduct;
