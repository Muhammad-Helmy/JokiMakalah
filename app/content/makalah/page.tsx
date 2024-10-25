'use client'
import PDFViewerModal from '@/components/embedpdf/PdfViewerModal'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import React from 'react'


const Makalah: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4 sm:px-8 md:px-2 xl:px-28"> {/* Mengubah padding untuk responsivitas */}
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-5 sm:mt-10">PEMBUATAN MAKALAH</h1> {/* Ubah ukuran teks dan margin untuk mobile */}
          <p className="text-lg sm:text-xl flex justify-center items-center font-semibold">Kumpulan Makalah Kita</p> {/* Ubah ukuran teks untuk mobile */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5  mt-5 lg:mt-10"> {/* Ubah grid untuk mobile, tablet, dan desktop */}
          
          <div>
          {/* Menggunakan komponen PDFViewerModal dengan props */}
          <PDFViewerModal
            pdfSrc="/pdf/makalah/MakalahKesultanan.pdf"
            thumbnailSrc="/Demak.png"
            textPdf="Kesultanan Demak"
          />
          </div>

          <div>
          <PDFViewerModal
            pdfSrc="/pdf/makalah/MakalahMonkasel.pdf"
            thumbnailSrc="/Submarine.png"
            textPdf="Monumen Kapal Selam"
          />
          </div>

          <div>
          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/pdf/makalah/MakalahBudidaya.pdf"
            thumbnailSrc="/Budidaya.png"
            textPdf="Budidaya Ikan"
          />
          </div>

          <div className="">
          {/* Tambahkan PDFViewerModal lagi jika perlu */}
          <PDFViewerModal
            pdfSrc="/pdf/makalah/MakalahKonstitusi.pdf"
            thumbnailSrc="/Konstitusi.png"
            textPdf="Makalah Konstitusi"
          />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Makalah;
