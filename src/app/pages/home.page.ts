import { Component } from '@angular/core';

type InsightItem = {
  title: string;
  description: string;
  link: string;
};

type CaseItem = {
  klant: string;
  resultaat: string;
  samenvatting: string;
};

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePageComponent {
  protected readonly insights: InsightItem[] = [
    {
      title: 'Over Hotel Jakarta',
      description: 'Duurzaamheid, gastvrijheid en Indonesische invloeden vertaald naar een zakelijke context.',
      link: 'Lees het profiel',
    },
    {
      title: 'Vergaderen en Events',
      description: 'Ruimtes, capaciteit, arrangementen en servicelevels voor meetings en zakelijke bijeenkomsten.',
      link: 'Bekijk mogelijkheden',
    },
    {
      title: 'Thought Leadership',
      description: 'Artikelen over hospitality, beleving, duurzaam ondernemen en zakelijke impact.',
      link: 'Ontdek artikelen',
    },
  ];

  protected readonly cases: CaseItem[] = [
    {
      klant: 'TechScale Summit',
      resultaat: '1 dag event met 320 zakelijke gasten',
      samenvatting: 'Van kick-off tot netwerkdiner: een complete case over programmadesign en hospitality-ervaring.',
    },
    {
      klant: 'Green Finance Forum',
      resultaat: 'Meerdelige boardmeeting-reeks',
      samenvatting: 'Hoe duurzame positionering en premium service samenkomen in terugkerende directiebijeenkomsten.',
    },
    {
      klant: 'Creative Partner Days',
      resultaat: 'Internationale klantretentie met +28% NPS',
      samenvatting: 'Een inspirerende case over storytelling, ruimtes en de vertaalslag naar langdurige samenwerking.',
    },
  ];
}
