import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  reviews = [
    { name: 'Priya M.', city: 'Indore', rating: 5, text: 'Best ice cream I\'ve had in years! You can actually taste the real milk. No artificial after-taste at all. Kesar Kulfi is my absolute favourite!', avatar: '👩' },
    { name: 'Rahul S.', city: 'Indore', rating: 5, text: 'Finally, ice cream made the old-fashioned way! Tinku\'s Alphonso Mango is pure magic. My whole family is hooked.', avatar: '👨' },
    { name: 'Anita K.', city: 'Indore', rating: 5, text: 'The purity is unmatched. As a health-conscious person I love that there are no preservatives. Real milk makes all the difference!', avatar: '👩‍💼' },
    { name: 'Vikram T.', city: 'Indore', rating: 5, text: 'Chocolate Fudge is to die for! Creamy, rich, and absolutely guilt-free knowing it\'s all real milk. Will recommend to everyone.', avatar: '🧔' },
    { name: 'Sunita R.', city: 'Indore', rating: 5, text: 'The Malai Kulfi brought back childhood memories! Thick, creamy and so pure. Tinku\'s is now a family staple.', avatar: '👩‍🦳' },
  ];

  formData = { name: '', email: '', rating: 0, message: '' };
  hoverRating = signal(0);
  submitted = signal(false);

  setRating(r: number) { this.formData.rating = r; }
  stars(n: number) { return Array(n).fill(0); }

  submitFeedback() {
    if (this.formData.name && this.formData.rating && this.formData.message) {
      this.submitted.set(true);
      setTimeout(() => {
        this.submitted.set(false);
        this.formData = { name: '', email: '', rating: 0, message: '' };
      }, 3000);
    }
  }
}
