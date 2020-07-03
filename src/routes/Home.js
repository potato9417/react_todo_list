import React from "react";
import Todo from "../components/Todo";
import Add from "../components/Add"

class Home extends React.Component{
    state={
        todos:[]
    }


    render(){
        let {todos} = this.state
        const ls = window.localStorage
        todos= JSON.parse(ls.getItem("todoListArr"))

        return (
            <section id="mainPage">
                <h1>Todo List!</h1>
                <Add />
                <div className="todoList">
                    {todos.map(todoItem=>{
                        return <Todo key={todoItem.id} id={todoItem.id} todo={todoItem.todo}/>
                    })}
                </div>
            </section>
        )
        
    }   
}

export default Home 