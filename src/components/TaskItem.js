import React from 'react';

class TaskItem extends React.Component {

    render() {
        const { task } = this.props;
        return <li>{task.name}</li>;
    }

}
export default TaskItem;