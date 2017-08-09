/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 18:05
 */
import React from 'react';
import './Comment.css';
import CommentsActions from '../../actions/CommentsActions';
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
        return <div className="Comment col-md-4">
            <span className='Comment__del-icon' onClick={this.onDelete.bind(this)}> × </span>
            {comment.comment}</div>;
    }
}
export default CommentsTableRow;