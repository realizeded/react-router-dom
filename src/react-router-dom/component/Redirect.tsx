import React from 'react';
import context from '../context';
import {RouteComponentProps} from '../types';
interface Props {
       to:string
}
class Reirect extends React.Component<Props,{}> {
    static contextType = context
    constructor(props:Props) {
        super(props);
    }
  
    render() {
        const {to,children} = this.props; 
        let context:RouteComponentProps = this.context;
        context.history.push(to);
        return  null;
    }
}
export default Reirect;