import React from 'react';
import { View,Text, ScrollView, Image,StyleSheet,SafeAreaView
} from 'react-native';

export default function App() {
  return (
    
 <SafeAreaView style={styles.tela}>
   <ScrollView contentContainerStyle={styles.conteudo}>
  <Image
 source={{
uri: 'https://media.istockphoto.com/id/1400188922/vector/blank-book-icon.jpg?s=170667a&w=0&k=20&c=Gr9t41cOhwFDQuRdDr2seozsm5JSJJ0sUvAAZbE6RTk='
  }}
  style={styles.logo}
 />

   <Text style={styles.titulo}>
  App de Estudos
   </Text>
    <Text style={styles.subtitulo}>
    Organize provas, tarefas e revisoes.
 </Text>

  <View style={styles.lista}>

  <View style={styles.cartao}>
 <Text style={styles.materia}>
   Matematica
  </Text>

   <Text style={styles.descricao}>
     Revisar funcoes para sexta-feira.
   </Text>
  </View>

   <View style={styles.cartao}>
  <Text style={styles.materia}>
      Historia
       </Text>

    <Text style={styles.descricao}>
   Ler capitulo sobre Revolucao Industrial.
   </Text>
  </View>

 <View style={styles.cartao}>
 <Text style={styles.materia}>
   Geografia
   </Text>

  <Text style={styles.descricao}>
   Fazer va do Bruno.
  </Text>
 </View>

 </View>

</ScrollView>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({

  tela: {
  flex: 1,
   backgroundColor: 'white'
  },
  conteudo: {
 padding: 29
  },

  logo: {
  width: 77,
 height: 77,
alignSelf: 'center',
 marginBottom: 10
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center'
  },

  subtitulo: {
 fontSize: 14,
 color: 'black',
textAlign: 'center',
marginTop: 5,
marginBottom: 20
  },

  cartao: {
  backgroundColor: 'white',
  padding: 15,
  borderRadius: 10,
  elevation: 2
  },

  materia: {
 fontSize: 20,
fontWeight: 'bold',
color: 'cyan',
 marginBottom: 6
  },

  descricao: {
  fontSize: 14,
 color: 'black'
}
});
