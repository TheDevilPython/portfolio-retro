const env = (dev, prod = dev) => {
  if (process.env.ELEVENTY_ENV === 'development') {
    return dev;
  }

  return prod;
};

module.exports = {
  title: 'Karthik | Web Developer',
  description: 'Coding for humans. Come say hi 🌳',
  twitter: 'igotkarthik',
  baseUrl: env('localhost:8080', 'https://karthikrao.xyz'),
  thumb: '/assets/images/big-rainbow-static.jpg',
};
