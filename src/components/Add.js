import React from "react"

class Add extends React.Component{
    state={
        inputTxt:""
    }
    
    setInput=(event)=>{
        console.log(event.target.value)
        this.setState({inputTxt:event.target.value})
    }

    render(){
        return(
            <section id="addSection">
                <h3>Add todo</h3>
                <form>
                    <input type="text" id="addTodoInput" value={this.state.inputTxt} onChange={this.setInput}></input>
                </form>
                <button className="btns addTodo">ADD!</button>
            </section>
        )
    }
}

export default Add