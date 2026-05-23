import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
  retailers = [
    { name: "Sharma General Store", area: "Civil Lines", city: "Indore", phone: "+91 98765 43210", timing: "8am–10pm" },
    { name: "Cool Corner Sweets", area: "Vijay Nagar", city: "Indore", phone: "+91 97654 32109", timing: "9am–9pm" },
    { name: "Raja Provision Store", area: "Palasia", city: "Indore", phone: "+91 96543 21098", timing: "7am–11pm" },
    { name: "Anand Dairy & Sweets", area: "Rajwada", city: "Indore", phone: "+91 95432 10987", timing: "8am–10pm" },
    { name: "Fresh Mart", area: "Scheme 54", city: "Indore", phone: "+91 94321 09876", timing: "9am–10pm" },
    { name: "Lakshmi Kirana Store", area: "Bhawarkuan", city: "Indore", phone: "+91 93210 98765", timing: "8am–9pm" },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  mapUrl(): SafeResourceUrl {
    // Replace with actual factory/store coordinates
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117635.60299959534!2d75.78980625!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000'
    );
  }
}
