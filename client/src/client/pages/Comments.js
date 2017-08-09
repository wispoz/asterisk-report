import React from 'react';
import CommentsTable from '../components/comments/CommentsTable';
import CommentForm from '../components/comments/CommentForm';
import Layout from './Layout';

class Comments extends React.Component {

    render() {
        const {comments} = this.props;
        return <Layout>
            <section className="content">
                <CommentForm/>
                <CommentsTable comments={comments}/>
            </section>
        </Layout>;
    }

}

export default Comments;