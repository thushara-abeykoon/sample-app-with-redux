import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdUploadFile } from "react-icons/md";
const UploadImage = () => {
  const [file, setFile] = useState();
  const [drag, setDrag] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="font-mono w-full h-screen flex flex-col justify-between items-center p-10">
      <h1 className="text-3xl font-bold">Handwriting Translater</h1>
      <div className="flex justify-around items-center w-full">
        <div
          onDragEnterCapture={() => {
            setDrag(true);
          }}
          onDragExitCapture={() => setDrag(false)}
          {...getRootProps()}
          className={`bg-[#5c5c5c] p-10 transition-all duration-150 w-full h-96 flex flex-col justify-center items-center gap-5
          }`}
        >
          <div className="rounded-xl text-[#adadad] border-dashed border-[#adadad] flex flex-col justify-center gap5 items-center border-2 w-full h-full">
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                className="h-full rounded-xl"
              />
            ) : (
              <>
                <input {...getInputProps()} />
                <MdUploadFile className="text-5xl" />

                <p className="text-2xl">Drop files here</p>
              </>
            )}
          </div>
        </div>
        <textarea className=" border-l-2 border-white h-96 w-full outline-none bg-[#5c5c5c] p-10 text-lg text-white" />
      </div>
      <div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
          Translate
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
