import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'forums',
    templateUrl: './forums.component.html',
    styleUrls: ['./forums.component.scss']
})
export class ForumsComponent {

    @ViewChild("username") usernameElem: ElementRef<any>;

    constructor(private router: Router) {

    }

    login(event) {
        if(this.usernameElem.nativeElement.value && this.usernameElem.nativeElement.value.trim().length > 1) {
            const username = this.usernameElem.nativeElement.value.trim();
            console.log(`Logged in as @${username}`)
            this.router.navigate(['forums/home', username])
        }
    }
    
}