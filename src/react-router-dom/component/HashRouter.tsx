import React from 'react';
import {Provider} from '../context';
import {RouteComponentProps as RouteComponentState} from '../types';
class HashRouter extends React.Component<{},RouteComponentState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            location:{
                pathname:'/'
            },
            history:{
                push(to:string) {
                    window.location.hash = to;
                }
            }
        };
    }
    componentDidMount() {
        window.location.hash = window.location.hash||'#/';
        window.addEventListener('hashchange',()=>{
           let hash = window.location.hash;
           hash = hash&&hash.slice(1);
           this.setState((state)=>{
               return {
                   location:{
                       ...state.location,
                       pathname:hash
                   }
               }
           })
        });
    }
    render() {
        return (<Provider value={this.state}>
        {
            this.props.children
        }
        </Provider>);
    }
}
export default HashRouter;