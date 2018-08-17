import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";
import { Logger } from "../../shared/logger.service";
import { NodeRecord } from "./node.model";
import { TreeService } from "./tree.service";
import { List, fromJS, Map } from "immutable";

const logger = Logger.instance();

@Component({
    selector: 'tree-app',
    templateUrl: './tree-app.component.html',
    styleUrls: ['./tree-app.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeAppComponent implements DoCheck, OnInit, OnDestroy {

    rootNode = new NodeRecord({ 
        value: "a", 
        children: List([
            new NodeRecord({ value: "b", children: List([
                new NodeRecord({ value: "d" }),
                new NodeRecord({ value: "e", children: List([
                        new NodeRecord({ value: "h" }),
                        new NodeRecord({ value: "i" }),
                    ]) 
                })
                ]) 
            }),
            new NodeRecord({ value: "c", children: List([
                new NodeRecord({ value: "f", children: List([ new NodeRecord({ value: "j" }) ]) }),
                new NodeRecord({ value: "g" })
            ]) })
        ]) 
    });

    private subscription: Subscription;

    constructor(private treeService: TreeService) {
        console.log(this.rootNode);
    }

    update(root: NodeRecord, targetNode: NodeRecord): NodeRecord {
        if(root === targetNode) {
            root.set("flipped", !root.get("flipped"))
            return root;
        } else {
            const childNodes: List<NodeRecord> = root.get("children");
            if(childNodes && childNodes.size>0) {
                let updated = false;
                childNodes.update(childNodes.findIndex(n => n === root), n => {
                    n.set("flipped", !n.get("flipped"));
                    updated = true;
                    return n;
                });

                if(updated) return root;
                return root;
            } else {
                return root;
            }
        }      
    }

    keypath(tree, childrenKey, predicate) {
        var path;
        if(!tree) return;
        if(List.isList(tree)) {
            // List
            tree.forEach((node, i) => {
                path = this.keypath(node, childrenKey, predicate);
                if(path) return path.unshift(i);
            })
        } else if(predicate(tree)) {
            // Self
            return [];
        } else {
            // Map
            path = this.keypath(tree.get(childrenKey), childrenKey, predicate);
            if(path) return [childrenKey].concat(path);
        }
    }

    findKeyPathOf(tree, childrenKey, predicate) {
        var path;
        if (!tree) return [];
        if (List.isList(tree)) {
            tree.some((child, i) => {
                path = this.findKeyPathOf(child, childrenKey, predicate);
                if (path) return path.unshift(i); // always returns truthy
            });
            return path;
        } 
        if (predicate(tree)) return [];
        path = this.findKeyPathOf(tree.get(childrenKey), childrenKey, predicate);
        if (path) return [childrenKey].concat(path);
    }

    ngOnInit() {
        this.subscription = this.treeService.nodeEvent$.subscribe((node) => {
            let oldTree = this.rootNode;
            console.group("node-click");
            const keyPath = this.findKeyPathOf(this.rootNode, 'children', (n => n === node))
            console.log("keyPath: " + keyPath)
            /* let newTree = this.rootNode.updateIn(keyPath, n => n.set("flipped", !n.get("flipped")))
            console.log("prev:")
            console.log(oldTree)
            console.log("new:")
            console.log(newTree)
            console.log(`root changed: ${oldTree !== newTree}`); */
            console.groupEnd();
        });

        this.test();
    }

    test() {
        var tree: any = fromJS({
            value: "a",
            children: [
                { value: "b", children: [
                    { value: "d" },
                    { value: "e", children: [
                        { value: "h" },
                        { value: "j" }
                    ] }
                ] },
                { value: "c", children: [
                    { value: "f", children: [
                        { value: "i" }
                    ] },
                    { value: "g" }
                ] }
            ]
        });

        var b_keyPath = this.keypath(tree, 'children', node => node.get('value') === "b");
        var c_keyPath = this.keypath(tree, 'children', node => node.get('value') === "c");
        var i_keyPath = this.keypath(tree, 'children', node => node.get('value') === "i");

        console.log(`b_keyPath: ${b_keyPath}`)
        console.log(tree.getIn(['children',0]))
        console.log(`c_keyPath: ${c_keyPath}`)
        console.log(tree.getIn(['children',0,'children',0,'children']))
        console.log(`i_keyPath: ${i_keyPath}`)

        console.log(tree.getIn(['children',1,'children',0,'children', 0]))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngDoCheck() {
        console.info(`tree app - checking!`)
    }
}