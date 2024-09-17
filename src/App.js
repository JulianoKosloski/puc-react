import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      titulo: "Entrar",
      textoLabel: "",
      username: "",
      password: ""
    }

    this.validar = this.validar.bind(this);
    this.alterarSenha = this.alterarSenha.bind(this);
    this.alterarUsername = this.alterarUsername.bind(this);
  }

  validar(){
    let valido = false;
    let state = this.state;

    if (state.username === "juliano.koslos@gmail.com" && state.password === "123456") {
      valido = true;
    }

    if (valido) {
      state.textoLabel = "Acessado com sucesso!"
    } else {
      state.textoLabel = "Usuário ou senha incorretos!"
    } 

    this.setState(state);
  }

  alterarUsername(event) {
    let state = this.state;
    state.username = event.target.value;
    this.setState(state);
  }

  alterarSenha(event) {
    let state = this.state;
    state.password = event.target.value;
    this.setState(state);
  }

  render() {
    return(
      <div>
        <Titulo texto={this.state.titulo}></Titulo>
        <input type="text" size="20" name="username" onChange={(e) => this.alterarUsername(e)}></input>
        <br></br>
        <input type="password" size="20" name="password" onChange={(e) => this.alterarSenha(e)}></input>
        <br></br>
        <button onClick={this.validar}>Acessar</button>
        <br></br>
        <LabelLogin texto={this.state.textoLabel}></LabelLogin>
      </div>
    );
  } 

}

function Titulo(props) {
  return (
    <h1>{props.texto}</h1>
  );
}

function LabelLogin(props) {
  return (
    <label>{props.texto}</label>
  );
}

export default App;
