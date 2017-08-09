import React from 'react';
import UsersTable from '../components/users/UsersTable';
import Layout from './Layout';

class Users extends React.Component {
    render() {
        return <Layout>
            <section className="content">
                <UsersTable/>
            </section>
        </Layout>;
    }

}

export default Users;