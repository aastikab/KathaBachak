const express = require('express');
const fileUpload = require('express-fileupload');
const { extractTextFromFile } = require('./fileParser');

const app = express();
const PORT = 3000;

app.use(express.static('../frontend'));
app.use(fileUpload());

app.post('/upload', async (req, res) => {
  try {
    const file = req.files.file;
    const extractedText = await extractTextFromFile(file);
    res.json({ text: extractedText });
  } catch (error) {
    res.status(500).json({ error: 'Failed to extract text' });
  }
});

app.listen(PORT, () => console.log(`KathaBachak is running on http://localhost:${PORT}`));
