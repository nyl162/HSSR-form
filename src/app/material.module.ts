import { NgModule } from "@angular/core";

import {MatToolbarModule} from "@angular/material/toolbar"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatRadioModule} from "@angular/material/radio"
//import {MatMomentDateModule} from "@angular/material-moment-adapter"

const MODULE = [MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatRadioModule/*,MatMomentDateModule*/];

@NgModule({
    imports: MODULE,
    exports: MODULE
})

export class MaterialModule{};