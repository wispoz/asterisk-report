import React, {Component} from 'react';
import CommentsGrid from '../components/comments/CommentsGrid';
import CommentForm from '../components/comments/CommentForm';
import Layout from './Layout';

class Comments extends React.Component {
    render() {
        return <Layout>
            <section className="content">
                <CommentForm/>
                <CommentsGrid/>
            </section>
        </Layout>;
    }

}

export default Comments;