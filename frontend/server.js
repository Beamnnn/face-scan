const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;  // ใช้พอร์ต 8080 เพื่อไม่ชนกับ backend

// ให้ Express เสิร์ฟไฟล์ static จากโฟลเดอร์ frontend
app.use(express.static(__dirname));

// Routes สำหรับแต่ละหน้า
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/ml-demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'ml_demo.html'));
});

app.get('/nn-demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'nn_demo.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend running at http://127.0.0.1:${PORT}`);
});
