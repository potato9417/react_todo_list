import React from "react"

class Add extends React.Component{
    state={
        inputTxt:"",
        id:1,
        todoListArr:[]
    }
    
    setInput=(event)=>{
        // console.log(event.target.value)
        this.setState({inputTxt:event.target.value})
    }

    uploadTodo=()=>{
        const {inputTxt,id,todoListArr} =this.state
        const todoInput = document.getElementById("addTodoInput")
        const todoList = {id,inputTxt}
        const ls = window.localStorage

        if(inputTxt===""){
            window.alert("Write Todo!!")
            todoInput.focus()
            return
        }
        todoListArr.push(todoList)
        this.setState({id:id+1,todoListArr:todoListArr})
        ls.setItem("todoList_ls",JSON.stringify(todoListArr))
            
        // console.log(inputTxt,id)
        
        todoInput.focus()

        this.setState({inputTxt:""})
    }

    render(){
        return(
            <section id="addSection">
                <h3>Add todo</h3>
                <form>
                    <input type="text" id="addTodoInput" value={this.state.inputTxt} onChange={this.setInput}></input>
                </form>
                <button className="btns addTodo" onClick={this.uploadTodo}>ADD!</button>
            </section>
        )
    }
}

export default Add