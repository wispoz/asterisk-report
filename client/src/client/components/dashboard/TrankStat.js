import React from 'react';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';

class TrankStat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Box
            border={true}
            width="12"
            title="Сводная статистика по очереди"
            theme="box-default"></Box>;
    }
}

export default TrankStat;