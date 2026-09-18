import { Text, Image,ScrollView,View,TextInput, Pressable,StatusBar,

  StyleSheet
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider
} from 'react-native-safe-area-context';

export default function App() {
return (
  
     <SafeAreaProvider>
<SafeAreaView style={styles.safeArea}>
<StatusBar
 backgroundColor="blue"
/>
<View style={styles.cabecalho}>

 <Text style={styles.titulo}>
 Restaurante Viking
</Text>

 <Text style={styles.subtitulo}>
 O melhor da região
 </Text>
 </View>

<ScrollView style={styles.scrollView}>

 <View style={styles.areaImagem}>
/}

<Image
source={{
uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg5bUdcILNGcNPSXkcmil2durTrbLnQfGTlW0DQk6jELzkqlX3thoRsZh&s=10'
}}
style={styles.imagem}
/>

</View>

<View style={styles.cardapio}>

<Text style={styles.tituloCardapio}>
  Nosso Cardapio
 </Text>


<View>

<Text style={styles.nomeComida}>
Hamburguer Viking
</Text>

  <Text style={styles.descricao}>
  Carne, queijo, bacon e molho especial.
 </Text>

  <Text style={styles.preco}>
  R$ 29,90
</Text>

 </View>

  <View>

<Text style={styles.nomeComida}>
Frango do Viking

</Text>

<Text style={styles.descricao}>
Frango grelhado acompanhado de batatas.
</Text>

 <Text style={styles.preco}>
R$ 27,90
</Text>

</View>

 <View>

   <Text style={styles.nomeComida}>
Banquete Viking
</Text>

 <Text style={styles.descricao}>
Carne assada, batatas e acompanhamentos.
</Text>

 <Text style={styles.preco}>
 R$ 39,90
</Text>

 </View>

  <Text style={styles.espaco}>
  </Text>

 <Pressable
onPress={() => alert('Pedido enviado!')}
 style={styles.botao}
 >
 <Text style={styles.textoBotao}>
  FAZER PEDIDO
  </Text>

 </Pressable>

 </View>

 </ScrollView>
 </SafeAreaView>

 </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
  flex: 1,
  backgroundColor: 'blue'
  },

  cabecalho: {
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 15
  },

  titulo: {
  fontSize: 25,
 fontWeight: 'bold',
   color: 'brown'
  },

  subtitulo: {
 fontSize: 16,
 marginTop: 5,
  color: 'brown'
  },

  scrollView: {
  flex: 1,
  backgroundColor: 'blue'
  },

  areaImagem: {
 backgroundColor: 'black',
 alignItems: 'center',
 padding: 15
  },

 imagem: {
 width: 330,
 height: 200,
 borderRadius: 10
  },

  cardapio: {
    padding: 20
  },

  tituloCardapio: {
  fontSize: 24,
  fontWeight: 'bold',
 color: 'brown',
 marginBottom: 15
  },

  nomeComida: {
 fontSize: 19,
 fontWeight: 'bold'
  },

descricao: {
marginTop: 5
  },

  preco: {
  marginTop: 8,
  fontSize: 17,
  fontWeight: 'bold',
  color: 'white'
  },

  espaco: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8
  },

 botao: {
 backgroundColor: 'brown',
 padding: 15,
 borderRadius: 10,
 alignItems: 'center',
 marginBottom: 20
  },

  textoBotao: {
 color: 'white',
 fontSize: 18,
 fontWeight: 'bold'
  }
});
