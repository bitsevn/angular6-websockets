import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ChatRoomsComponent } from './chatrooms.component';
import { ChatRoomsAppComponent } from './chatrooms-app.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ChatRoomsAppComponent,
        ChatRoomsComponent
    ],
    exports: [
        ChatRoomsAppComponent
    ],
    providers: []
})

export class ChatRoomsModule { }
