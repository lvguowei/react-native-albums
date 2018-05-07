import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase'
import {Header} from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA0E7qLaENlMbgD0udRer5VTp1yEWp2aQM",
            authDomain: "reactnative-auth-3d606.firebaseapp.com",
            databaseURL: "https://reactnative-auth-3d606.firebaseio.com",
            projectId: "reactnative-auth-3d606",
            storageBucket: "reactnative-auth-3d606.appspot.com",
            messagingSenderId: "292831521934"
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;