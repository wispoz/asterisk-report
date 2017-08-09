import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import Masonry from 'react-masonry-component';
import ConnectorsTableRow from "./ConnectorsTableRow";
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles = {
    container: {
        textAlign: 'center'
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});
class ConnectorsTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    }
    render() {

        const {connectors} = this.props;
        const masonryOptions = {
            itemSelector: '.Connector',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };
        return <div className="row">

                <Box
            border={true}
            width="12"
            theme="box-default"
            headerMarkup={<i className="fa fa-comments-o"></i>}>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <div >
                            <Dialog
                                open={this.state.open}
                                title="Super Secret Password"
                                onRequestClose={this.handleRequestClose}
                            >
                                1-2-3-4-5
                            </Dialog>
                            <RaisedButton
                                label="Добавить"
                                secondary={true}
                                onTouchTap={this.handleTouchTap}
                            />
                        </div>
                    </MuiThemeProvider>

            <Masonry options={masonryOptions}>
                {connectors.map((connector) => <ConnectorsTableRow key={connector.id} connector={connector}/>)}
            </Masonry>
        </Box></div>;
    }
}

export default ConnectorsTable;