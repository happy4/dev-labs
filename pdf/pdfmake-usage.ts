// http://pdfmake.org/playground.html
// npm i pdfmake

import * as pdfFonts from "pdfmake/build/vfs_fonts"; // <-- vfs_fonts has to be imported before pdfmake
import * as pdfMake from "pdfmake/build/pdfmake";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export const mergeAndDownload = (
  documentName: string,
  data: { title: string; result: string }[]
) => {
  const configs = {
    fontSize: 11,
    pageSize: "A4",
    pageMargins: [60, 60, 60, 60],
  };

  const defaultStyle = {
    fontSize: configs.fontSize,
    lineHeight: 1.1,
  };

  const docDefinition: {
    content: { text: string; style?: string; margin?: number[] }[];
    styles: {};
    fontSize: {};
    lineHeight: number;
  } = {
    content: [
      {
        text: documentName,
        style: "title",
        margin: [0, 0, 0, 30],
      },
    ],
    defaultStyle,
    styles: {
      title: {
        alignment: "center",
        color: "blue",
        fontSize: 22,
      },
      header: {
        fontSize: 18,
        bold: true,
      },
      anotherStyle: {
        italics: true,
        alignment: "right",
      },
    },
  };

  data.map((item) => {
    docDefinition.content.push({
      text: "Analysis: " + item.title,
      style: "header",
    });
    docDefinition.content.push({ text: item.result, margin: [0, 20] });
  });

  pdfMake.createPdf(docDefinition).download("test.pdf");
};
