import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import GroupsActions from '../../actions/GroupsActions';

class GroupsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.onGroupAdd = this.onGroupAdd.bind(this);
    }

    handleCommentChange(event) {
        this.setState({name: event.target.value});
    }

    onGroupAdd() {
        const Group = {
            name: this.state.name
        };
        GroupsActions.createGroup(Group);
        this.setState({"name": ""});
    }

    render() {
        return <div className="row"><Box
            border={true}
            width="12"
            theme="box-default"
            headerMarkup={<i className="fa fa-comments-o"></i>}>
            <div className="box-footer">
                <form action="#" method="post">
                    <div className="row">
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control comment"
                                value={this.state.name}
                                onChange={this.handleCommentChange.bind(this)}
                            />
                        </div>
                        <div className="col-sm-2">
                            <input
                                value="Добавить"
                                type="button"
                                onClick={this.onGroupAdd.bind(this)}
                                className="btn btn-success"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Box></div>;
    }
}

export default GroupsForm;