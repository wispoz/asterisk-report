import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import Masonry from 'react-masonry-component';
import GroupsTableRow from "./GroupsTableRow";

class GroupsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const masonryOptions = {
            itemSelector: '.Group',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };

        const {groups} = this.props;
        return <div className="row"><Box
            border={true}
            width="12"
            theme="box-default"
            headerMarkup={<i className="fa fa-user"></i>}>
            <Masonry options={masonryOptions}>
                {groups.map((group) => <GroupsTableRow key={group.id} group={group}/>)}
            </Masonry>
        </Box></div>;
    }
}

export default GroupsTable;