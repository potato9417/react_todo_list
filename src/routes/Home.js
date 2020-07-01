import React from "react";
import Todo from "../components/Todo";

class Home extends React.Component{
    state={
        inputName:"",
        isName:false,
        todos:[]
    }

    changeName=(event)=>{
        console.log(event);
        this.setState({inputName:event.target.value})
    }
    
    clickAddName =()=>{
        let {isName} = this.state
        const ls = window.localStorage
        const {inputName} = this.state;
        console.log(isName ,"dlrj")

        if(inputName!==""){
            this.setState({isName:true})
            
            ls.setItem("name",inputName)
            ls.setItem("isName",true)

            this.setState({name:ls.name,isName:ls.isName})
            console.log(ls.isName)
        }
    }

    componentDidMount(){
        const ls = window.localStorage
        this.setState({name:ls.name,isName:ls.isName})
        
    }

    render(){
        let {isName,todos} = this.state
        const ls = window.localStorage
        // const lsTodo = JSON.parse(ls.todoListArr)
        // console.log(lsTodo)

        if(isName===false || isName===undefined){
            console.log("없다")
            return (
                <section id="preMainPage">
                    <h1>What's your name?</h1>
                    <form>
                        <input type="text" placeholder="Write your name!" value={this.state.inputName} onChange={this.changeName} />
                    </form>
                    <button className="btns addName" onClick={this.clickAddName}>OK!</button>
                </section>
            )
        }
        else {
            return (
                <section id="mainPage">
                    <h1>{this.state.name}'s To Do!</h1>
                    <div className="todoList">
                        {todos.map(todoItem=>{
                            return <Todo key={todoItem.id} id={todoItem.id} todo={todoItem.todo}/>
                        })}
                    </div>
                </section>
            )
        }
    }   
}

export default Home