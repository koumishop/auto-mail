import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"], })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} defaultBg`}>
        <Header/>
        <>{children}</>
        <Footer/>
      </body>
    </html>
  )
}
