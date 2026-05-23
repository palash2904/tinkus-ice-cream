import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'down' | 'left' | 'right' | 'scale' = 'up';

  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'scroll-reveal');
    this.renderer.addClass(element, `reveal-${this.revealDirection}`);
    this.renderer.setStyle(element, 'transition-delay', `${this.revealDelay}ms`);

    if (!('IntersectionObserver' in window)) {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'is-visible');
          this.observer?.unobserve(element);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
