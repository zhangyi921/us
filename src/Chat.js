import React from 'react';
import {Input, Image, Icon, Label, Button, Comment, Form, Header, Segment, List } from 'semantic-ui-react';
import icon_img from './image/rachel.png';
import matt_img from './image/matt.jpg';
import kiss from './image/kiss-wink-heart-regular.svg'
class Chat extends React.Component{
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
    render(){
        const { activeIndex } = this.state;

        return(
            <Segment style={{overflow: 'auto', maxHeight: 610, width: 400 }}>
                <Comment.Group>
                    <List.Item>
                        <Image avatar src={icon_img} />
                        <List.Content>
                            <List.Header as='a'>Rachel</List.Header>
                        </List.Content>
                    </List.Item>
                    <Header as='h3' dividing>
                    </Header>

                    <Comment className="left-align">
                    <Comment.Avatar src={matt_img} />
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>Miss U!</Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                    </Comment>

                    <Comment className="right-align">
                    <Comment.Avatar src={icon_img} />
                    <Comment.Content>
                        <Comment.Author as='a'>Rachel</Comment.Author>
                        <Comment.Metadata>
                        <div>Today at 5:43PM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                        <p>Miss U 2!</p>
                        </Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                    
                    </Comment>
                    <Comment className="left-align">
                    <Comment.Avatar src={matt_img} />
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                        <div>Today at 5:44PM</div>
                        </Comment.Metadata>
                        <Comment.Text>What do we do tonight?</Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                    </Comment>

                    <Comment className="right-align">
                    <Comment.Avatar src={icon_img} />
                    <Comment.Content>
                        <Comment.Author as='a'>Rachel</Comment.Author>
                        <Comment.Metadata>
                        <div>Today at 5:45PM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <Segment>
                                Rachel sent you a
                                <Icon color="pink" name="heartbeat"/>
                            </Segment>
                        
                        </Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                    </Comment>

                    <Comment className="left-align">
                    <Comment.Avatar src={matt_img} />
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                        <div>Today at 5:46PM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <Segment>
                                You invite Rachel a voice chat
                                <Icon color="pink" name="phone"/>
                            </Segment>
                        </Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                    </Comment>

                    <Segment>
                        <Button size="mini" content='Heartbeat' icon='heartbeat'/>
                        <Button size="mini" content='Poke' icon='hand point up outline'/>     
                        <Button size="mini" content='Call' icon='phone'/>   
                        <Button size="mini" content='Game' icon='chess'/>        
                    </Segment>
                    <Form reply>
                    <input placeholder='First Name' />
                    <Button content='Send' labelPosition='right' icon='send' basic color='blue' style={{marginTop:15}}/>
                    </Form>
                </Comment.Group>
                
                
            </Segment>
            
        );
    }
}

export default Chat;