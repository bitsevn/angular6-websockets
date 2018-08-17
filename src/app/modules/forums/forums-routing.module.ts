import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { ForumsHomeComponent } from './home/forums-home.component';

const routesConfig = [
    { path: 'forums/home/:username', component: ForumsHomeComponent },
]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routesConfig)
    ],
    declarations: [],
    exports: [],
    providers: []
})

export class ForumsRoutingModule { }
