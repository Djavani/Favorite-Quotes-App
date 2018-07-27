import { Component,OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from './../../data/quote.interface';
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: { category: string, quote: Quote[], icon: string}

}
