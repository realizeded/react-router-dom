import React,{ComponentType}from 'react';
import {Consumer} from '../context';
import {isMatch} from '../util';
interface Props {
    path:string
    component:ComponentType<any>
    exact?:boolean
}
class Route extends React.Component<Props,{}> {
    constructor(props:Props) {
        super(props);
    }
    render() {
        const {component:Component,path,exact=false} = this.props;
      
        return (<>
            <Consumer>
                {
                    (state)=>{
                        const props = {
                            location:state.location,
                            history:state.history
                        }
                        const {location} = state;
                        const pathname = location.pathname;
                        let result = isMatch(pathname,path,exact);
                        return result?(<Component {...props}/>):null;
                    }
                }
            </Consumer>
        </>);
    }
}
export default Route;