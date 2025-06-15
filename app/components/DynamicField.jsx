import { useState } from "react";

const DynamicField = ({fields,setFields}) => {
  const [showMetaData, setShowMetaData] = useState(false);
  console.log("fields1", fields);

  const handleFieldChange = (index, newValue, keyOrValue) => {
    const updatedFields = [...fields];
    updatedFields[index][keyOrValue] = newValue;
    setFields(updatedFields);
  };
  const addField = () => {
    setFields([...fields, { key: "", value: "" }]);
  };
  const deleteField = (index) => {
  const updatedFields = fields.filter((_, i) => i !== index); 
    setFields(updatedFields);
  };


  return (
    <div className="py-6">
      <div className="w-[calc(100%-25%)] bg-white border border-gray-300  rounded-lg shadow-2xl">
        <div className="py-4 text-xl border-b border-gray-300 w-full px-4 ">
          Metadata
        </div>
        {fields.length === 0 && (
          <div className="px-4 py-4 flex flex-col gap-3">
            <div className="text-xl">
              There is no metadata created for this element. Use the button
              below to add new metadata field
            </div>
          </div>
        )}
        {fields.length !== 0 && (
          <div>
            <div className="px-4 py-4 flex flex-col gap-1">
              <div>{fields.length} Field </div>

              {fields?.map((field, index) => (
                <div className="grid grid-cols-12 gap-12" key={index}>
                  <div className="col-span-4">
                    <div>Field</div>
                    <input
                      type="text"
                      placeholder="Key"
                      value={field.key}
                      className="py-2 px-4  rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                      onChange={(e) =>
                        handleFieldChange(index, e.target.value, "key")
                      }
                    />
                  </div>

                  <div className="col-span-4">
                    <div>Value</div>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) =>
                        handleFieldChange(index, e.target.value, "value")
                      }
                      disabled={field.key === ""}
                      className="py-2 px-4 disabled:bg-[#f4f4f4] rounded-lg focus:border-2 border border-gray-300 w-full focus:border-[#06847B] outline-none focus:placeholder:text-[#06847B] "
                    />
                  </div>

                  <div className="col-span-4">
                    <div>Actions</div>
                    <div className="flex gap-2 ">
                      <svg
                      
                        className="w-6 h-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>

                      <svg
                        onClick={() => deleteField(index)}
                        className="w-6 h-6 cursor-pointer"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="py-4 flex text-[#06847B] cursor-pointer justify-end text-xl border-t border-gray-300 w-full px-4 "
          onClick={() => {
            setShowMetaData(true);
            addField();
          }}
        >
          ADD FIELD
        </div>
      </div>
    </div>
  );
};

export default DynamicField;
