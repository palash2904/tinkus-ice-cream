import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PurityComponent } from './components/purity/purity.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { LocationsComponent } from './components/locations/locations.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavbarComponent, HeroComponent, PurityComponent,
    ProductsComponent, AboutComponent, VideoSectionComponent,
    LocationsComponent, FeedbackComponent, ContactComponent, FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-purity></app-purity>
      <app-products></app-products>
      <app-about></app-about>
      <app-video-section></app-video-section>
      <app-locations></app-locations>
      <app-feedback></app-feedback>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <a href="https://wa.me/919999999999" class="whatsapp-float" target="_blank" aria-label="WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.054.522 4.003 1.438 5.715L0 24l6.433-1.413A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.37l-.36-.213-3.718.817.847-3.627-.234-.372A9.818 9.818 0 1 1 12 21.818z"/></svg>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 56px;
      height: 56px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37,211,102,0.4);
      z-index: 9999;
      transition: transform 0.2s;
    }
    .whatsapp-float:hover { transform: scale(1.1); }
  `]
})
export class AppComponent {}
