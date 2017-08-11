import React from 'react';
import TaskItem from '../components/TaskItem';
import { connect } from 'react-redux';

class TaskListContainer extends React.Component {
    
    render() {
        const { tasks } = this.props;
        return (
            <ul>
                {tasks.map((task) => {
                    return (
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                        /> 
                    );
                    })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state
});

export default TaskListContainer = connect(mapStateToProps)(TaskListContainer)