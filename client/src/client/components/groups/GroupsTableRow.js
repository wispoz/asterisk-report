/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 13:51
 */
import React from 'react';
import './Group.css';
import GroupsActions from '../../actions/GroupsActions';
class GroupsTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete() {
        const {group} = this.props;
        GroupsActions.deleteGroup(group.id);
    }
    render() {
        const {group} = this.props;
        return <div className="Group col-md-4">
            <span className='Group__del-icon' onClick={this.onDelete.bind(this)}> × </span>
            {group.name}</div>;
    }
}

export default GroupsTableRow;