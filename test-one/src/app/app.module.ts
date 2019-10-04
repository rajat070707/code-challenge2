import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

// tslint:disable-next-line:max-line-length
import { MatInputModule,
 MatButtonModule ,
    MatRadioModule,
     MatSelectModule,
      MatSliderModule,
      MatNativeDateModule,
      MatCardModule} from '@angular/material';


@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    FormsModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
