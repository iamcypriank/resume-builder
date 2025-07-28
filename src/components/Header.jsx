import React from "react";
import Button from "./Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { motion } from "motion/react";

export default function Header({ setShowPreview }) {
  function handleShow() {
    setShowPreview(true);
  }

  function handleDownload() {
  setShowPreview(true);
  const element = document.getElementById("resume-preview");
  if (!element) return;

  html2canvas(element, {
    scale: 2,
    useCORS: true, // Allow external images
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("resume.pdf");
  });
}

  return (
    <header className="flex justify-between p-4">
      <h1 className="font-unbounded text-white text-2xl font-bold max-[500px]:hidden">Resume Builder</h1>
      <p
      className="font-unbounded text-white text-2xl font-bold hidden max-[500px]:block" 
      >RBuilder</p>
      <div 
      
      className="flex gap-4">
        
          <Button handle={handleShow} type="button">
            Preview
          </Button>
        

        <Button type="button" handle={handleDownload}>
          Generate
        </Button>
      </div>
    </header>
  );
}

