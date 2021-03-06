import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TreetableModule } from "ng-material-treetable";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http"; //HttpClientModule dovrebbe già esserci
import {MatRadioModule} from '@angular/material/radio';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from '@angular/material';
import { RealtableComponent } from './realtable/realtable.component';

@NgModule({
  declarations: [RealtableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreetableModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RealtableComponent]
})
export class AppModule {}
