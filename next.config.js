/** @type {import('next').NextConfig} */
const nextConfig = {
  "output": "export",
  "experimental": {
    "appDir": true,
  },
  "images": {
    "unoptimized": true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = nextConfig;
