import React from 'react';
import context from '../context';
import {isMatch} from '../util';
import { RouteComponentProps } from '../types';
interface Props {

}
function isReactNodeArray(obj:any):obj is React.ReactNodeArray {
    return obj.length !== undefined;
}
function isReactChild<T>(obj:any):obj is React.ReactElement<T> {
    return obj.props !== undefined;
}
class Switch extends React.Component<Props,{}> {
    static contextType = context
    constructor(props:Props) {
        super(props);
    }
    render() {
        let children = this.props.children;
        let context:RouteComponentProps = this.context;
        let pathname = context.location.pathname;
        if(isReactNodeArray(children)) {
            let len = children.length;
            for(let i =0;i<len;i++) {
                let child = children[i];
                if(isReactChild<{path?:string}>(child)) {
                    let path = child.props.path || '';
                    
                    if(isMatch(pathname,path,true)||path.length===0) {
                        return child;
                    }
                }
            }
        }

        return null;
    }
}
export default Switch;