import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { TranslateService } from '@ngx-translate/core';
// import html2canvas from 'html2canvas';
// import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-curriculumn-cv',
  templateUrl: './curriculumn-cv.component.html',
  styleUrls: ['./curriculumn-cv.component.css']
})
export class CurriculumnCvComponent {
  /**
   *
   */
  constructor(private i18n: TranslateService) {

  }
  name: string = 'Rodolfo Marban Estrada';
  Frameworks: string[] = ['Angular', 'bootstrap', 'material', '.net core', 'asp'];
  languages: string[] = ['javascript', 'c#', 'java', 'typescript'];
  tools: string[] = ['jira', 'git', 'github', 'visual studio code', 'visual studio 20xx'];
  positionLeft = '0';
  positionRight = '0';


  @ViewChild('content') content!: ElementRef;


  downloadPDF() {
    const content = this.content.nativeElement;
    const doc = new jsPDF('p', 'mm', 'a4');
    //header
   

    doc.rect(0, 0, 210, 33, "F");
    doc.setFillColor(51, 51, 51); // set fill color to dark gray
    //side bar
    doc.setFillColor(245, 245, 245); // set fill color to dark gray
    doc.roundedRect(3, 35, 50, 257, 5, 5, "F");
    //sumary
    doc.setFillColor(245, 245, 245); // set fill color to dark gray
    doc.roundedRect(56, 35, 150, 30, 5, 5, "F");
    //education
    doc.setFillColor(245, 245, 245); // set fill color to dark gray
    doc.roundedRect(56, 70, 150, 40, 5, 5, "F");
    //experience
    doc.setFillColor(245, 245, 245); // set fill color to dark gray
    doc.roundedRect(56, 115, 150, 177, 5, 5, "F");
    //ma name yo
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(30);
    doc.setFont("helvetica", "bold"); // set font and font style
    doc.text('Rodolfo Marba', 5, 15);
    doc.text('Estrada', 5, 25);
    
    //normal font
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal"); // set font and font style

    //PROFESSION
    doc.text(this.i18n.instant('Profession'), 90, 7);
    doc.text(this.i18n.instant('title'), 90, 12);
    //phone
    doc.text(this.i18n.instant('phone_text'), 150, 7);
    doc.text(this.i18n.instant('phone'), 150, 12);


    //mail
    doc.text(this.i18n.instant('e-mail'), 90, 17);
    doc.text(this.i18n.instant('email'), 90, 22);

    //addres
    doc.text(this.i18n.instant('address_text'), 150, 17);
    doc.text(this.i18n.instant('address'), 150, 22);
    //language
    const text = this.i18n.instant('not_you_language');

    // Calculate the x-coordinate for centering
    const textWidth = doc.getTextDimensions(text).w;
    const xCoord = (doc.internal.pageSize.width - textWidth) / 2;

    doc.text(text, xCoord, 30);
    doc.link( xCoord, 30, textWidth, 10, { url: 'https://rodolfodevapp.github.io/cv/#/cv' });

    //headers
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.setFont("helvetica", "bold"); // set font and font style
    doc.setFontSize(16);
    doc.text('frameworks', 10, 50);
    doc.text(this.i18n.instant('Languages'), 10, 100);
    doc.text(this.i18n.instant('tools'), 10, 150);
    doc.text(this.i18n.instant('Summary'), 60, 43);
    doc.text(this.i18n.instant('Education'), 60, 80);
    doc.text(this.i18n.instant('Experience'), 60, 126);

    // add regular text
    doc.setFontSize(12);

    //add sub headers
    doc.text(this.i18n.instant('education_degree'), 60, 87);
    doc.text(this.i18n.instant('experience_1_job'), 60, 135);
    doc.text(this.i18n.instant('experience_2_job'), 60, 185);
    doc.text(this.i18n.instant('experience_3_job'), 60, 230);

    doc.setFont("helvetica", "normal"); // set font and font style
    //summary content
    let sum_text = this.i18n.instant('summary');
    const lines = doc.splitTextToSize(sum_text, 144);
    doc.text(lines, 60, 50);
    let exp_text_1 = this.i18n.instant('experience_1_responsibilities');
    const exp_lines = doc.splitTextToSize(exp_text_1, 144);
    doc.text(exp_lines, 60, 155);
    doc.setDrawColor(0, 0, 0); // set line color 
    doc.line(60, 175, 200, 175); // draw a horizontal line
    let exp_text_2 = this.i18n.instant('experience_2_responsibilities');
    const exp_lines_2 = doc.splitTextToSize(exp_text_2, 144);
    doc.text(exp_lines_2, 60, 205);
    doc.setDrawColor(0, 0, 0); // set line color 
    doc.line(60, 220, 200, 220); // draw a horizontal line
    let exp_text_3 = this.i18n.instant('experience_3_responsibilities');
    const exp_lines_3 = doc.splitTextToSize(exp_text_3, 144);
    doc.text(exp_lines_3, 60, 250);
    doc.setDrawColor(0, 0, 0); // set line color 
    doc.line(60, 270, 200, 270); // draw a horizontal line

    //
    doc.text(this.i18n.instant('education_school'), 60, 95);
    doc.text(this.i18n.instant('education_location'), 60, 100);
    doc.text(this.i18n.instant('experience_1_compañy'), 60, 140);
    doc.text(this.i18n.instant('experience_1_location'), 60, 145);
    doc.text(this.i18n.instant('experience_1_years'), 60, 150);
    doc.text(this.i18n.instant('experience_2_compañy'), 60, 190);
    doc.text(this.i18n.instant('experience_2_location'), 60, 195);
    doc.text(this.i18n.instant('experience_3_years'), 60, 200);
    doc.text(this.i18n.instant('experience_3_compañy'), 60, 235);
    doc.text(this.i18n.instant('experience_3_location'), 60, 240);
    doc.text(this.i18n.instant('experience_3_years'), 60, 245);

    //frameworks
    doc.text('\u2022', 11, 60);
    doc.text('Angular', 15, 60);
    doc.text('\u2022', 11, 65);
    doc.text('bootstrap', 15, 65);
    doc.text('\u2022', 11, 70);
    doc.text('material', 15, 70);
    doc.text('\u2022', 11, 75);
    doc.text('.net core 3', 15, 75);
    doc.text('\u2022', 11, 80);
    doc.text('asp', 15, 80);
    //languages
    doc.text('\u2022', 11, 120);
    doc.text('javascript', 15, 120);
    doc.text('\u2022', 11, 125);
    doc.text('c#', 15, 125);
    doc.text('\u2022', 11, 130);
    doc.text('java', 15, 130);
    doc.text('\u2022', 11, 135);
    doc.text('typescript', 15, 135);
    //tools
    doc.text('\u2022', 11, 160);
    doc.text('jira', 15, 160);
    doc.text('\u2022', 11, 165);
    doc.text('git', 15, 165);
    doc.text('\u2022', 11, 170);
    doc.text('github', 15, 170);
    doc.text('\u2022', 11, 175);
    doc.text('Visual studio Code', 15, 175);
    doc.text('\u2022', 11, 180);
    doc.text('Visual studio 20XX', 15, 180);

    doc.addPage();
    //experience 2
    doc.setFillColor(245, 245, 245); // set fill color to dark gray
    doc.roundedRect(56, 10, 150, 120, 5, 5, "F");
    //
    let exp_text_4 = this.i18n.instant('experience_4_responsibilities');
    const exp_lines_4 = doc.splitTextToSize(exp_text_4, 144);
    doc.text(exp_lines_4, 60, 40);
    doc.setDrawColor(0, 0, 0); // set line color 
    doc.line(60, 55, 200, 55); // draw a horizontal line
    let exp_text_5 = this.i18n.instant('experience_5_responsibilities');
    const exp_lines_5 = doc.splitTextToSize(exp_text_5, 144);
    doc.text(exp_lines_5, 60, 90);
    doc.setDrawColor(0, 0, 0); // set line color 
    doc.line(60, 105, 200, 105); // draw a horizontal line
    //
    doc.text(this.i18n.instant('experience_4_compañy'), 60, 25);
    doc.text(this.i18n.instant('experience_4_location'), 60, 30);
    doc.text(this.i18n.instant('experience_4_years'), 60, 35);
    doc.text(this.i18n.instant('experience_5_compañy'), 60, 75);
    doc.text(this.i18n.instant('experience_5_location'), 60, 80);
    doc.text(this.i18n.instant('experience_5_years'), 60, 85);
    //sub headers 2
    doc.setFont("helvetica", "bold"); // set font and font style
    doc.text(this.i18n.instant('experience_4_job'), 60, 20);
    doc.text(this.i18n.instant('experience_5_job'), 60, 70);

    doc.save('Marban-cv.pdf');


    // const options = {
    //   background: 'white',
    //   scale: 2
    // };

    // html2canvas(content, options).then(canvas => {
    //   const imgData = canvas.toDataURL('image/png');
    //   const imgProps = pdf.getImageProperties(imgData);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = pdf.internal.pageSize.getHeight() - 20;;

    //   let position = 0;
    //   pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);

    //   while (pdfHeight > position) {
    //     position += pdf.internal.pageSize.getHeight();
    //     if (position < pdfHeight) {
    //       pdf.addPage();
    //       pdf.addImage(imgData, 'PNG', 0, -position, pdfWidth, pdfHeight);
    //     }
    //   }

    //   // Add footer to every page
    //   const pageCount = pdf.getNumberOfPages();
    //   for (let i = 1; i <= pageCount; i++) {
    //     pdf.setPage(i);
    //     pdf.setFontSize(10);
    //     pdf.text(`need other language? -> https://rodolfodevapp.github.io/cv/#/cv`, pdf.internal.pageSize.getWidth() -150 , pdf.internal.pageSize.getHeight() -5 );
    //   }

    //   pdf.save('cvMarban.pdf');
    // });
  }




  onDragMoved(event: CdkDragMove<any>) {
    this.positionLeft = `${event.pointerPosition.x}px`;
    this.positionRight = 'auto';
  }
}
