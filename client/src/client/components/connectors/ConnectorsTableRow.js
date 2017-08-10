import React from 'react';
import ConnectorsActions from '../../actions/ConnectorsActions';
class ConnectorsTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete() {
        const {connector} = this.props;
        ConnectorsActions.deleteConnector(connector.id);
    }
    render() {
        const {connector} = this.props;
        return <div className="Connector col-md-4">
            <span className='Connector__del-icon' onClick={this.onDelete.bind(this)}> × </span>
            {connector.login}</div>;
    }
}
export default ConnectorsTableRow;