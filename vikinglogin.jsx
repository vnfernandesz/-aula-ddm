import {TextInput,Button,Image,Pressable,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

  <View>
  <View style={{flex:64,alignItems:'center'}}>
  <Image
source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRI5e1g53JKfk3qB8Es0uxuXEoZocGIskYzLIO5WYJ9g&s=10' }}
style={{
  width:170,
  height:120
}}/>
</View>

  <Text> Insira seu nome: </Text>
  <TextInput
  placeholder='seu nome'
  style={{
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }}
  />
 <View>
  <Text> Insira sua senha: </Text>
  <TextInput
  placeholder='sua senha'
  keyboardType='numeric'
  secureTextEntry={true}
  style={{
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }}
  />

<Button
title='enviar'
onPress={ () => {alert("enviado") }} 
disabled={ false }
/>


<Pressable
onPress={ () => {alert("criar nova senha") }}>
<Text> esqueci minha senha: </Text>
</Pressable>

</View>
  </View>

);
}
