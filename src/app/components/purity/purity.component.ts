import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-purity',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './purity.component.html',
  styleUrl: './purity.component.css'
})
export class PurityComponent {
  pillars = [
    { icon: '🥛', title: '100% Real Milk', desc: 'Sourced directly from local dairy farms. Full-cream, unadulterated milk forms the base of every flavour.' },
    { icon: '🌿', title: 'No Preservatives', desc: 'Zero artificial preservatives. Made fresh daily to ensure you get the purest, most natural ice cream.' },
    { icon: '🎨', title: 'No Artificial Colours', desc: 'All colours come from natural fruit extracts and ingredients — never synthetic dyes.' },
    { icon: '🍃', title: 'No Artificial Flavours', desc: 'Real mango. Real strawberry. Real chocolate. Only natural flavours make it into our mix.' },
    { icon: '🏆', title: 'FSSAI Certified', desc: 'Fully licensed and regularly audited by FSSAI for quality, safety, and hygiene standards.' },
    { icon: '❄️', title: 'Cold Chain Assured', desc: 'Maintained at optimal temperature from factory to retailer — freshness guaranteed every time.' },
  ];
}
