import React from 'react';
import PropTypes from 'prop-types';

const GridMenu = React.createClass({
    onRowDelete(e, data) {
        if (typeof(this.props.onRowDelete) === 'function') {
            this.props.onRowDelete(e, data);
        }
    },
    render() {
        return (
            <Menu.ContextMenu>
                <Menu.MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick={this.onRowDelete}>
                    Delete Row
                </Menu.MenuItem>
            </Menu.ContextMenu>
        );
    }
});
GridMenu.propTypes = {
    onRowDelete: React.PropTypes.func.isRequired,
    rowIdx: React.PropTypes.string.isRequired,
    idx: React.PropTypes.string.isRequired
};
export default GridMenu;