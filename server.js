const express = require('express');
const path = require('path');

const app = express();

// Endpoint utama untuk menyajikan file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ekspor aplikasi agar kompatibel dengan Vercel
module.exports = app;
