import {Routes, RouterModule} from '@angular/router';
import {ShowsComponent} from './shows.component'

const appRoutes: Routes = [
    {path: '', redirectTo: 'shows', pathMatch: 'full'},
    {path: 'shows', component: ShowsComponent}
];

export let appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);