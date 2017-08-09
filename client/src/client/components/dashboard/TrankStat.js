import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';

class TrankStat extends React.Component {
    render() {
        return <Box
            border={true}
            width="12"
            title="Сводная статистика по очереди"
            theme="box-default"></Box>;
    }
}

export default TrankStat;