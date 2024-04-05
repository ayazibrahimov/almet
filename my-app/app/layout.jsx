import Header from '@/components/header'
import Footer from '@/components/footer'
import Tittle from '@/app/head'
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/tailwind.css'

// const opensans = Open_Sans({ subsets: ['latin'] })

// const { data } = useProductData("/menus");
  




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
