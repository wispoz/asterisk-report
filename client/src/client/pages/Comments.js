import React from 'react';
import CommentsTable from '../components/comments/CommentsTable';
import CommentForm from '../components/comments/CommentForm';
import Layout from './Layout';

class Comments extends React.Component {
    render() {
        return <Layout>
            <section className="content">
                <CommentForm/>
                <CommentsTable/>
            </section>
        </Layout>;
    }

}

export default Comments;