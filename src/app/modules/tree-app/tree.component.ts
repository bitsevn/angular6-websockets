import { Component, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { Logger } from '../../shared/logger.service';
import { NodeRecord } from './node.model';

const logger = Logger.instance();

@Component({
  selector: '[tree]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree-app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent implements DoCheck {

  @Input() node: NodeRecord;

  ngDoCheck() {
    //console.info(`tree [${this.node.value}] - checking!`)
  }

}
