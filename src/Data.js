import React from 'react';
import {Table, Icon, Header, Segment, Button } from 'semantic-ui-react';
class Data extends React.Component{

    render(){
        return(
            <Segment style={{overflow: 'auto', maxHeight: 600, width:400 }}>
                <Table basic='very' celled collapsing>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Info</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' image>
                            <Icon size="big" color="pink" name="heart"/>
                            <Header.Content>
                            Love you
                            <Header.Subheader>Say love you to your lover</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell><Icon color='green' name='checkmark' size='large' /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' image>
                            <Icon size="big" color="pink" name="birthday cake"/>
                            <Header.Content>
                            Birthday
                            <Header.Subheader>Days left before your lover's birthday</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>15</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' image>
                            <Icon size="big" color="pink" name="credit card outline"/>
                            <Header.Content>
                            Anniversary
                            <Header.Subheader>Days left before one year anniversary</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>12</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' image>
                            <Icon size="big" color="yellow" name="dollar sign"/>
                            <Header.Content>
                            Marriage Funds
                            <Header.Subheader>You deposited $1000 yesterday</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>$999,99.99</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' image>
                            <Icon size="big" color="blue" name="binoculars"/>
                            <Header.Content>
                            Next Event
                            <Header.Subheader>Your next event</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>
                        <Header as='h5' image>
                            <Header.Content>
                            Yi's concert
                            <Header.Subheader>Sunday, May 5, 2019 2:20 AM</Header.Subheader>
                            <Header.Subheader><Icon name='location arrow' />Location: 11111 111 AVE, Edmonton</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                <Segment>
                    <Button size="medium" color="google plus" content='Add a new item' icon='add circle'/>
                </Segment>
            </Segment>
            
        );
    }
}

export default Data;