import { Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>

      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 ,color:'brown'}}>Restaurante Viking</Text>
      </View>

      <View style={{ flex: 4, backgroundColor: 'blue',alignItems:'center',justifyContent: 'center'}}>
     <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 8 ,color:'black',textAlign:'center'}}>Venha para o melhor restaurante viking do Brasil!</Text>

      </View>

      <View style={{ flex: 8, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg5bUdcILNGcNPSXkcmil2durTrbLnQfGTlW0DQk6jELzkqlX3thoRsZh&s=10' }} style={{ width: 330, height: 200 }} />
      </View>

      <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>

    </View>
  );
}
