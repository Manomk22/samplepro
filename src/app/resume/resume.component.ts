
// import { Component, Renderer2 } from '@angular/core';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-resume',
//   templateUrl: './resume.component.html',
//   styleUrls: ['./resume.component.css']
// })
// export class ResumeComponent {
//   sections = [
//     { title: 'Experience', content: 'Detail your work experience here.', isOpen: false },
//     { title: 'Education', content: 'Detail your education here.', isOpen: false },
//     { title: 'Skills', content: 'Detail your skills here.', isOpen: false },
//     { title: 'Projects', content: 'Detail your projects here.', isOpen: false }
//   ];

//   constructor(private titleService: Title, private renderer: Renderer2) {
//     this.titleService.setTitle('MK-Resume');
//   }

//   DownloadLink(): void {
//     const link = this.renderer.createElement('a');
//     this.renderer.setAttribute(link, 'target', '_blank');
//     this.renderer.setAttribute(link, 'href', '../../assets/MANOfroen.pdf');
//     this.renderer.setAttribute(link, 'download', 'MANOfroen.pdf');
//     link.click();
//     link.remove();
//   }

//   toggleSection(index: number): void {
//     this.sections[index].isOpen = !this.sections[index].isOpen;
//   }
// }
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  sections = [
    {
      title: 'Professional Experience',
      content: [
        {
          heading: 'Data Augmentor',
          description: 'IMPROVE DATA QUALITY: Utilized data augmentation techniques to enhance data quality and relevance.Gained expertise in data handling,including analysis, cleaning, collection, manipulation, and enhancemen.'
         
        },
        {
          description:'DATA EXTRACTION: Crafted precise JSON crawler schemas(CSS selectors) for targeted data extraction. Leverage Regex for accurate and focused data harvesting.'
        },
        {
          description:'Analyze Technology Stack: Specialized in footprint collection, a technique that utilize web page inspection to identify and analyze the technology stack used by various websites and application.'
        }
     
      ],
      isOpen: false
    },
    {
      title: 'Education',
      content: [
        {
          heading: 'Bachelor of Computer Application',
          description: 'B.S.Abdurrahman crescent institute of science and technology, 2019 - 2022.'
        },
        {
          heading: 'Computer Science',
          description: 'Valluvar gurukulam higher secondary school, 2017 - 2019.'
        }
      ],
      isOpen: false
    },
    {
      title: 'Skills',
      content: [
        {
          heading: 'Basic skills',
          description: 'HTML (HyperText Markup Language) ,CSS (Cascading Style Sheets).'
        },
        {
          heading: 'Programming Languages',
          description: 'JavaScript, TypeScript.'
        },
        {
          heading: 'Frameworks & Libraries',
          description: 'Angular, Tailwind CSS.'
        }
      ],
      isOpen: false
    },
   
  ];

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('MK-Resume');
  }

  toggleSection(index: number) {
    this.sections[index].isOpen = !this.sections[index].isOpen;
  }

  DownloadLink() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/MANOfroen.pdf.pdf');
    link.setAttribute('download', 'MANOfroen.pdf.pdf');
    link.click();
    link.remove();
  }
}
