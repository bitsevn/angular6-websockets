import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { NodeRecord } from "./node.model";

@Injectable({
    providedIn: 'root'
})
export class TreeService {
    private nodeSubject: Subject<NodeRecord> = new Subject<NodeRecord>();
    nodeEvent$: Observable<NodeRecord> = this.nodeSubject.asObservable();

    onNodeClick(node: NodeRecord) {
        this.nodeSubject.next(node);
    }
}