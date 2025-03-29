import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FeaturedCardsComponent } from '../../components/featured-cards/featured-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FeaturedCardsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
