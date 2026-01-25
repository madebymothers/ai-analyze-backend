const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON body alabilmek için
app.use(express.json());

// Ana kontrol endpoint’i
app.get("/", (req, res) => {
  res.send("Backend çalışıyor 🚀");
});

// Test amaçlı analiz endpoint’i (şimdilik sahte)
app.post("/analyze", (req, res) => {
  res.json({
    status: "ok",
    message: "Analiz endpoint’i çalışıyor",
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log("Server ayakta, port:", PORT);
});
