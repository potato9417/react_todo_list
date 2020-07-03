import React from "react";
import { AiOutlineClose } from "react-icons/ai";

class Todo extends React.Component{
    state={
        getTodoList:[]
    }
    removeTodo=()=>{
        console.log("click")
    }
    componentDidMount(){
        const ls = window.localStorage
        const {getTodoList} =this.state
        let getTodo = JSON.parse(ls.getItem("todoList_ls"))
        this.setState({getTodoList:getTodoList.push(getTodo)})
        console.log("hihihihi",getTodoList[0])
    }
    render(){
        const {getTodoList}=this.state

        return(
            <div>
                <div>
                    <p></p>
                    <button className="btns delete" onClick={this.removeTodo}><AiOutlineClose /></button>
                </div>
            </div>
            
        )
    }
}

export default Todo;