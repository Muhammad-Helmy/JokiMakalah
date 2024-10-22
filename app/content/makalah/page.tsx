'use client'
import PDFViewerModal from '@/components/embedpdf/PdfViewerModal'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import React from 'react'

const Makalah: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4 sm:px-8 md:px-16 lg:px-48"> {/* Mengubah padding untuk responsivitas */}
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-5 sm:mt-10">PEMBUATAN MAKALAH</h1> {/* Ubah ukuran teks dan margin untuk mobile */}
          <p className="text-lg sm:text-xl flex justify-center items-center font-semibold">Kumpulan Makalah Kita</p> {/* Ubah ukuran teks untuk mobile */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-7 mt-5 sm:mt-10"> {/* Ubah grid untuk mobile, tablet, dan desktop */}
          
          {/* Menggunakan komponen PDFViewerModal dengan props */}
          <PDFViewerModal
            pdfSrc="/TugasArtikle.pdf"
            thumbnailSrc="/banner1.png"
          />

          <PDFViewerModal
            pdfSrc="/TugasGeografi.pdf"
            thumbnailSrc="/Mkons.png"
          />

          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/ThirdArticle.pdf"
            thumbnailSrc="/MKons.png"
          />

          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/MakalahKonstitusi.pdf"
            thumbnailSrc="/MKons.png"
          />

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Makalah;
