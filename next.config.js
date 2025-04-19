/** @type {import('next').NextConfig} */
const nextConfig = {
  "output": "export",
  "experimental": {
    "appDir": true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = nextConfig;
