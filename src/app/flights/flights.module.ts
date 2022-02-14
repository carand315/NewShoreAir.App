import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { FlightsPageComponent } from './pages';
import {
  SearchBarComponent,
  TripComponent,
  SummaryComponent,
} from './components';
import { FlightsRoutingModule } from './flights-routing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchBarComponent,
    TripComponent,
    SummaryComponent,
    FlightsPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlightsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class FlightsModule {}
