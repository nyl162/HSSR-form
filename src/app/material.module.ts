import { NgModule } from "@angular/core";

import {MatToolbarModule} from "@angular/material/toolbar"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatRadioModule} from "@angular/material/radio"
import {MatDatepickerModule} from '@angular/material/datepicker';
//import { MatNativeDateModule } from "@angular/material/core";
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule } from "@angular/material";


const MODULE = [MatToolbarModule,MatFormFieldModule,MatInputModule,
                MatButtonModule,MatCardModule,MatRadioModule,
                MatDatepickerModule,/*MatNativeDateModule*/ 
                MatMomentDateModule,FlexLayoutModule,
                MatIconModule
                ];

@NgModule({
    imports: MODULE,
    exports: MODULE
})

export class MaterialModule{};