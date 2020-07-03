import React from "react";
import { AiOutlineClose } from "react-icons/ai";

class Todo extends React.Component{
    removeTodo=()=>{
        console.log("click")
    }
    render(){
        const {id, todo} = this.props;
        return(
            <div id="todoList">
                <p className={id}>{todo}</p>
                <button className="btns delete" onClick={this.removeTodo}><AiOutlineClose /></button>
            </div>
        )
    }
}

export default Todo; 
