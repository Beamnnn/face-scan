const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// เสิร์ฟไฟล์ Static จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Frontend running at http://127.0.0.1:${PORT}`);
});
