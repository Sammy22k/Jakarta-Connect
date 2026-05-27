import { Component } from '@angular/core';

type RoadmapItem = {
  fase: string;
  title: string;
  description: string;
  role: string;
};

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
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly roadmap: RoadmapItem[] = [
    {
      fase: 'A',
      title: 'Attention',
      description: 'De zakelijke doelgroep ontdekt Hotel Jakarta via relevante content, kanalen en campagnes.',
      role: 'Rol Jakarta Connect: ondersteunend (indirect).',
    },
    {
      fase: 'I',
      title: 'Interest',
      description: 'Bezoekers klikken door naar Jakarta Connect en ontdekken klantcases, evenementen en mogelijkheden.',
      role: 'Rol Jakarta Connect: startpunt van verdieping.',
    },
    {
      fase: 'D',
      title: 'Desire',
      description: 'Verhalen en beelden laten de ervaring van Hotel Jakarta zien en bouwen vertrouwen op.',
      role: 'Rol Jakarta Connect: behoefte versterken.',
    },
    {
      fase: 'A',
      title: 'Action',
      description: 'De doelgroep zet de volgende stap: contact opnemen, offerte aanvragen of boeking plaatsen.',
      role: 'Rol Jakarta Connect: conversie versterken.',
    },
  ];

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
