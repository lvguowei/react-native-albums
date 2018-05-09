import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase'
import {Button, Card, CardSection, Header, Spinner} from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA0E7qLaENlMbgD0udRer5VTp1yEWp2aQM",
            authDomain: "reactnative-auth-3d606.firebaseapp.com",
            databaseURL: "https://reactnative-auth-3d606.firebaseio.com",
            projectId: "reactnative-auth-3d606",
            storageBucket: "reactnative-auth-3d606.appspot.com",
            messagingSenderId: "292831521934"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button>Log out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;

            default:
                return (
                    <View>
                        <Spinner size="large"/>
                    </View>
                );

        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;