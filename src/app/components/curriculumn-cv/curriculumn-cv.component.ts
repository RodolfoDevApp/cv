import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-curriculumn-cv',
  templateUrl: './curriculumn-cv.component.html',
  styleUrls: ['./curriculumn-cv.component.css']
})
export class CurriculumnCvComponent {
  name: string = 'Rodolfo Marban Estrada';
  Frameworks: string[] = ['Angular', 'bootstrap','material', '.net core', 'asp'];
  languages: string[] = ['javascript', 'c#','java', 'typescript'];
  tools: string[] = ['jira', 'git','github', 'visual studio code', 'visual studio 20xx'];
  positionLeft = '0';
  positionRight = '0';
  
  
    @ViewChild('content') content!: ElementRef;
    

   downloadPDF() {
  const content = this.content.nativeElement;
  const pdf = new jsPDF('p', 'mm', 'a4');
  const options = {
    background: 'white',
    scale: 1
  };

  html2canvas(content, options).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight() - 20;;

    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);

    while (pdfHeight > position) {
      position += pdf.internal.pageSize.getHeight();
      if (position < pdfHeight) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -position, pdfWidth, pdfHeight);
      }
    }

    // Add footer to every page
    const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.text(`need other language? -> https://rodolfodevapp.github.io/cv/#/cv`, pdf.internal.pageSize.getWidth() , pdf.internal.pageSize.getHeight() - 10);
    }

    pdf.save('cvMarban.pdf');
  });
}
    
    
    

  onDragMoved(event: CdkDragMove<any>) {
    this.positionLeft = `${event.pointerPosition.x}px`;
    this.positionRight = 'auto';
  }
}
