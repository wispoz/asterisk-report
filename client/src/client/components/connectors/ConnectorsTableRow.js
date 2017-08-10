import React from 'react';
import ConnectorsActions from '../../actions/ConnectorsActions';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

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
        return <TableRow>
            <TableRowColumn>{connector.id}</TableRowColumn>
            <TableRowColumn>{connector.name}</TableRowColumn>
            <TableRowColumn >
                <IconButton tooltip="Удалить" onTouchTap={this.onDelete.bind(this)}>
                    <ActionDelete/>
                </IconButton>
            </TableRowColumn>
        </TableRow>;
    }
}

export default ConnectorsTableRow;