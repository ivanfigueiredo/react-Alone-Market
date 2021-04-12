import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../components/stylesLogin';


export default () => {

  return (
    <View style={styles.container}>
      <View>
        <Image 
          style={styles.image}
          source={require('../imagens/logo60.png')}
          //resizeMode="stretch"
        />
      </View>  
      <View>
        <TextInput
          placeholder="Digite seu Email"
          style={styles.input} 
        />
      </View>
      <View style={{margin:10}}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          
        />
      </View>  
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity  style={styles.opacity}>
          <Text style={styles.text}>Sing In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
