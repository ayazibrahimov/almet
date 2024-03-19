import { Open_Sans } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Tittle from '@/app/head'
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/tailwind.css'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title:{
    default:'Wire Mesh',
<<<<<<< HEAD
    template:'Wire Mesh | Home'
=======
    template:':'Wire Mesh | Home'
>>>>>>> 575e1924a2073e94255a9091f753bb012c2c9bc6
  },
  description: 'My site description...'
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
            {children}
        <Footer />  
      </body>
    </html>
  )
}
