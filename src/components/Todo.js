import React from "react";
import { AiOutlineClose } from "react-icons/ai";

class Todo extends React.Component{
    removeTodo=(event)=>{
        console.log(event.target.className)
    }
    render(){
        const {id, todo} = this.props;
        return(
            <div id="todoList" className={id} onClick={this.removeTodo}>
                <p >{todo}</p>
                <button className="btns delete" onClick={this.removeTodo}><AiOutlineClose /></button>
            </div>
        )
    }
}

export default Todo; 
