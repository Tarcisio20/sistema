"use client"

import { ChangeEvent, useState } from "react";

export const DividerPDF = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setSelectedFile(file);
        }
      };

    const handleUpload = async () => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append('file', selectedFile);
    
          try {
            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });
    
            if (response.ok) {
              console.log('File uploaded successfully');
              // Handle success behavior
            } else {
              console.error('Failed to upload file');
              // Handle failure behavior
            }
          } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error behavior
          }
        }
      };


    return (
        <>
            <h4>Suba seu arquivo aqui!!</h4>
            <input type="file" onChange={handleFileChange} />
            <button 
                className="bg-orange-300 px-6 py-2 text-black rounded-md hover:bg-orange-500 ransition-colors duration-300"
                onClick={handleUpload}
            >Enviar</button>
        </>
    )
}