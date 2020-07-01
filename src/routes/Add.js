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

    clickSave = ()=>{
        console.log("click")
        const ls = window.localStorage;
        const getLsTodo = JSON.parse(ls.todoListArr)

        let {inputTodo,todoListArr} = this.state

        if(getLsTodo.length!==0){
            getLsTodo.push({"id":todoListArr.length,"todo":inputTodo})
            console.log(getLsTodo)
            // ls.setItem("todoListArr",JSON.stringify(getLsTodo))
        }
        else {
            ls.setItem("todoListArr",{"id":todoListArr.length,"todo":inputTodo})
        }

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