import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../components/styleWelcome'



export default (props) => {

    const fazerLogin = () => {
        props.navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>   
            <View style={styles.body}>
                <Text style={styles.texto}>Welcome to Alone Market</Text>
                    <View style={styles.efect}>
                        <Image 
                            style={styles.image}
                            source={require('../imagens/arte_Welcome.png')}
                            resizeMode="stretch"
                        />
                    </View>
                <TouchableOpacity style={styles.button} onPress={fazerLogin}>
                    <Text style={{fontSize:35, color:"#FFF", fontWeight:"bold"}}>Next</Text>
                </TouchableOpacity>
            </View>                
        </View>
    );
}
    