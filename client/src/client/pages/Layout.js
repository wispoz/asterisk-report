import React from 'react';
import {HeaderBar} from 'adminlte-reactjs';
import NavigationMenu from '../components/NavigationMenu';

class Comments extends React.Component {
    render() {
        return <div>
            <HeaderBar/>
            <NavigationMenu/>
            <div className="content-wrapper">
                {this.props.children}
            </div>
        </div>;
    }
}

export default Comments;