import React from "react";

class Add extends React.Component{
    state={
        id:0,
        inputTodo:"",
        todoListArr:[]
    }

    changeTodo=(event)=>{
        console.log(event.target.value)

        this.setState({inputTodo:event.target.value})
    }

    handleTodo=()=>{
        const ls=window.localStorage
        let {inputTodo,todoListArr} = this.state

        let getTodo=JSON.parse(ls.getItem("saveTodoListArr"))
        // console.log("콘솔",getTodo)

        getTodo.push({"id":todoListArr.length,"todo":inputTodo})

        console.log("추가",getTodo)
        
        // ls.setItem("todoListArr",getTodo)
    }

    clickSave = ()=>{
        console.log("click")
        const ls = window.localStorage;
        let {inputTodo,todoListArr} = this.state
        todoListArr.push({"id":todoListArr.length,"todo":inputTodo})
        // console.log(todoListArr)
        ls.setItem("todoListArr",JSON.stringify(todoListArr))
        this.handleTodo()
    }

    render(){
        return (
            <section id="addTodo">
                <h1>Add</h1>
                <form>
                    <input type="text" placeholder="Write to do!!" id="inputTodo" onChange={this.changeTodo} value={this.state.todo}/>
                </form>
                <button className="btns save" onClick={this.clickSave} >SAVE</button>
                <button className="btns cancel">CANCEL</button>
            </section>
        )
    }
}

export default Add; 