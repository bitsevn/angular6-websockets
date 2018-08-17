import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, DoCheck } from "@angular/core";
import { Logger } from "../../shared/logger.service";
import { NodeRecord } from "./node.model";
import { TreeService } from "./tree.service";

const logger = Logger.instance();

declare var $: any;

@Component({
    selector: '[tree-node]',
    templateUrl: './node.component.html',
    styleUrls: ['./tree-app.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent implements OnInit, OnDestroy, DoCheck {

    @Input() node: NodeRecord;

    constructor(private zone: NgZone, private elRef: ElementRef, private treeService: TreeService) {
      
    }

    click(event) {
      this.treeService.onNodeClick(this.node);
      //const newNode = this.node.set("flipped", !this.node.get("flipped"))
      //this.node = new NodeRecord({ value:  })
    }

    ngOnInit() {
      this.elRef.nativeElement.addEventListener('click', this.click.bind(this));
    }

    ngOnDestroy() {
      this.elRef.nativeElement.removeEventListener('click', this.click.bind(this));
    }
  
    ngDoCheck() {
      //console.info(`node [${this.node.get('value')}] - checking!`)
    }
}