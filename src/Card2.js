import React from 'react';
import {Card, Image, Icon, Button, Segment } from 'semantic-ui-react';
import elliot from './image/elliot.jpg';
class Card1 extends React.Component{

    render(){
        return(
            <Segment style={{overflow: 'auto', maxHeight: 600, width:300 }}>
                <Card>
                    <Image src={elliot} />
                    <Card.Content>
                        <Card.Header>Yi's Concert</Card.Header>
                        <Card.Meta>
                        <span className='date'>Sunday, May 5, 2019 2:20 AM</span>
                        </Card.Meta>
                        <Card.Description>
                            Can't fall in sleep? come to Yi's concert!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='location arrow' />
                        Location: 11111 111 AVE, Edmonton
                    </Card.Content>
                    <Card.Content extra>
                        <Button size="tiny" content='Invite your lover!' icon='calendar alternate outline'/>
                    </Card.Content>
                </Card>
            </Segment>
            
        );
    }
}

export default Card1;