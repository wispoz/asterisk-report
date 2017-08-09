import React from 'react';
import Layout from './Layout';
import GroupsForm from '../components/groups/GroupsForm';
import GroupsTable from '../components/groups/GroupsTable';

class Groups extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {groups} = this.props;
        return <Layout>
            <section className="content">
                <GroupsForm/>
                <GroupsTable groups={groups}/>
            </section>
        </Layout>;
    }
}

export default Groups;