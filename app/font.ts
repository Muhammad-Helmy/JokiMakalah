import { Inter, Roboto_Mono, League_Spartan, Montserrat, Poppins  } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Added weight specification
})