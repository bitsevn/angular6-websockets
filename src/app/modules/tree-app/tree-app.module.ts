import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TreeAppComponent } from './tree-app.component';
import { TreeRootComponent } from './tree-root.component';
import { TreeComponent } from './tree.component';
import { NodeComponent } from './node.component';

@NgModule({
  declarations: [
    TreeAppComponent,
    TreeRootComponent,
    TreeComponent,
    NodeComponent

  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    TreeAppComponent
  ],
  providers: []
})

export class TreeAppModule { }
