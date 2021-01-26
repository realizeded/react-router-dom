import React from 'react';
import {RouteComponentProps} from './types'
const defaultContext:RouteComponentProps = {
    location:{
        pathname:'/'
    },
    history:{
        push(to:string) {
            
        }
    },
    match:{
        params:{}
    }
}
const context = React.createContext(defaultContext);
const {Provider,Consumer} = context;
export {
    Provider,
    Consumer
}
export default context;