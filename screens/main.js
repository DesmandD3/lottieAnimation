import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { Calendar, Layout, Text } from '@ui-kitten/components';

//import { useEffect, useState } from 'react';


const LeftContent = props => <Avatar.Icon {...props} icon='instagram' />

export default function Main() {
    return (
        <ScrollView>
            <Layout>
                <Card>
                    <Card.Title
                        title="Card #1"
                        subtitle="Subs"
                        left={LeftContent} />
                    <Card.Content>
                        <Title>My first card</Title>
                        <Paragraph>I love cards</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
                {/* <Calendar
                date={new Date()}
                onSelect={nextDate => () => { alert(`You selected ${nextDate}`); 
                }}
            /> */}
                <StatusBar style="auto" />
                
            </Layout>
        </ScrollView>
    )
}