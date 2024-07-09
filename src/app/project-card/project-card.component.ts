import { Component, Input, Output, EventEmitter } from '@angular/core';
import { project } from '../_models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: project = {} as project;
  @Output() viewMore = new EventEmitter<project>();

  openPopup(){
    this.viewMore.emit(this.project);
  }
}
