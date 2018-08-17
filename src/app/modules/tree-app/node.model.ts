import { Record, List } from "immutable";

export interface INode {
    value: string;
    root?: boolean;
    flipped?: boolean;
    children?: List<NodeRecord>;
}

const defaults = {
    root: false,
    flipped: false,
    value: null,
    children: null
};

export class NodeRecord extends Record(defaults) implements INode {
    root: boolean;
    flipped: boolean;
    value: string;
    children: List<NodeRecord>;

    constructor(props: INode) {
        super(props);
        if(props.children && props.children.size > 0) {
            this.set('root', true);
        }
    }

    get<T extends keyof INode>(value: T): INode[T] { 
        
        // super.get() is mapped to the original get() function on Record
        return super.get(value) 
    }

    /* constructor(value: string, children?: Node[]) {
        this.value = value;
        this.children = children;
        if(children && children.length > 0) {
            this.root = false;
        }
    } */
}