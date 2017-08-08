import React, {Component} from 'react';
import UsersGrid from '../components/users/UsersGrid';
import Layout from './Layout';

class Users extends React.Component {
    render() {
        return <Layout>
            <section className="content">
                <UsersGrid/>
            </section>
        </Layout>;
    }

}

export default Users;