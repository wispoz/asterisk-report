import React from 'react';
import ConnectorsTable from '../components/connectors/ConnectorsTable';

import Layout from './Layout';

class Connectors extends React.Component {

    render() {
        const {connectors} = this.props;
        return <Layout>
            <section className="content">
                <ConnectorsTable connectors={connectors}/>
            </section>
        </Layout>;
    }

}

export default Connectors;