import { Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tituloContainer}>

    <Text style={styles.titulo}>
    Restaurante Viking
        </Text>
      </View>
      <View style={styles.subtituloContainer}>

    <Text style={styles.subtitulo}>
       Venha para o melhor restaurante viking do Brasil!
      </Text>

 </View>

      <View style={styles.imagemContainer}>

   <Image
 source={{
 uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg5bUdcILNGcNPSXkcmil2durTrbLnQfGTlW0DQk6jELzkqlX3thoRsZh&s=10'
          }}
          style={styles.imagem}
        />
      </View>
  <View style={styles.rodape}></View>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  tituloContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'brown',
  },

  subtituloContainer: {
    flex: 4,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'black',
    textAlign: 'center',
  },

  imagemContainer: {
    flex: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: 330,
    height: 200,
  },

  rodape: {
    flex: 1,
    backgroundColor: 'yellow',
  },

});
