import { StyleSheet, Text, View, 
  TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native'
import React, { useState }  from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [name, setName] = useState('')
  const [data, setData] = useState("-")

  const save = async () => {
    try {
      await AsyncStorage.setItem('name', name);
    } catch (error) {
      console.log(error);
    }
    console.log(name)
  }

  const load = async () => {
    try {
      const name = await AsyncStorage.getItem('name', name);
      setData(name)
    } catch (error) {
      console.log(error);
    }
    console.log(name)
  }

  return (
    <SafeAreaView style={styles.view}>
        <Image source={require('./assets/home.png')}
         style={styles.logo}
        />

        <Text style={styles.title}>Asyncstorage</Text>
        <Text style={styles.title}>{data}</Text>

        <TextInput style={[styles.input, styles.error]}
            placeholder="Name"
            placeholderTextColor="#969696"
            autoCapitalize='none'
            onChange={(e) => setName( e.nativeEvent.text)}
      />

     <TouchableOpacity onPress={save}>
                <Text style={styles.btnText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={load}>
                <Text style={styles.btnText}>Cargar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  view : {
    flex: 1,
    alignItems: 'center',
  },
  logo : {
    width: '80%',
    height: 340,
    marginTop: 10,
    marginBottom: 50,
},
input : {
  height: 50,
  color: '#fff',
  width: '80%',
  marginBottom: 25,
  backgroundColor: '#1e3040',
  paddingHorizontal: 20,
  borderRadius: 50,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#1e3040'
},
title : {
  fontSize: 30,
  marginBottom: 20,
}

})