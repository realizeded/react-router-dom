import React from 'react';
import {RouteComponentProps} from '../../react-router-dom';
interface Props extends RouteComponentProps{

}
interface State {

}
class About extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
    }
    render() {
        return (<div>About{this.props.match.params.id}</div>);
    }
}
export default About;