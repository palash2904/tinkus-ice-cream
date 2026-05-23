import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutPoints = [
    { icon: '🏭', title: 'Modern Factory', desc: 'State-of-the-art hygienic facility with daily quality checks.' },
    { icon: '🐄', title: 'Farm-Fresh Milk', desc: 'Sourced fresh daily from trusted local dairy farmers.' },
    { icon: '🤝', title: 'Community First', desc: 'Supporting local farmers and retailers across the region.' },
  ];
}
