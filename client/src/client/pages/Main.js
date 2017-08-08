import React, {Component} from 'react';
import {HeaderBar} from 'adminlte-reactjs';
import Layout from '../pages/Layout';
import Filter from '../components/dashboard/Filter';

class Main extends React.Component {
    render() {
        return <Layout>
            <section className="content">
                <Filter/>
            </section>
        </Layout>;
    }
}

export default Main;