import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type NavItem = {
  label: string;
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

  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Inspiratie', path: '/inspiratie' },
    { label: 'Succesverhalen', path: '/succesverhalen' },
    { label: 'Ruimtes & mogelijkheden', path: '/ruimtes-mogelijkheden' },
    { label: 'Bijeenkomsten & events', path: '/bijeenkomsten-events' },
    { label: 'Inzichten & trends', path: '/inzichten-trends' },
    { label: 'Partners & samenwerkingen', path: '/partners-samenwerkingen' },
    { label: 'Mijn inspiratie', path: '/mijn-inspiratie' },
    { label: 'Plan een inspiratiesessie', path: '/plan-een-inspiratiesessie' },
  ];
}
