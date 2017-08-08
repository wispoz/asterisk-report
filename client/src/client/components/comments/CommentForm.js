import React, {Component} from 'react';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }
    handleCommentChange(event) {
        this.setState({comment: event.target.value});
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
                        <div className="col-lg-9">
                            <input
                                type="text"
                                className="form-control comment"
                                value={this.state.comment}
                                onChange={this.handleCommentChange.bind(this)}
                            />
                        </div>
                        <div className="col-lg-3">
                            <input
                                value="Добавить"
                                type="button"
                                onClick={this.handleCommentChange.bind(this)}
                                className="btn btn-success"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Box></div>;
    }
}

export default CommentForm;