const fs = require('fs');
const path = require('path');

// Define your website URL
const WEBSITE_URL = 'https://vibecoding.com';

// Define your routes
const routes = [
  '',
  '#about',
  '#experience',
  '#education',
  '#achievements',
  '#projects',
  '#testimonials',
  '#contact',
];

// Get current date in YYYY-MM-DD format
const formatDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${WEBSITE_URL}/${route}</loc>
    <lastmod>${formatDate()}</lastmod>
    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Execute the function
generateSitemap();