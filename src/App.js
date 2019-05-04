import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Transition } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom';

function Index() {
  return (
    <div>
      <h2>Home</h2>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

function About() {
  console.log("this is about");
  return <h2>About</h2>;
}

function Users() {
  console.log("this is users");
  return <h2>Users</h2>;
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { activeItem: 'home', visible: false };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  listenToScroll = ()=>{
    if (document.body.scrollTop > 660) {
      this.setState({visible: true})
    }
    else{
      this.setState({visible: false})

    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  render(){
    const { activeItem } = this.state;
    return (
      <div className="App">
        <Segment inverted style={{margin:0, background: "#a0d2ff", }} className="top-menu-bar">
          <Menu inverted pointing secondary style={{border:"#a0d2ff"}}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} style={{background: "#a0d2ff"}} color={"pink"}/>
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
            />
          </Menu>
        </Segment>
        <header className="App-header">
          
          <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home1</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router>
        </header>
        <Transition visible={this.state.visible} animation='scale' duration={500}>
          <Segment inverted id = 'menubar'>
            <Menu color={"pink"} widths={3}>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Segment>
        </Transition>
        
      </div>
    );
  }
  
}

export default App;
