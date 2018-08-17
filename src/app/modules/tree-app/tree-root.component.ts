import { AfterViewChecked, Component, Input, DoCheck } from "@angular/core";
import { Logger } from "../../shared/logger.service";
import { NodeRecord } from "./node.model";
import { TreeService } from "./tree.service";

const logger = Logger.instance();

@Component({
    selector: 'tree-root',
    templateUrl: './tree-root.component.html',
    styleUrls: ['./tree-app.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeRootComponent implements DoCheck {
    
    @Input() rootNode: NodeRecord;

    constructor(private treeService: TreeService) {

    }

    onRootNodeClick(event) {
        //console.log(`[${this.rootNode.get("value")}] clicked!!`);
        this.treeService.onNodeClick(this.rootNode);
    }

    ngDoCheck() {
        //console.info(`node [${this.rootNode.get("value")}] - checking!`)
    }
}