import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
@Component({
  selector: 'app-video-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.css'
})
export class VideoSectionComponent {
  // Replace with actual YouTube video IDs
  videos = [
    { title: 'How We Make Our Ice Cream', subtitle: 'A peek inside our factory', youtubeId: 'dQw4w9WgXcQ' },
    { title: 'Meet Tinku — The Founder', subtitle: 'The story behind the brand', youtubeId: 'dQw4w9WgXcQ' },
  ];
  constructor(private sanitizer: DomSanitizer) {}
  safeUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }
}
