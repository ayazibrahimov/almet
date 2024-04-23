import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/reset.css'
import '@/styles/global.css'
import '@/styles/tailwind.css'

export default function RootLayout({ 
  children, 
  params: { locale }
}) {
  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
