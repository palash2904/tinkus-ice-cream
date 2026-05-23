import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Product {
  name: string;
  emoji: string;
  category: string;
  price: number;
  desc: string;
  tag?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  activeFilter = signal('All');
  filters = ['All','Cups','Bars','Cones','Kulfis','Family Packs'];

  products: Product[] = [
    { name: 'Alphonso Mango', emoji: '🥭', category: 'Cups', price: 30, desc: 'Made with real Alphonso mango pulp and pure milk.', tag: 'Bestseller' },
    { name: 'Fresh Strawberry', emoji: '🍓', category: 'Cups', price: 30, desc: 'Sun-ripened strawberries in creamy real milk ice cream.' },
    { name: 'Classic Vanilla', emoji: '🤍', category: 'Cups', price: 25, desc: 'Pure vanilla bean in farm-fresh full-cream milk.' },
    { name: 'Chocolate Fudge', emoji: '🍫', category: 'Bars', price: 35, desc: 'Rich cocoa swirled into silky real milk ice cream.', tag: 'Popular' },
    { name: 'Butterscotch', emoji: '🍯', category: 'Bars', price: 35, desc: 'Golden butterscotch with crunchy praline pieces.' },
    { name: 'Pista Royale', emoji: '💚', category: 'Cones', price: 40, desc: 'Premium pistachios churned into creamy milk goodness.' },
    { name: 'Kesar Kulfi', emoji: '🌸', category: 'Kulfis', price: 40, desc: 'Traditional kulfi made with pure milk and real saffron.', tag: 'Special' },
    { name: 'Malai Kulfi', emoji: '🥛', category: 'Kulfis', price: 35, desc: 'Thick, creamy malai kulfi — just like grandma made.' },
    { name: 'Rajbhog', emoji: '🟡', category: 'Cups', price: 45, desc: 'Inspired by the classic sweet — pure milk and saffron.' },
    { name: 'Mixed Fruit', emoji: '🍑', category: 'Cones', price: 40, desc: 'A burst of seasonal fruits in real milk ice cream.' },
    { name: 'Choco Chip', emoji: '🍪', category: 'Cups', price: 35, desc: 'Vanilla milk base loaded with real chocolate chips.' },
    { name: 'Party Tub 1L', emoji: '🎉', category: 'Family Packs', price: 180, desc: 'Perfect for the whole family. Available in 3 flavours.', tag: 'Value' },
  ];

  get filtered() {
    const f = this.activeFilter();
    return f === 'All' ? this.products : this.products.filter(p => p.category === f);
  }

  setFilter(f: string) { this.activeFilter.set(f); }
}
