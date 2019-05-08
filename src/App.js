import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Transition, Visibility, Button, Grid, Icon, Image, Card, Accordion } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom';
import Card1 from './Card1';
import Chat from'./Chat';
import { ParallaxProvider } from 'react-scroll-parallax';

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
  componentDidMount() {
    this.elem1 = document.getElementById("h1");
    this.elem2 = document.getElementById("h2");
    this.elem3 = document.getElementById("h3");
  }
  handleUpdate = (e, { calculations }) => {
    this.setState({ calculations }); 
    // console.log(calculations);
    // var elem1 = document.getElementById("h1");
    // var elem2 = document.getElementById("h2");
    if (this.state.calculations.width-this.state.calculations.pixelsPassed*2.4>-1 && this.elem1.hidden === false){
      this.elem1.style.left = (this.state.calculations.pixelsPassed*1.2).toString() + "px"; 
      this.elem1.style.color = "#63b6ff";
      this.elem2.style.left = (this.state.calculations.width-this.state.calculations.pixelsPassed*1.2).toString() + "px";
      this.elem2.style.color = "#ff6b83";

    } else{
      this.elem1.hidden = true;
      this.elem2.hidden = true;
      // this.elem3.style.position = "absolute";
      this.setState({ heartVisible: true });
    }
    

    // console.log(this.state.calculations.pixelsPassed)
  }
  showMenuBar = ()=>{
    this.setState({visible: true})
  }
  hideMenuBar = ()=>{
    this.setState({visible: false, activeItem: "home"})
  }
  changeMenu = (name)=>{
    this.setState({ activeItem: name });
    var color;
    if (name === "Private" || name === "Love Data"){
      color = "#ffc0cb"
    } else if (name === "Overview" || name === "Public"){
      color = "#a0d2ff"
    } else if (name === "About This Demo"){
      color = "#282c34"
    }
    var elems = document.getElementsByClassName("menu-bar");
    for (let i = 0; i<elems.length; ++i){
      elems[i].style.backgroundColor = color;
    }
  }
  render(){
    const { activeItem } = this.state;
    const { calculations } = this.state;
    return (
      <div className="App">
        <Segment inverted style={{margin:0, background: "#a0d2ff", padding: 0}} className="top-menu-bar">
          <Menu inverted pointing secondary style={{border:"black", background: "#a0d2ff", padding: 2} } className="menu-bar"
            size={this.state.visible ? "small": "huge"} fixed={this.state.visible ? 'top' : null}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} style={{background: "#a0d2ff"}} color={"pink"} className="menu-bar"/>
            <Menu.Item
              name='Overview'
              active={activeItem === 'Overview'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
              className="menu-bar"
            />
            <Menu.Item
              name='Private'
              active={activeItem === 'Private'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
              className="menu-bar"
            />
            <Menu.Item
              name='Public'
              active={activeItem === 'Public'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
              className="menu-bar"
            />
            <Menu.Item
              name='Love Data'
              active={activeItem === 'Love Data'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
              className="menu-bar"
            />
            <Menu.Item
              name='About This Demo'
              active={activeItem === 'About This Demo'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff"}}
              color={"pink"}
              className="menu-bar"
            />
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              style={{background: "#a0d2ff", border:"none"}}
              color={"pink"}
              position='right'
              className="menu-bar"
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
        {/* Home portion */}
        <Visibility context = {this.contextRef} onOnScreen={this.hideMenuBar} onBottomPassed = {this.showMenuBar} once={false} onUpdate={this.handleUpdate}>
          <div className="home">
          </div>
          <div className="home-content">
            <Zoom><p>This is a love space between you and your lover</p></Zoom>
            {/* <h1>{calculations.pixelsPassed.toFixed()}px</h1> */}
          </div>
          <div className="home-hearts-blue" id="h1">
            <Zoom><Icon name="heart outline"/></Zoom>
          </div>
          <div className="home-hearts-red" id="h2">
            <Zoom><Icon name="heart outline"/></Zoom>
          </div>
          <div className="home-hearts" id="h3">
            <Transition animation={'tada'} duration={1000} visible={this.state.heartVisible}><Icon name="heart"/>
            </Transition>
            
          </div>
        </Visibility>
        {/* <Visibility context = {this.contextRef} onBottomPassed = {this.showMenuBar} once={false}></Visibility> */}
        <Visibility context = {this.contextRef} onTopPassed = {() => this.changeMenu("Overview")} onBottomVisible = {() => this.changeMenu("Overview")} once={false}>
          {/* Overview */}
          <div className="overview">
          <Grid>
            <Grid.Column width={5}>
                <Card1/>
            </Grid.Column>
            <Grid.Column width={11}>
              <div className="overview-content">
                <Zoom><p>Want to have an online home of you and your lover? You've found the right place! Start sharing everything with your lover! </p></Zoom>
              </div>
            </Grid.Column>
          </Grid>
          </div>
        </Visibility>
        
        <Visibility context = {this.contextRef} onTopPassed = {() => this.changeMenu("Private")} onBottomVisible = {() => this.changeMenu("Private")} once={false}>
          {/* Private */}
          <div className="private">
            <Grid>
              <Grid.Column width={11}>
                <div className="overview-content">
                  <Zoom><p>Just you and your lover? Make a post only available to your lover or use love messenger. Love and private. </p></Zoom>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                <Chat/>
              </Grid.Column>
            </Grid>
          </div>
        </Visibility>
        
        <Visibility context = {this.contextRef} onTopPassed = {() => this.changeMenu("Public")} onBottomVisible = {() => this.changeMenu("Public")} once={false}>
          {/* Public */}
          <div className="public">
            <Grid>
              <Grid.Column width={5}>
                  <Chat/>
              </Grid.Column>
              <Grid.Column width={11}>
                <div className="overview-content">
                  <Zoom><p>Want just you and your lover? Make a post only available to your lover or use love messanger. Love and private. </p></Zoom>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Visibility>

        <Visibility context = {this.contextRef} onTopPassed = {() => this.changeMenu("Love Data")} onBottomVisible = {() => this.changeMenu("Love Data")} once={false}>
          {/* Private */}
          <div className="lovedata">
            <Grid>
              <Grid.Column width={5}>
                  <Card1/>
              </Grid.Column>
              <Grid.Column width={11}>
                <div className="overview-content">
                  <Zoom><p>Want to have an online home of you and your lover? You've found the right place! Start sharing everything with your lover! </p></Zoom>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Visibility>

        <Visibility context = {this.contextRef} onTopPassed = {() => this.changeMenu("About This Demo")} onBottomVisible = {() => this.changeMenu("About This Demo")} once={false}>
          {/* Private */}
          <div className="about">
            <Grid>
              <Grid.Column width={5}>
                  <Card1/>
              </Grid.Column>
              <Grid.Column width={11}>
                <div className="overview-content">
                  <Zoom><p>Want to have an online home of you and your lover? You've found the right place! Start sharing everything with your lover! </p></Zoom>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Visibility>
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
