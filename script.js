// script.js

function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          const text = data.text;
          speakText(text); // Call the function to speak the text
      })
      .catch(error => console.error('Error:', error));
  } else {
      alert('Please select a file to upload.');
  }
}

function speakText(text) {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(text);
  
  synth.speak(utterThis);
}
