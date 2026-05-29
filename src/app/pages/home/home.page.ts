import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

type InsightItem = {
  title: string;
  description: string;
  link: string;
  route: string;
};

type CaseItem = {
  title: string;
  result: string;
  summary: string;
  route: string;
};

type BenefitItem = {
  title: string;
  description: string;
};

type TrustItem = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

type StatItem = {
  value: string;
  label: string;
};

type StoryItem = {
  title: string;
  description: string;
  route: string;
};

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected readonly heroImage = '/hotel-jakarta-amsterdam-westcord-hotels-hortus-botanicus-subtropische-tuin-4.jpg';

  protected readonly heroStats: StatItem[] = [
    { value: '12+', label: 'Zakelijke invalshoeken' },
    { value: '4', label: 'Hoofdthema’s op de homepage' },
    { value: '1', label: 'Sterke merkbeleving' },
  ];

  protected readonly insights: InsightItem[] = [
    {
      title: 'Evenementen & Bijeenkomsten',
      description: 'Ontdek inspirerende evenementen en netwerkmomenten.',
      link: 'Bekijk bijeenkomsten',
      route: '/bijeenkomsten-events',
    },
    {
      title: 'Expertise & Inspiratie',
      description: 'Kom meer te weten over de trends, inzichten en expertvisies over de toekomst van de zakelijke evenementen.',
      link: 'Ontdek inspiratie',
      route: '/inspiratie',
    },
    {
      title: 'Ontdek & Beleef',
      description: 'Ervaar de sfeer en de mogelijkheden die Hotel Jakarta uniek maken.',
      link: 'Verken de beleving',
      route: '/ontmoet-beleef',
    },
    {
      title: 'Succesverhalen',
      description: 'Lees hoe andere organisaties Hotel Jakarta hebben ervaren. ',
      link: 'Lees succesverhalen',
      route: '/succesverhalen',
    },
  ];

  protected readonly cases: CaseItem[] = [
    {
      title: 'Succesverhalen',
      result: 'Impactvolle resultaten voor organisaties die verder willen groeien',
      summary: 'Laat zien hoe Hotel Jakarta gesprekken, merkbeleving en relaties omzet in meetbare impact.',
      route: '/succesverhalen',
    },
    {
      title: 'Partners & Samenwerkingen',
      result: 'Een netwerk van organisaties die elkaar versterken',
      summary: 'Samenwerkingen met merken, communities en teams die kwaliteit en inhoud belangrijk vinden.',
      route: '/partners-samenwerkingen',
    },
    {
      title: 'Plan een sessie',
      result: 'Van eerste idee naar een concreet gesprek met het team',
      summary: 'Gebruik het platform om een sessie te plannen en direct de juiste route naar contact te vinden.',
      route: '/plan-een-sessie',
    },
  ];

  protected readonly benefits: BenefitItem[] = [
    {
      title: 'Duurzaam en onderscheidend',
      description: 'Een circulaire mindset, bewuste keuzes en een locatie die inspireert.',
    },
    {
      title: 'Persoonlijke begeleiding',
      description: 'Van eerste idee tot laatste gast. Wij denken mee en ontzorgen.',
    },
    {
      title: 'Beleving die impact maakt',
      description: 'Meer dan een bijeenkomst. Een ervaring die bijblijft.',
    },
  ];

  protected readonly trust: TrustItem[] = [
    { name: 'Randstad', logo: '/randstad.png', width: 363, height: 58 },
    { name: 'ABN AMRO', logo: '/abn amro.png', width: 376, height: 93 },
    { name: 'Gemeente Amsterdam', logo: '/gemeente amsterdam.png', width: 236, height: 107 },
    { name: 'Heineken', logo: '/heininken.png', width: 341, height: 82 },
  ];

  protected readonly story: StoryItem = {
    title: 'Van strategie tot verbinding',
    description:
      'Voor honderden gasten organiseerde Hotel Jakarta een meerdaags corporate event vol inspiratie, ontmoeting en impact.',
    route: '/succesverhalen',
  };
}
