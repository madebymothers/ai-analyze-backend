const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend çalışıyor 🚀");
});

app.post("/analyze", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Fotoğraf gelmedi" });
  }

  res.json({
    status: "ok",
    message: "Fotoğraf başarıyla alındı",
    fileName: req.file.originalname,
    fileSize: req.file.size,
    mimeType: req.file.mimetype
  });
});

app.listen(PORT, () => {
  console.log("Server ayakta, port:", PORT);
});
