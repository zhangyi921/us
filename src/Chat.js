import React from 'react';
import {Card, Accordion, Image, Icon, Label, Button, Comment, Form, Header, Segment, List } from 'semantic-ui-react';
import icon_img from './image/rachel.png';
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
            <Segment style={{overflow: 'auto', maxHeight: 600 }}>
                <Card centered={false}>
                    <Card.Content extra>
                    <List.Item>
                        <Image avatar src={icon_img} />
                        <List.Content>
                            <List.Header as='a'>Rachel</List.Header>
                        </List.Content>
                    </List.Item>
                    </Card.Content>
                    <Card.Content>
                        
                        <Card.Meta>
                        <span className='date'>Sunday, May 5, 2019</span>
                        </Card.Meta>
                        <Card.Description>
                            Happy to spend a day with her!
                            I am looking froward to see her!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                        Public likes: 22 
                        <Icon name='thumbs up outline' />
                        </a>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                        Likes from your lover: 
                        <Icon name='heart' style={{color:"#ff6b83"}}/>
                        </a>
                    </Card.Content>
                    <Card.Content extra>
                        <Accordion>
                            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Comments: 
                            <Label>
                                <Icon name='mail' /> 4
                            </Label>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <Comment.Group>
                                    <Header as='h3' dividing></Header>

                                    <Comment>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Matt</Comment.Author>
                                        <Comment.Metadata>
                                        <div>Today at 5:42PM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Nice to hear that!</Comment.Text>
                                        <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                    </Comment>

                                    <Comment>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                        <Comment.Metadata>
                                        <div>Yesterday at 12:30AM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                        <p>Congratulations!</p>
                                        </Comment.Text>
                                        <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                    <Comment.Group>
                                        <Comment>
                                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                        <Comment.Content>
                                            <Comment.Author as='a'>Matthew</Comment.Author>
                                            <Comment.Metadata>
                                            <div>Just now</div>
                                            </Comment.Metadata>
                                            <Comment.Text>Thank you! :)</Comment.Text>
                                            <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                        </Comment>
                                    </Comment.Group>
                                    </Comment>

                                    <Comment>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                        <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Best wish to you!</Comment.Text>
                                        <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                    </Comment>

                                    <Form reply>
                                    <Form.TextArea />
                                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                                    </Form>
                                </Comment.Group>
                            </Accordion.Content>

                        </Accordion>
                    </Card.Content>
                </Card>
            </Segment>
            
        );
    }
}

export default Chat;