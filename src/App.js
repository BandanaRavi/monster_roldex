// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import { div } from 'prelude-ls';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor(){//help in initializing the data
    super();//will call the constructor in component
    this.state= {
      string: 'Monster',
      monsters: [
      ],
      search_field: '',

    }
  }
  handleChange = (e) =>{
    this.setState({search_field:e.target.value});
  }
  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => this.setState({monsters:data}));}
  render(){
    const {monsters, search_field} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search_field.toLowerCase()));
    return(
      <div className='App'>
      <h1>{this.state.string}</h1>
      <button onClick = {() => this.setState({string: 'World'})}>Click M</button>
      <br />

      <SearchBox placeholder = 'Search monster' 
      handleChange = {this.handleChange} />
      <CardList monsters = {filteredMonsters} />
      
      </div>
    )
  }
}

export default App;
