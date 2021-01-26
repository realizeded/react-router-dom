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
 
                        const {location} = state;
                        const params:{
                            [key:string]:any
                        } = {};
                        const pathname = location.pathname;
                        let result = isMatch(pathname,path,exact,params);
                        const props = {
                            location:state.location,
                            history:state.history,
                            match:{
                                ...state.match,
                                params
                            }
                        };
                        return result?(<Component {...props}/>):null;
                    }
                }
            </Consumer>
        </>);
    }
}
export default Route;