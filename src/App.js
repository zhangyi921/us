import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Transition, Visibility, Button } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom';

// this is my couple app demo
// packages used: sematic ui, react reaveal
// npm run predeploy
// npm run deploy
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
    this.contextRef = React.createRef();
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // listenToScroll = ()=>{
  //   if (document.body.scrollTop > 660) {
  //     this.setState({visible: true})
  //   }
  //   else{
  //     this.setState({visible: false})

  //   }
  // }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenToScroll)
  // }
  
  showMenuBar = ()=>{
    this.setState({visible: true})
  }
  hideMenuBar = ()=>{
    this.setState({visible: false})
  }

  render(){
    const { activeItem } = this.state;
    return (
      <div className="App">
        <Segment inverted style={{margin:0, background: "#a0d2ff", padding: 0}} className="top-menu-bar">
          <Menu inverted pointing secondary style={{border:"black", background: "#a0d2ff", padding: 2}}  
            size={this.state.visible ? "small": "huge"} fixed={this.state.visible ? 'top' : null}>
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
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff", border:"none"}}
              color={"pink"}
              position='right'
            >
              <Button as='a' inverted={!this.state.visible} color={this.state.visible ? "pink": "white"}>
                Log in
              </Button>
              <Button as='a' inverted={!this.state.visible} primary={this.state.visible} style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
        </Segment>
        
        <Visibility context = {this.contextRef} onOnScreen={this.hideMenuBar} once={false}></Visibility>
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
        <Visibility context = {this.contextRef} onBottomPassed = {this.showMenuBar} once={false}>

        </Visibility>
        </header>
        <h1>test</h1>
        {/* <Transition visible={this.state.visible} animation='scale' duration={500}>
          <Segment inverted id = 'menubar'>
            <Menu color={"pink"} widths={4}  size='large'>
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
              <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
            </Menu>
          </Segment>
        </Transition> */}
        
      </div>
    );
  }
  
}

export default App;
