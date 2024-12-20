'use client'
import PDFViewerModal from '@/components/embedpdf/PdfViewerModal'
import React from 'react'


const Copywritingku: React.FC = () => {
  return (
    <div>
      <main className="px-4 sm:px-8 md:px-2 xl:px-28"> {/* Mengubah padding untuk responsivitas */}
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-5 sm:mt-10">PEMBUATAN COPYWRITING</h1> {/* Ubah ukuran teks dan margin untuk mobile */}
          <p className="text-lg sm:text-xl flex justify-center items-center font-semibold">Kumpulan Copywriting Kita</p> {/* Ubah ukuran teks untuk mobile */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5  mt-5 lg:mt-10"> {/* Ubah grid untuk mobile, tablet, dan desktop */}
          
          <div>
          {/* Menggunakan komponen PDFViewerModal dengan props */}
          <PDFViewerModal
            pdfSrc="/CopywritingScriptHowToMakeIndomie.pdf"
            thumbnailSrc="/HowToMake.png"
            textPdf="How To Make"
          />
          </div>

          <div>
          <PDFViewerModal
            pdfSrc="/CopywritingDrama.pdf"
            thumbnailSrc="/Drama.png"
            textPdf="NaskahDrama"
          />
          </div>

          <div>
          {/* Tambahkan PDFViewerModal lagi jika perlu
          <PDFViewerModal
            pdfSrc="/MakalahBudidaya.pdf"
            thumbnailSrc="/Budidaya.png"
            textPdf="Budidaya Ikan"
          /> */}
          </div>

          <div className="">
          {/* Tambahkan PDFViewerModal lagi jika perlu
          <PDFViewerModal
            pdfSrc="/MakalahKonstitusi.pdf"
            thumbnailSrc="/Konstitusi.png"
            textPdf="Makalah Konstitusi"
          /> */}
          </div>

        </div>
      </main>
    </div>
  )
}

export default Copywritingku;
