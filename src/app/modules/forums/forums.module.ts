import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';
import { ForumsHomeComponent } from './home/forums-home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ForumsRoutingModule
    ],
    declarations: [
        ForumsComponent,
        ForumsHomeComponent
    ],
    exports: [
        ForumsComponent
    ],
    providers: []
})

export class ForumsModule { }
