/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/videos/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
      // output:"export",
      reactStrictMode:false,
      images: {unoptimized:true,
        dangerouslyAllowSVG:false
      } ,
      onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 60,
        pagesBufferLength: 5,
      },
      output: "standalone"	

}




module.exports = nextConfig
