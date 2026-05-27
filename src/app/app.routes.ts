import { Routes } from '@angular/router';
import { EvenementenBijeenkomstenPageComponent } from './pages/evenementen-bijeenkomsten/evenementen-bijeenkomsten.page';
import { ExpertiseInspiratiePageComponent } from './pages/expertise-inspiratie/expertise-inspiratie.page';
import { HomePageComponent } from './pages/home/home.page';
import { MijnInspiratiePageComponent } from './pages/mijn-inspiratie/mijn-inspiratie.page';
import { OntmoetBeleefPageComponent } from './pages/ontmoet-beleef/ontmoet-beleef.page';
import { PartnersSamenwerkingenPageComponent } from './pages/partners-samenwerkingen/partners-samenwerkingen.page';
import { PlanEenSessiePageComponent } from './pages/plan-een-sessie/plan-een-sessie.page';
import { RuimtesMogelijkhedenPageComponent } from './pages/ruimtes-mogelijkheden/ruimtes-mogelijkheden.page';
import { SuccesverhalenPageComponent } from './pages/succesverhalen/succesverhalen.page';
import { ZakelijkeNieuwsbriefPageComponent } from './pages/zakelijke-nieuwsbrief/zakelijke-nieuwsbrief.page';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'bijeenkomsten-events', component: EvenementenBijeenkomstenPageComponent },
	{ path: 'inspiratie', component: ExpertiseInspiratiePageComponent },
	{ path: 'ontmoet-beleef', component: OntmoetBeleefPageComponent },
	{ path: 'ruimtes-mogelijkheden', component: RuimtesMogelijkhedenPageComponent },
	{ path: 'succesverhalen', component: SuccesverhalenPageComponent },
	{ path: 'partners-samenwerkingen', component: PartnersSamenwerkingenPageComponent },
	{ path: 'mijn-inspiratie', component: MijnInspiratiePageComponent },
	{ path: 'plan-een-sessie', component: PlanEenSessiePageComponent },
	{ path: 'zakelijke-nieuwsbrief', component: ZakelijkeNieuwsbriefPageComponent },
	{ path: 'inzichten-trends', redirectTo: 'inspiratie' },
	{ path: 'plan-een-inspiratiesessie', redirectTo: 'plan-een-sessie' },
	{ path: '**', redirectTo: '' },
];
