/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 18:05
 */
import React from 'react';
import './Comment.css';
import CommentsActions from '../../actions/CommentsActions';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class CommentsTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const {comment} = this.props;
        CommentsActions.deleteComment(comment.id);
    }

    render() {
        const {comment} = this.props;
        return <TableRow>
            <TableRowColumn>{comment.id}</TableRowColumn>
            <TableRowColumn>{comment.comment}</TableRowColumn>
            <TableRowColumn><span onClick={this.onDelete.bind(this)}> × </span> </TableRowColumn>
        </TableRow>;
    }
}

export default CommentsTableRow;