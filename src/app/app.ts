import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type NavItem = {
  label: string;
  shortLabel: string;
  path: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected isMenuOpen = false;

  protected readonly navItems: NavItem[] = [
    { label: 'Home', shortLabel: 'H', path: '/' },
    { label: 'Evenementen & Bijeenkomsten', shortLabel: 'E', path: '/bijeenkomsten-events' },
    { label: 'Expertise & Inspiratie', shortLabel: 'I', path: '/inspiratie' },
    { label: 'Ontmoet & Beleef', shortLabel: 'O', path: '/ontmoet-beleef' },
    { label: 'Ruimtes & Mogelijkheden', shortLabel: 'R', path: '/ruimtes-mogelijkheden' },
    { label: 'Succesverhalen', shortLabel: 'S', path: '/succesverhalen' },
    { label: 'Partners & Samenwerkingen', shortLabel: 'P', path: '/partners-samenwerkingen' },
    { label: 'Mijn inspiratie', shortLabel: 'M', path: '/mijn-inspiratie' },
    { label: 'Plan een sessie', shortLabel: 'X', path: '/plan-een-sessie' },
    { label: 'Zakelijke nieuwsbrief', shortLabel: 'Z', path: '/zakelijke-nieuwsbrief' },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenuOnNavigate(): void {
    if (window.matchMedia('(max-width: 980px)').matches) {
      this.isMenuOpen = false;
    }
  }
}
