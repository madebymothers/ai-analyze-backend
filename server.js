const express = require("express");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON body alabilmek için
app.use(express.json());

// Multer ayarı (foto geçici olarak bellekte tutulur)
const upload = multer({ storage: multer.memoryStorage() });

// Ana kontrol
app.get("/", (req, res) => {
  res.send("Backend çalışıyor 🚀");
});

// Fotoğraf alan endpoint
app.post("/analyze", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Fotoğraf bulunamadı" });
  }

  res.json({
    status: "ok",
    message: "Fotoğraf alındı",
    fileName: req.file.originalname,
    fileSize: req.file.size
  });
});

app.listen(PORT, () => {
  console.log("Server ayakta, port:", PORT);
});
