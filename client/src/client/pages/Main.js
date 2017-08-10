import React from 'react';
import Layout from '../pages/Layout';
import Filter from '../components/dashboard/Filter';
import TrankStat from '../components/dashboard/TrankStat';
import {RadialChart} from 'react-vis';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {groups,connectors} = this.props;
        return <Layout>
            <section className="content">
                <Filter groups={groups} connectors={connectors}/>
                <div className="row">
                    <div className="col-lg-6">
                        <TrankStat/>
                    </div>
                    <div className="col-lg-6">

                        <RadialChart
                            className={'donut-chart-example'}
                            innerRadius={100}
                            radius={140}
                            data={[
                                {angle: 2, className: 'custom-class'},
                                {angle: 6},
                                {angle: 2},
                                {angle: 3},
                                {angle: 1}
                            ]}
                            width={300}
                            height={300}>
                        </RadialChart>
                    </div>
                </div>

            </section>
        </Layout>;
    }
}

export default Main;