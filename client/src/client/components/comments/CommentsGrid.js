import React, {Component} from 'react';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';
import CommentsStore from '../../stores/CommentsStore';
import CommentsActions from '../../actions/CommentsActions';

function getStateFromFlux() {
    return {
        isLoading: CommentsStore.isLoading(),
        comments: CommentsStore.getComments()
    };

}


class CommentsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        CommentsActions.loadComments();
    }

    componentDidMount() {
        CommentsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        CommentsStore.removeChangeListener(this._onChange);
    }

    render() {
        return <div className="row"><Box
            border={true}
            width="12"
            theme="box-default"
            headerMarkup={<i className="fa fa-comments-o"></i>}>
            <table className="table table-bordered">
                <tbody>
                {this.state.comments.map(comment =>
                    <tr key={comment.id}>
                        <td>{comment.comment}</td>
                        <td></td>
                    </tr>)}
                </tbody>

            </table>
        </Box></div>;
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }
}

export default CommentsGrid;