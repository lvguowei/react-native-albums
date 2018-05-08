import React, {Component} from 'react';
import {Button, Card, CardSection, Input, Spinner} from "./common";
import firebase from 'firebase';
import {Text} from "react-native";

class LoginForm extends Component {

    state = {email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({loading: true, error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({loading: false, error: 'Auth failed.'});
            })
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        placeholder='john.doe@example.com'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        placeholder='password'
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;