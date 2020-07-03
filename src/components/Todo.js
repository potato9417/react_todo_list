import React from "react";
import { AiOutlineClose } from "react-icons/ai";

class Todo extends React.Component{
    removeTodo=()=>{
        console.log(window)
    }
    render(){
        const {id, todo} = this.props;
        return(
            <div id="todoList" className={id}>
                <p >{todo}</p>
                <button className="btns delete" onClick={this.removeTodo}><AiOutlineClose /></button>
            </div>
        )
    }
}

export default Todo; 
