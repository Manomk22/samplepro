// import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { project } from '../_models/project';
// import { ProjectsService } from '../_services/projects.service';

// @Component({
//   selector: 'app-portfolio',
//   templateUrl: './portfolio.component.html',
//   styleUrls: ['./portfolio.component.css']
// })
// export class PortfolioComponent implements OnInit {
//   projects: project[] = [];
//   showPopup = false;
//   selectedProject: project = {} as project;

//   constructor(private titleService: Title, private projectService: ProjectsService) {
//     this.titleService.setTitle('MK-Portfolio');
//   }

//   ngOnInit(): void {
//     this.projects = this.projectService.getProjects();
//   }

//   openPopup(project: project): void {
//     this.selectedProject = project;
//     this.showPopup = true;
//   }

//   closePopup(): void {
//     this.showPopup = false;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_models/project';
import { tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: project[] = [];
  filteredProjects: project[] = [];
  tags: tag[] = [];
  showPopup = false;
  selectedProject: project = {} as project;
  selectedTag: tag | null = null;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('MK-Portfolio');
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.filteredProjects = this.projects;

    // Extract unique tags
    this.projects.forEach(p => {
      p.tag.forEach(t => {
        if (!this.tags.includes(t)) {
          this.tags.push(t);
        }
      });
    });
  }

  openPopup(project: project) {
    this.selectedProject = project;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  filterProjects(tag: tag) {
    this.selectedTag = tag;
    if (tag) {
      this.filteredProjects = this.projects.filter(project => project.tag.includes(tag));
    } else {
      this.filteredProjects = this.projects;
    }
  }

  resetFilter() {
    this.selectedTag = null;
    this.filteredProjects = this.projects;
  }
}
