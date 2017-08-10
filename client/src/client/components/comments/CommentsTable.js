import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import CommentsTableRow from "./CommentsTableRow";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});
class CommentsTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {comments} = this.props;
        const masonryOptions = {
            itemSelector: '.Group',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };
        return <div className="row"><Box
            border={true}
            width="12"
            theme="box-default"
            headerMarkup={<i className="fa fa-comments-o"></i>}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div >
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comments.map((comment) => <CommentsTableRow key={comment.id} comment={comment}/>)}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>


        </Box></div>;
    }
}

export default CommentsTable;