import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopstuffComponent } from './content/shopstuff/shopstuff.component';
import { JournalComponent } from './content/journal/journal.component';
import { AdventureComponent } from './content/adventure/adventure.component';
import { JournalService } from './content/journal/journal.service';
import { Journal } from './content/journal/journal';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    ShopstuffComponent,
    JournalComponent,
    AdventureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
