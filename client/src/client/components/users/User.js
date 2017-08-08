import React from 'react';
import './User.css';
import UsersActions from '../../actions/UsersActions';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureAlignment: 'center',
            theme: 'bg-yellow',
            displayName: 'John Doe',
            description: 'My profile description',
            displayPicture: '../dist/img/user7-128x128.jpg'
        };
    }

    onDelete() {
        const {user} = this.props;
        console.log(user);
        UsersActions.deleteUser(user.id);
    }

    render() {
        let coverPicture = {}, alignmentType = 'widget-user', footerPadding = '';

        if (this.props.pictureAlignment === 'left') {
            alignmentType = 'widget-user-2';
            footerPadding = 'no-padding';
        }

        if (this.props.coverPicture) {
            coverPicture = {
                background: 'url(' + this.props.coverPicture + ') center'
            };
        }
        const {user} = this.props;
        return (
            <div className={"User col-md-4"}>
                <span className='User__del-icon' onClick={this.onDelete.bind(this)}> × </span>
                <div className={"box box-widget " + alignmentType}>
                    <div className={"widget-user-header " + this.props.theme} style={coverPicture}>
                        <div className="widget-user-image">
                            <img className="img-circle" src={this.props.displayPicture} alt="User Avatar"/>
                        </div>
                        <h3 className="widget-user-username">{user.username}</h3>
                        <h5 className="widget-user-desc">{user.last_name}</h5>
                    </div>
                    <div className={"box-footer " + footerPadding}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }
}

export default User;