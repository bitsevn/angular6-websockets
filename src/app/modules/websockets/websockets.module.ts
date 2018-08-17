import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebSocketsComponent } from './websockets.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        WebSocketsComponent
    ],
    exports: [
        WebSocketsComponent
    ],
    providers: []
})

export class WebSocketsModule { }
