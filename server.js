const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2007;

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Rute utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ekspor aplikasi untuk Vercel
module.exports = app;
