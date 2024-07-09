import { Component, Input, Output, EventEmitter } from '@angular/core';
import { project } from '../_models/project';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() project: project = {} as project;
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  currentIndex: number = 0;

  closePopup() {
    this.close.emit();
  }

  nextImage() {
    if (this.project.pictures.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.project.pictures.length;
    }
  }

  prevImage() {
    if (this.project.pictures.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.project.pictures.length) % this.project.pictures.length;
    }
  }
}
