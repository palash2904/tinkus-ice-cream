import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-video-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.css'
})
export class VideoSectionComponent {
  videos = [
    {
      title: 'How We Make Our Ice Cream',
      subtitle: 'A peek inside our factory',
      src: '/assets/Ice_cream_vid.mp4',
    },
  ];
}
