const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2007;

// Pastikan hanya satu kali menyebutkan "home/container"
app.use(express.static(path.join(__dirname))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Gunakan jalur langsung
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});