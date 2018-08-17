import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'forums-home',
    templateUrl: './forums-home.component.html',
    styleUrls: ['../forums.component.scss']
})
export class ForumsHomeComponent implements OnInit, OnDestroy {

    private username: string;
    private sub: Subscription;
    
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => this.username = params['username']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}