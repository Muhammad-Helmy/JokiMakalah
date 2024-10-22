import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';  // Import PDF.js components
import '@react-pdf-viewer/core/lib/styles/index.css';    // Import CSS untuk PDF viewer

interface PDFViewerModalProps {
  pdfSrc: string;       // Lokasi atau URL dari PDF
  thumbnailSrc: string; // Lokasi atau URL dari thumbnail PDF
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ pdfSrc, thumbnailSrc }) => {
  const [showPDF, setShowPDF] = useState(false);

  const handleShowPDF = () => {
    setShowPDF(true);
  };

  const handleClosePDF = () => {
    setShowPDF(false);
  };

  return (
    <div className="w-full sm:w-[24rem] md:w-[30rem] lg:w-[34rem] h-[24rem] sm:h-[34rem] md:h-[40rem] lg:h-[44rem] bg-white rounded-lg shadow-md border overflow-hidden"> {/* Responsif untuk berbagai ukuran layar */}
      {/* Thumbnail PDF */}
      <div className="relative w-full h-full cursor-pointer" onClick={handleShowPDF}>
        <img
          src={thumbnailSrc}
          alt="Halaman Pertama Makalah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
        </div>
      </div>

      {/* Modal PDF Viewer */}
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50" onClick={handleClosePDF}>
          <div className="relative w-[90%] h-[80%] md:w-[80%] md:h-[90%] lg:w-[60%] lg:h-[80%] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}> {/* Ukuran modal responsif */}
            <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
              <Viewer fileUrl={pdfSrc} /> {/* PDF.js untuk menampilkan PDF */}
            </Worker>
            <button className="absolute top-4 right-4 text-white bg-red-500 px-3 py-2 rounded" onClick={handleClosePDF}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PDFViewerModal;
