// generateSitemap.jsx
import { writeFileSync } from 'fs';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import routes from '../routes/routes.js'; // Your React Router DOM routes configuration

// Function to generate sitemap XML content
function generateSitemapContent(routes) {
    const baseUrl = 'https://www.workhelper.shop'; // Your website base URL
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    routes.forEach(route => {
        const url = baseUrl + route.path;
        xml += `  <url>\n`;
        xml += `    <loc>${url}</loc>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`; // You can adjust changefreq and priority as needed
        xml += `    <priority>0.8</priority>\n`;
        xml += `  </url>\n`;
    });

    xml += '</urlset>';
    return xml;
}

// Generate sitemap XML content
const sitemapContent = generateSitemapContent(routes);

// Write sitemap content to file
writeFileSync('./dist/sitemap.xml', sitemapContent);

console.log('Sitemap generated successfully!');
