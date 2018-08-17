import { Component, OnInit, OnDestroy } from "@angular/core";
import { StompService } from '@stomp/ng2-stompjs'
import { Subscription } from "rxjs";

@Component({
    selector: 'websockets',
    templateUrl: './websockets.component.html',
    styleUrls: ['./websockets.component.scss']
})
export class WebSocketsComponent implements OnInit, OnDestroy {

    private subs: Subscription;

    constructor(private stompService: StompService) {
        
    }

    ngOnInit() {
        this.subs = this.stompService.subscribe("/queue/reply").subscribe((data) => {
            //TODO
        })
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    sendMessage() {
        const greeting = JSON.stringify({ message: "Hello from the client" })
        this.stompService.publish("/app/send/message", greeting)
    }
}