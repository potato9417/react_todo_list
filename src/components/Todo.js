import React from "react";

class Todo extends React.Component{
    removeTodo=()=>{
        console.log("click")
        
    }
    render(){
        const {id, todo} = this.props;
        return(
            <div className={id}>
                <p>{todo}</p>
                <button className="btns delete" onClick={this.removeTodo}>X</button>
            </div>
        )
    }
}

export default Todo;