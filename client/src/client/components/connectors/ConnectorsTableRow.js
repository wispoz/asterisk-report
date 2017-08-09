import React from 'react';
import CommentsActions from '../../actions/CommentsActions';
class ConnectorsTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete() {
        const {connector} = this.props;
        CommentsActions.deleteComment(connector.id);
    }
    render() {
        const {connector} = this.props;
        return <div className="Connector col-md-4">
            <span className='Connector__del-icon' onClick={this.onDelete.bind(this)}> × </span>
            {connector.name}</div>;
    }
}
export default ConnectorsTableRow;