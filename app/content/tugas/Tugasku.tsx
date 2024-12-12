'use client'
import PDFViewerModal from '@/components/embedpdf/PdfViewerModal'
import React from 'react'


const Tugasku: React.FC = () => {
  return (
    <div>
      <main className="px-4 sm:px-8 md:px-2 xl:px-28"> {/* Mengubah padding untuk responsivitas */}
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-5 sm:mt-10">PEMBUATAN TUGAS</h1> {/* Ubah ukuran teks dan margin untuk mobile */}
          <p className="text-lg sm:text-xl flex justify-center items-center font-semibold">Kumpulan Tugas Kita</p> {/* Ubah ukuran teks untuk mobile */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5  mt-5 lg:mt-10"> {/* Ubah grid untuk mobile, tablet, dan desktop */}
          
          <div>
          {/* Menggunakan komponen PDFViewerModal dengan props */}
          <PDFViewerModal
            pdfSrc="/TugasTransportasi.pdf"
            thumbnailSrc="/transportasi.png"
            textPdf="Transportasi"
          />
          </div>

          <div>
          <PDFViewerModal
            pdfSrc="/TugasInfografis.pdf"
            thumbnailSrc="/Infografis.png"
            textPdf="Infografis"
          />
          </div>

          <div>
          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/TugasGeografi.pdf"
            thumbnailSrc="/Geografi.png"
            textPdf="Geografi"
          />
          </div>

          <div className="">
          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/TugasArtikle.pdf"
            thumbnailSrc="/Keberagaman.png"
            textPdf="Keberagaman"
          />
          </div>

        </div>
      </main>
    </div>
  )
}

export default Tugasku;
