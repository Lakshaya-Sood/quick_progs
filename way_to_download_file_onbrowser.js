export const pdfFileCreation = (cleanPDFData, filename) => {
  const doc = new PDFDocument;
  const stream = doc.pipe(blobStream());
  doc.text(cleanPDFData);
  doc.end();

  stream.on('finish', () => {
    const browserIsIE = window.navigator && window.navigator.msSaveOrOpenBlob;
    if (browserIsIE) {
      const downloadBlob = stream.toBlob('application/pdf');
      window.navigator.msSaveOrOpenBlob(downloadBlob, filename);
    } else {
      const url = stream.toBlobURL('application/pdf');
      const elementDownload = document.createElement('a');
      elementDownload.download = filename;
      elementDownload.style.display = 'none';
      elementDownload.href = url;
      document.body.appendChild(elementDownload);
      elementDownload.click();
      document.body.removeChild(elementDownload);
    }
  })
};
