import { Button, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [jogador1, atualizarJogador1] = useState(0);
  const [jogador2, atualizarJogador2] = useState(0);
  return (
    <View
  style={{
   flex: 1,
  backgroundColor: 'purple',
  alignItems: 'center',
  justifyContent: 'center',
        padding: 20
      }}
    >
      <Text
    style={{
     fontSize: 25,
    fontWeight: 'bold',
  color: 'black',
   marginBottom: 20
        }}
      >
   Placar de Ping Pong
   </Text>
    <Text
   style={{
   fontSize: 19,
   fontWeight: 'bold'
     }}
      >
        Jogador 1
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 10
        }}
      >
        {jogador1}
      </Text>

      <Button
        title="Ponto Jogador 1"
        onPress={() => {
          if (jogador1 >= 11) {
            alert("Jogador 1 venceu!");
          }

          atualizarJogador1(jogador1 + 1);
        }}
      />
      <Text
   style={{
     fontSize: 19,
    fontWeight: 'bold',
     marginTop: 20
        }}
      >
        Jogador 2
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 10
        }}
      >
        {jogador2}
      </Text>

   <Button
    title="Ponto Jogador 2"
     onPress={() => {
     if (jogador2 >= 11) {
   alert("Jogador 2 venceu!");
       }
  atualizarJogador2(jogador2 + 1);
  }}
   />

   <View style={{ marginTop: 20 }}>
   <Button
   title="Zerar Placar"
   onPress={() => {
   atualizarJogador1(0);
   atualizarJogador2(0);
 }}
  />
 </View>

    </View>
  );
}
