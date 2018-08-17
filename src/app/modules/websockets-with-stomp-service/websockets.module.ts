import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebSocketsComponent } from './websockets.component';
import * as SockJS from 'sockjs-client';
import { StompConfig, StompService } from '@stomp/ng2-stompjs'

const stompConfig: StompConfig = {
    url: new SockJS("http://localhost:8080/websockets"),
    headers: {
        login: 'guest',
        passcode: 'guest'
    },
    heartbeat_in: 0, // Typical value 0 - disabled
    heartbeat_out: 20000,
    reconnect_delay: 5000,
    debug: true
}

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
    providers: [
        StompService,
        {
            provide: StompConfig,
            useValue: stompConfig
        }
    ]
})

export class WebSocketsModule { }
