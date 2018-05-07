import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Button, Card, CardSection} from "./common";

class LoginForm extends Component {

    state = {text: ''};

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        style={{height: 20, width: 100}}
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}/>
                </CardSection>
                <CardSection/>
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;