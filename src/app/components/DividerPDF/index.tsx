"use client"
import React, { useState, ChangeEvent } from 'react';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';


export const DividerPDF  = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleProcessPDF = async () => {
      if (!selectedFile) {
          alert('Selecione um arquivo PDF.');
          return;
      }

      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const totalPages = pdfDoc.getPageCount();
  
      const zip = new JSZip();
      for (let i = 0; i < totalPages; i++) {
        const newPdfDoc = await PDFDocument.create();
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
        newPdfDoc.addPage(copiedPage);
  
        const pdfBytes = await newPdfDoc.save();
        zip.file(`page-${i + 1}.pdf`, pdfBytes);
      }
  
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'split-pages.zip');
  
    };


    return (
        <>
            <h4>Suba seu arquivo aqui!!</h4>
            <input type="file" onChange={handleFileChange} />
            <button 
                className="bg-orange-300 px-6 py-2 text-black rounded-md hover:bg-orange-500 ransition-colors duration-300"
                onClick={handleProcessPDF}
            >Enviar</button>
        </>
    )
}