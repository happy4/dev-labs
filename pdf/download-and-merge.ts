// https://pdf-lib.js.org/
// npm i pdf-lib
import { PDFDocument } from "pdf-lib";

export const downloadBlob = (blob: Blob, name = "merged.pdf") => {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;

  link.download = name;
  document.body.appendChild(link);
  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );
  document.body.removeChild(link);
};

export const mergeAllPDFs = async (urls: any[]) => {
  try {
    const pdfDoc = await PDFDocument.create();

    const numDocs = urls.length;
    for (let i = 0; i < numDocs; i++) {
      const donorPdfBytes = (await fetch(urls[i]).then((res) =>
        res.arrayBuffer().catch((e) => console.log(e))
      )) as ArrayBuffer;

      const donorPdfDoc = await PDFDocument.load(donorPdfBytes, {
        ignoreEncryption: true,
      });

      const docLength = donorPdfDoc.getPageCount();
      for (let k = 0; k < docLength; k++) {
        const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [k]);
        pdfDoc.addPage(donorPage);
      }
    }
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes.buffer]);
    downloadBlob(blob);
  } catch (e) {
    console.log(e);
  }
};
