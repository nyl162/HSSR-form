import { NgModule } from "@angular/core";

import {MatToolbarModule} from "@angular/material/toolbar"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"

const MODULE = [MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule];

@NgModule({
    imports: MODULE,
    exports: MODULE
})

export class MaterialModule{};