import { Injectable } from '@angular/core';
import { project } from '../_models/project';
import { tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects:project[]= [
    {id: 0, name: "Sample Angular Project", pictures: ["../../assets/s3.png","../../assets/s4.png","../../assets/s5.png"], projectLink: "https://elearn009.netlify.app/", summary: "Angular project For landing page.", description: " Designed and developed an engaging and responsive landing page using Angular, employing Angular Material for modern UI components and ensuring a seamless and visually appealing user interface.", tag: [tag.ANGULAR,tag.TAILWINDCSS,tag.TYPESCRIPT]},
    {id: 1, name: "Sample TailwindCSS Project", pictures: ["../../assets/T1.png","../../assets/T2.png","../../assets/T3.png"], projectLink: "https://tailwindlearn.netlify.app/", summary: "Created responsive using Only Tailwind", description: "Crafted a sleek website utilizing Tailwind CSS for streamlined design and responsiveness. Tailored for a seamless user experience, this project showcases proficiency in modern web development.", tag: [tag.TAILWINDCSS,tag.HTML]},
    {id: 2, name: "Upcoming project", pictures: [], projectLink: "", summary: "Project on development", description: "Project on development stage after finished I will post it", tag: []},
    {id: 3, name: "Upcoming project", pictures: [], projectLink: "", summary: "Project on development", description: "Project on development stage after finished I will post it", tag: []},
    {id: 4, name: "Upcoming project", pictures: [], projectLink: "", summary: "Project on development", description: "Project on development stage after finished I will post it", tag: []},
    {id: 5, name: "Upcoming project", pictures: [], projectLink: "", summary: "Project on development", description: "Project on development stage after finished I will post it", tag: []},]
  constructor() { }

  getProjects(){

    return this.projects;
  }

  getProjectById(id:number):project{
let project = this.projects.find(project => project.id === id);
if(project === undefined){
  throw new TypeError('There is No project matches the id:' + id)
}
return project
  }
}
