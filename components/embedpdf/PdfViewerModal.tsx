import React, { useState } from 'react';

interface PDFViewerModalProps {
  pdfSrc: string;       // Lokasi atau URL dari PDF
  thumbnailSrc: string; // Lokasi atau URL dari thumbnail PDF
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ pdfSrc, thumbnailSrc }) => {
  // State untuk menampilkan atau menyembunyikan modal
  const [showPDF, setShowPDF] = useState(false);

  // Fungsi untuk menampilkan modal PDF
  const handleShowPDF = () => {
    setShowPDF(true);
  };

  // Fungsi untuk menutup modal PDF
  const handleClosePDF = () => {
    setShowPDF(false);
  };

  return (
    <div className="w-[34rem] h-[44rem] bg-white shadow-black rounded-lg shadow-md overflow-hidden">
      {/* Thumbnail PDF */}
      <div className="relative w-full h-full cursor-pointer" onClick={handleShowPDF}>
        <img
          src={thumbnailSrc}  // Menggunakan props thumbnailSrc
          alt="Halaman Pertama Makalah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <p className="text-white font-bold text-xl">Klik untuk Baca PDF</p>
        </div>
      </div>

      {/* Modal PDF Viewer */}
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50" onClick={handleClosePDF}>
          <div className="relative w-[80%] h-[90%] bg-white shadow-lg rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={pdfSrc}  // Menggunakan props pdfSrc
              width="100%"
              height="100%"
              title="PDF Viewer"
              frameBorder="0"
            ></iframe>
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
