// https://pdf-lib.js.org/
import {
  PDFDocument,
  StandardFonts,
  PDFPage,
  PDFPageDrawTextOptions,
  rgb,
  breakTextIntoLines,
} from "pdf-lib";

export const drawMultilineText = (
  page: PDFPage,
  text: string,
  opts: PDFPageDrawTextOptions &
    Required<
      Pick<PDFPageDrawTextOptions, "font" | "size" | "maxWidth" | "lineHeight">
    >
) => {
  page.drawText(text, opts);
  const lines = breakTextIntoLines(
    text,
    opts.wordBreaks || page.doc.defaultWordBreaks,
    opts.maxWidth,
    (t) => opts.font.widthOfTextAtSize(t, opts.size)
  );
  const lineCount = lines.length;
  const height = lineCount * opts.lineHeight;
  const width = Math.max(
    ...lines.map((l) => opts.font.widthOfTextAtSize(l, opts.size))
  );
  return { width, height };
};

export const processRunsPDF = async (
  document: string,
  results: { title: string; result: string }[]
) => {
  try {
    const pdfDoc = await PDFDocument.create();
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const titleFontSize = 18;
    const fontSize = 12;
    const maxResultTextLenghPerPage = 3390;

    let page = pdfDoc.addPage();
    let heightOffset = 0;

    page.drawText("Document: ", {
      font: timesRomanBold,
      size: titleFontSize,
      lineHeight: titleFontSize,
      x: 50,
      y: page!.getHeight() - 3 * titleFontSize,
    });

    const { height: heightDocuemnt } = drawMultilineText(page!, document, {
      font: timesRomanFont,
      size: titleFontSize,
      maxWidth: 480,
      lineHeight: titleFontSize,
      color: rgb(0, 0, 1),
      x: 140,
      y: page!.getHeight() - 3 * titleFontSize,
      wordBreaks: [" ", "\n\n"],
    });

    results.forEach((item) => {
      page.drawText("Analysis: ", {
        font: timesRomanBold,
        size: fontSize,
        lineHeight: titleFontSize,
        x: 50,
        y: page!.getHeight() - 2 * fontSize - 45 - heightOffset,
      });

      const { height: heightTitle } = drawMultilineText(page!, item.title, {
        font: timesRomanFont,
        size: fontSize,
        maxWidth: 480,
        lineHeight: 15,
        x: 100,
        y: page!.getHeight() - 2 * fontSize - 45 - heightOffset,
        wordBreaks: [" ", "\n\n"],
      });

      page.drawText("Result: ", {
        font: timesRomanBold,
        size: fontSize,
        lineHeight: titleFontSize,
        x: 50,
        y: page!.getHeight() - 2 * fontSize - 60 - heightOffset,
      });

      let result = item.result;

      if (result.length < maxResultTextLenghPerPage) {
        const { height: heightResult } = drawMultilineText(page!, result, {
          font: timesRomanFont,
          size: fontSize,
          maxWidth: 480,
          lineHeight: 15,
          x: 90,
          y: page!.getHeight() - 2 * fontSize - 60 - heightOffset,
          wordBreaks: [" ", "\n\n"],
        });

        heightOffset += heightDocuemnt + heightTitle + heightResult;

        if (heightOffset + 100 > page!.getHeight()) {
          heightOffset = 0;
          page = pdfDoc.addPage();
        }
      } else {
        let resArr = result.split("");
        while (resArr.length > 0) {
          let chunk = resArr.splice(0, maxResultTextLenghPerPage); //word breaks

          while (resArr.length > 0 && resArr[0] !== " ") {
            chunk.push(resArr.splice(0, 1).join(""));
          }

          drawMultilineText(page!, chunk.join(""), {
            font: timesRomanFont,
            size: fontSize,
            maxWidth: 480,
            lineHeight: 15,
            x: 90,
            y: page!.getHeight() - 2 * fontSize - 60,
            wordBreaks: [" ", "\n\n"],
          });
          page = pdfDoc.addPage();
        }
      }
    });
    const pdfBytes = await pdfDoc.save();
    //to download
    // const blob = new Blob([pdfBytes.buffer]);
    // downloadBlob(blob);
  } catch (e) {
    console.log(e);
  }
};
