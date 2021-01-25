import React from 'react';
import context from '../context';
import {RouteComponentProps} from '../types';
interface Props {
       to:string
}
class Link extends React.Component<Props,{}> {
    static contextType = context
    constructor(props:Props) {
        super(props);
        this.aTagClick = this.aTagClick.bind(this);
    }
    aTagClick(to:string) {
        let context:RouteComponentProps = this.context;
        context.history.push(to);
    }
    render() {
        const {to,children} = this.props; 
        const {aTagClick} = this;
        return (<a href={to}
            onClick={
                (e)=>{
                    aTagClick(to);
                    e.preventDefault();
                }
            }
          >
              {children}
          </a>)
    }
}
export default Link;