import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { FeaturedCardsComponent } from './components/featured-cards/featured-cards.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    LanguageSelectorComponent,
    FeaturedCardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
