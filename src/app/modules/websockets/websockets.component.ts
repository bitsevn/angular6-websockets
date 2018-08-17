import { Component, OnInit, OnDestroy } from "@angular/core";
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

@Component({
    selector: 'websockets',
    templateUrl: './websockets.component.html',
    styleUrls: ['./websockets.component.scss']
})
export class WebSocketsComponent implements OnInit, OnDestroy {

    ws: any;

    constructor() { }

    ngOnInit() {
        this.connect();
    }

    ngOnDestroy() {
        this.disconnect();
    }

    connect() {
        //connect to stomp where stomp endpoint is exposed
        let socket = new SockJS("http://localhost:8080/websockets");
        this.ws = Stomp.over(socket);
        this.ws.connect({}, (frame) => {

            this.ws.subscribe("/queue/reply", (message) => {
                //TODO
            });

        }, (error) => {
            console.error("STOMP error " + error)
        });

    }

    disconnect() {
        if (this.ws != null) {
            this.ws.ws.close();
        }
        console.log("Disconnected");
    }

    sendMessage() {
        const greeting = JSON.stringify({ message: "Hello from the client" })
        this.ws.send("/app/send/message", {}, greeting)
    }

}