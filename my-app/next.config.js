/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: 'build',
     output:'export',
     reactStrictMode:false,
     images: {unoptimized:true} ,
}

// formats: ['image/avif', 'image/webp']
// onDemandEntries: {
//   maxInactiveAge: 1000 * 60 * 60,
//   pagesBufferLength: 5,
// }   



module.exports = nextConfig
