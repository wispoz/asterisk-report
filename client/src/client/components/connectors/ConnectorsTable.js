import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import Masonry from 'react-masonry-component';
import ConnectorsTableRow from "./ConnectorsTableRow";
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Toggle, TextField, Dialog, RaisedButton, Divider, Snackbar, LinearProgress} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import ConnectorsDialog from './ConnectorsDialog';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

injectTapEventPlugin();
const styles = {
    container: {
        textAlign: 'center'
    },
    buttons: {
        margin: 12
    }
};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class ConnectorsTable extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const {connectors} = this.props;
        const masonryOptions = {
            itemSelector: '.Connector',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };
        console.log();
        return <div className="row">

            <Box
                border={true}
                width="12"
                theme="box-default"
                headerMarkup={<i className="fa fa-comments-o"></i>}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                    <ConnectorsDialog muiTheme={muiTheme}/>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {connectors.map((connector) => <ConnectorsTableRow key={connector.id} connector={connector}/>)}
                        </TableBody>
                    </Table>
                    </div>
                </MuiThemeProvider>
            </Box></div>;
    }
}

export default ConnectorsTable;