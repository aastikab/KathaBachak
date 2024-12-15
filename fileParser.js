const mammoth = require('mammoth');

async function extractTextFromFile(file) {
  if (file.mimetype === 'application/pdf') {
    // You can add PDF parsing here with `pdf-lib` or `pdfjs-dist`
    throw new Error('PDF parsing is not implemented yet.');
  } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    const result = await mammoth.extractRawText({ buffer: file.data });
    return result.value;
  } else {
    throw new Error('Unsupported file type');
  }
}

module.exports = { extractTextFromFile };
