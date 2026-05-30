import { ChangeDetectionStrategy, Component } from '@angular/core';

type InspirationItem = {
  title: string;
  category: string;
  image: string;
};

type ArticleItem = {
  title: string;
  type: string;
  summary: string;
  image: string;
};

type RoomItem = {
  title: string;
  meta: string;
  tags: string;
  image: string;
};

type RecommendationItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

type TimelineItem = {
  label: string;
  detail: string;
  done: boolean;
};

@Component({
  selector: 'app-mijn-inspiratie-page',
  templateUrl: './mijn-inspiratie.page.html',
  styleUrl: './mijn-inspiratie.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MijnInspiratiePageComponent {
  protected readonly heroImage = '/headerfoto inspritatie.jpg';

  protected readonly opgeslagenInspiratie: InspirationItem[] = [
    { title: 'Malabar bijeenkomst', category: 'Netwerkevent', image: '/malabar.jpg' },
    { title: 'Duurzame boardmeeting', category: 'Vergadering', image: '/duurzame boardmeeting.jpg' },
    { title: 'Kick-off evenement', category: 'Bedrijfsevent', image: '/kickoff evenement.jpg' },
  ];

  protected readonly recentBekeken: ArticleItem[] = [
    {
      title: 'Hospitality trends 2025',
      type: 'Artikel',
      summary: 'De belangrijkste ontwikkelingen in hospitality en events.',
      image: '/Succesverhalen.jpg',
    },
    {
      title: 'Duurzaam vergaderen',
      type: 'Artikel',
      summary: 'Praktische tips voor duurzame bijeenkomsten met impact.',
      image: '/ontdek en beleef.jpg',
    },
    {
      title: 'Van strategie tot beleving',
      type: 'Klantcase',
      summary: 'Hoe Deloitte een leiderschapsevent organiseerde bij Hotel Jakarta.',
      image: '/expertise en inspiratie.jpg',
    },
  ];

  protected readonly favorieteRuimtes: RoomItem[] = [
    {
      title: 'Java Room',
      meta: 'Tot 80 personen',
      tags: 'Vergaderen',
      image: '/ontdek en beleef.jpg',
    },
    {
      title: 'Skybar',
      meta: 'Tot 120 personen',
      tags: 'Borrel / Event',
      image: '/headerfoto.jpg',
    },
    {
      title: 'The Gallery',
      meta: 'Tot 200 personen',
      tags: 'Presentatie / Event',
      image: '/hotel-jakarta-amsterdam-westcord-hotels-hortus-botanicus-subtropische-tuin-4.jpg',
    },
  ];

  protected readonly conceptTimeline: TimelineItem[] = [
    { label: 'Aanvraag ontvangen', detail: '4 Juni 2026', done: true },
    { label: 'Concept in ontwikkeling', detail: '14 mei 2025', done: true },
    { label: 'Persoonlijk gesprek plannen', detail: 'We nemen contact met je op om een afspraak te plannen.', done: false },
  ];

  protected readonly aanbevelingen: RecommendationItem[] = [
    {
      title: 'Netwerkdiner',
      subtitle: 'Diner',
      description: 'Samenkomen, verbinden, nieuwe kansen creëren.',
      image: '/Netwerkdiner.jpg',
    },
    {
      title: 'Congres',
      subtitle: 'Event',
      description: 'Versterk verbinding en inspireer jouw team.',
      image: '/Congress.jpg',
    },
  ];
}
