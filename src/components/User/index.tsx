import React from 'react';
import {RouteComponentProps} from '../../react-router-dom'
interface Props extends RouteComponentProps{

}
interface State {

}
class User extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (<div>User</div>);
    }
}
export default User;