/** @type {import('next').NextConfig} */
const nextConfig = {
      // output:"export",
      reactStrictMode:false,
      images: {unoptimized:true} ,
      onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 60,
        pagesBufferLength: 5,
      }
}




module.exports = nextConfig
