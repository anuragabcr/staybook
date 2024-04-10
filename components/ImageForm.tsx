import React, { useState } from 'react';

interface ImageUploadProps {
    selectedFiles: FileList | null ; 
    setSelectedFiles: (selectedFiles: FileList) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ selectedFiles, setSelectedFiles }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
    
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setSelectedFiles(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="border-dashed border-2 border-gray-400 p-4 rounded-lg"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        id='fileInput'
      />
      <label className="cursor-pointer" htmlFor='fileInput'>
        <span className="text-lg font-semibold">Drag & Drop</span> or <span className="text-blue-500">Select Images</span>
      </label>
      {selectedFiles && (
        <div className="mt-4 flex flex-wrap">
          {Array.from(selectedFiles).map((file, index) => (
            <div key={index} className="w-1/4 p-2">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
