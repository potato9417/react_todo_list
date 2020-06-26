import React from "react";

class Todo extends React.Component{
    removeTodo=()=>{
        console.log("click")
    }
    render(){
        const {id, todo} = this.props;
        return(
            <div id="todoList">
                <p className={id}>{todo}</p>
                <button className="btns delete" onClick={this.removeTodo}>❌</button>
            </div>
        )
    }
}

export default Todo;