import React, { ChangeEvent } from "react";


type State = {
    name: string
    lista: string
}

class Formulario extends React.Component<object, State> {
    state = {
        name: "",
        lista: ''
    
    }
     abc: string[] = []
    addTask = () => {

        this.abc.push(this.state.name)

    }
  


    render() {
        return (
        <div >
            <label htmlFor="task">Digite a tarefa</label>
            <input type="text" id="task" name="task" value={this.state.name} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({name: event.target.value})} />
            <button onClick={this.addTask}>Mostrar valor</button>
            <div id="lista">{this.abc.map(function(value: string, key): any{
            return (<div key={key}>{value}</div>)
        })}</div>
                    
      </div>
        )
    }
}



export default Formulario