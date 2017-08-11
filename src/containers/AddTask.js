import React from 'react';
import { connect } from "react-redux";
import { addTask } from '../actions';
let input;
class AddTaskContainer extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addTask(input.value))
        input.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={node => input = node} />
                </form>
            </div>
        )
    }
}
AddTaskContainer = connect()(AddTaskContainer);
export default AddTaskContainer;