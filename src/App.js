import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Transition, Visibility, Button, Grid, Icon } from 'semantic-ui-react'
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
    this.state = { activeItem: 'home', visible: false, heartVisible: false,
      calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    }, };
    this.contextRef = React.createRef();
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleUpdate = (e, { calculations }) => {
    this.setState({ calculations }); 
    var elem1 = document.getElementById("overview-hearts");
    var elem2 = document.getElementById("overview-hearts2");
    if (this.state.calculations.width-this.state.calculations.pixelsPassed*2.4>-1 && elem1.hidden === false){
      elem1.style.left = (this.state.calculations.pixelsPassed*1.2).toString() + "px"; 
      elem1.style.color = "#63b6ff";
      elem2.style.left = (this.state.calculations.width-this.state.calculations.pixelsPassed*1.2).toString() + "px";
      elem2.style.color = "#ff6b83";

    } else{
      elem1.hidden = true;
      elem2.hidden = true;
      this.setState({ heartVisible: true });
    }
    

    console.log(this.state.calculations.pixelsPassed)
  }
  showMenuBar = ()=>{
    this.setState({visible: true})
  }
  hideMenuBar = ()=>{
    this.setState({visible: false})
  }

  render(){
    const { activeItem } = this.state;
    const { calculations } = this.state;
    return (
      <div className="App">
        <Segment inverted style={{margin:0, background: "#a0d2ff", padding: 0}} className="top-menu-bar">
          <Menu inverted pointing secondary style={{border:"black", background: "#a0d2ff", padding: 2}}  
            size={this.state.visible ? "small": "huge"} fixed={this.state.visible ? 'top' : null}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} style={{background: "#a0d2ff"}} color={"pink"}/>
            <Menu.Item
              name='Overview'
              active={activeItem === 'Overview'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
            />
            <Menu.Item
              name='Private'
              active={activeItem === 'Private'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
            />
            <Menu.Item
              name='Public'
              active={activeItem === 'Public'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
            />
            <Menu.Item
              name='Love Data'
              active={activeItem === 'Love Data'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
            />
            <Menu.Item
              name='About This Demo'
              active={activeItem === 'About This Demo'}
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
              <Button as='a' inverted={!this.state.visible} color={this.state.visible ? "pink": null}>
                Log in
              </Button>
              <Button as='a' inverted={!this.state.visible} primary={this.state.visible} style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
        </Segment>
        
        <Visibility context = {this.contextRef} onOnScreen={this.hideMenuBar} once={false} onUpdate={this.handleUpdate}>
          <div className="overview">
          </div>
          <div className="overview-content">
            <p>This is a love space between you and your lover</p>
            {/* <h1>{calculations.pixelsPassed.toFixed()}px</h1> */}
          </div>
          <div className="overview-hearts" id="overview-hearts">
            <Icon name="heart outline"/>
          </div>
          <div className="overview-hearts" id="overview-hearts2">
            <Icon name="heart outline"/>
          </div>
          <div className="overview-hearts" id="overview-hearts3">
            <Transition animation={'tada'} duration={500} visible={this.state.heartVisible}><Icon name="heart"/>
            </Transition>
            
          </div>
        </Visibility>
        
        <Visibility context = {this.contextRef} onBottomPassed = {this.showMenuBar} once={false}></Visibility>
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
        <h1>test</h1>

        
      </div>
    );
  }
  
}

export default App;
