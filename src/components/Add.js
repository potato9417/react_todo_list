import React from "react"

const Add=()=>{
    return(
        <section id="addSection">
            <h3>Add todo</h3>
            <form>
                <input type="text" id="addTodoInput"></input>
            </form>
            <button className="btns addTodo">ADD!</button>
        </section>
    )
}

export default Add