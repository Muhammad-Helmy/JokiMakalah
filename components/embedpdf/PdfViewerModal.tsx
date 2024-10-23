import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';  // Import PDF.js components
import '@react-pdf-viewer/core/lib/styles/index.css';    // Import CSS untuk PDF viewer

interface PDFViewerModalProps {
  pdfSrc: string;       // Lokasi atau URL dari PDF
  thumbnailSrc: string; // Lokasi atau URL dari thumbnail PDF
  textPdf: string; //text nama
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ pdfSrc, thumbnailSrc, textPdf }) => {
  const [showPDF, setShowPDF] = useState(false);

  const handleShowPDF = () => {
    setShowPDF(true);
  };

  const handleClosePDF = () => {
    setShowPDF(false);
  };

  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-[32rem] xl:w-[40rem] h-[24rem] sm:h-96 md:h-[27rem] lg:h-[38rem] xl:h-[44rem] rounded-lg shadow-md border dark:border-gray-600 dark:bg-black overflow-hidden"> {/* Responsif untuk berbagai ukuran layar */}
      {/* Thumbnail PDF */}
      <div className="relative w-full cursor-pointer sm:w-80 md:w-96 lg:w-[32rem] xl:w-[40rem] h-[22rem] sm:h-[22rem] md:h-96 lg:h-[34rem] xl:h-[40rem]" onClick={handleShowPDF}>
        <img
          src={thumbnailSrc}
          alt="Halaman Pertama Makalah"
          className="w-full h-full object-cover border-b "
        />
        <p className="items-center justify-center text-center text-base dark:text-white dark:bg-black  font-semibold p-1 md:p-5">{textPdf}</p>
      </div>

      {/* Modal PDF Viewer */}
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50" onClick={handleClosePDF}>
          <div className="relative w-[90%] h-[80%] md:w-[80%] md:h-[90%] lg:w-[60%] lg:h-[80%] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}> {/* Ukuran modal responsif */}
            <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
              <Viewer fileUrl={pdfSrc} /> {/* PDF.js untuk menampilkan PDF */}
            </Worker>
            <button className="absolute top-4 right-4 selection:bg-gray-200  font-semibold text-black px-3 py-1 rounded-full" onClick={handleClosePDF}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PDFViewerModal;
