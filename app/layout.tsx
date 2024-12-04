import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { League_Spartan, Montserrat, Poppins } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joki Makalah",
  description: "Tempat Nugasmu",
  icons:{
    icon:['/JokiMakalahBlack.png?v=2']
  }
};

const spartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-spartan',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Added weight specification
})
 
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spartan.variable} ${montserrat.variable} ${poppins.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body> 
    </html>
  );
}
