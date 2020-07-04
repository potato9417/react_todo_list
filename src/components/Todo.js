import React from "react";
import { AiOutlineClose } from "react-icons/ai";

class Todo extends React.Component{
    removeTodo=(event)=>{
        console.log(event.target.id)
    }
    
    render(){
        const {id, todo} = this.props;
        return(
            <div id="todoList" className={id}>
                <p >{todo}</p>
                <button className="btns delete" id={id} onClick={this.removeTodo}><AiOutlineClose /></button>
            </div>
        )
    }
}

export default Todo; 
