import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);

  socials = [
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/tinkusicecream', handle: '@tinkusicecream' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/tinkusicecream', handle: 'Tinku\'s Ice Cream' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@tinkusicecream', handle: '@tinkusicecream' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/919999999999', handle: '+91 99999 99999' },
  ];

  submit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted.set(true);
      setTimeout(() => {
        this.submitted.set(false);
        this.formData = { name: '', email: '', subject: '', message: '' };
      }, 3000);
    }
  }
}
