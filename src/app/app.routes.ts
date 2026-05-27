import { Routes } from '@angular/router';
import { ContentPageComponent } from './pages/content.page';
import { HomePageComponent } from './pages/home.page';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{
		path: 'inspiratie',
		component: ContentPageComponent,
		data: {
			title: 'Inspiratie',
			description: 'Ontdek inspirerende concepten, sfeerbeelden en hospitality-ideeën voor zakelijke bijeenkomsten.',
		},
	},
	{
		path: 'succesverhalen',
		component: ContentPageComponent,
		data: {
			title: 'Succesverhalen',
			description: 'Lees hoe organisaties via Hotel Jakarta impactvolle events en langdurige samenwerkingen realiseerden.',
		},
	},
	{
		path: 'ruimtes-mogelijkheden',
		component: ContentPageComponent,
		data: {
			title: 'Ruimtes & mogelijkheden',
			description: 'Bekijk beschikbare ruimtes, opstellingen en maatwerkopties voor meetings, diners en conferenties.',
		},
	},
	{
		path: 'bijeenkomsten-events',
		component: ContentPageComponent,
		data: {
			title: 'Bijeenkomsten & events',
			description: 'Van board meeting tot grootschalig event: overzicht van formats, programma-opties en begeleiding.',
		},
	},
	{
		path: 'inzichten-trends',
		component: ContentPageComponent,
		data: {
			title: 'Inzichten & trends',
			description: 'Blijf op de hoogte van trends in zakelijke hospitality, duurzaamheid en belevingsdesign.',
		},
	},
	{
		path: 'partners-samenwerkingen',
		component: ContentPageComponent,
		data: {
			title: 'Partners & samenwerkingen',
			description: 'Leer de partners kennen waarmee Hotel Jakarta samenwerkt om hoogwaardige ervaringen te creëren.',
		},
	},
	{
		path: 'mijn-inspiratie',
		component: ContentPageComponent,
		data: {
			title: 'Mijn inspiratie',
			description: 'Verzamel en beheer favoriete ideeën, cases en concepten voor jouw volgende zakelijke bijeenkomst.',
		},
	},
	{
		path: 'plan-een-inspiratiesessie',
		component: ContentPageComponent,
		data: {
			title: 'Plan een inspiratiesessie',
			description: 'Plan een sessie met het team van Hotel Jakarta om jouw eventdoelen te vertalen naar een concreet plan.',
		},
	},
	{ path: '**', redirectTo: '' },
];
