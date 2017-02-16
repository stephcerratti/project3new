import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ShopstuffComponent } from './content/shopstuff/shopstuff.component';
import { JournalComponent } from './content/journal/journal.component';
import { AdventureComponent } from './content/adventure/adventure.component';

const routes: Routes = [

	{path: 'shopstuff', component: ShopstuffComponent},
	{path: 'journal', component: JournalComponent},
	{path: 'adventure', component: AdventureComponent},
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}