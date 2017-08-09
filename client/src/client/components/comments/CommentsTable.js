import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import Masonry from 'react-masonry-component';
import CommentsTableRow from "./CommentsTableRow";
class CommentsTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {comments} = this.props;
        const masonryOptions = {
            itemSelector: '.Group',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };
        return <div className="row"><Box
            border={true}
            width="12"
            theme="box-default"
            headerMarkup={<i className="fa fa-comments-o"></i>}>
            <Masonry options={masonryOptions}>
                {comments.map((comment) => <CommentsTableRow key={comment.id} comment={comment}/>)}
            </Masonry>
        </Box></div>;
    }
}

export default CommentsTable;