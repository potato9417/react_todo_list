import React from "react"
import Todo from "../components/Todo"
import Add from "../components/Add"

const Home=()=>{
    return (
        <div className="container">
            <Add />
            <section id="listSection">
                <Todo />
            </section>
        </div>
    )
}

export default Home