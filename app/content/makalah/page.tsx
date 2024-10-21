'use client'
import PDFViewerModal from '@/components/embedpdf/PdfViewerModal'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import React from 'react'

const Makalah: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="px-48">
        <div className="">
          <h1 className="text-3xl font-bold text-center mt-10">PEMBUATAN MAKALAH</h1>
          <p className="text-xl flex justify-center items-center font-semibold">Kumpulan Makalah Kita</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 justify-between">
          
          {/* Menggunakan komponen PDFViewerModal dengan props */}
          <PDFViewerModal
            pdfSrc="/TugasArtikle.pdf"
            thumbnailSrc="/banner1.png"
          />

          <PDFViewerModal
            pdfSrc="/TugasGeografi.pdf"
            thumbnailSrc="/path-to-thumbnail2.jpg"
          />

          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/ThirdArticle.pdf"
            thumbnailSrc="/path-to-thumbnail3.jpg"
          />

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Makalah;
