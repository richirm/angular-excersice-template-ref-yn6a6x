import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListModule } from './components/list/list.module';
import { ItemModule } from './components/item/item.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ListModule, ItemModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
