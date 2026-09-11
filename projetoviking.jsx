import {Text,Image,ScrollView,View,TextInput,Pressable, StatusBar
} 
from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>

        <StatusBar
          backgroundColor="blue"
        />

        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15
          }}
        >

          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'brown'
            }}
          >
            Restaurante Viking
          </Text>

          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              color: 'brown'
            }}
          >
            O melhor da região
          </Text>

        </View>


        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'blue'
          }}
        >

          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              padding: 15
            }}
          >

            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg5bUdcILNGcNPSXkcmil2durTrbLnQfGTlW0DQk6jELzkqlX3thoRsZh&s=10'
              }}
              style={{
                width: 330,
                height: 200,
                borderRadius: 10
              }}
            />

          </View>


          <View style={{ padding: 20 }}>

            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'brown',
                marginBottom: 15
              }}
            >
              Nosso Cardapio
            </Text>


            <View
             
            >

              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold'
                }}
              >
                Hamburguer Viking
              </Text>

              <Text style={{ marginTop: 5 }}>
                Carne, queijo, bacon e molho especial.
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                R$ 29,90
              </Text>

            </View>


            <View>

              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold'
                }}
              >
                 Frango do Viking
              </Text>

              <Text style={{ marginTop: 5 }}>
                Frango grelhado acompanhado de batatas.
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                R$ 27,90
              </Text>

            </View>


            <View >

              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold'
                }}
              >
                 Banquete Viking
              </Text>

              <Text style={{ marginTop: 5 }}>
                Carne assada, batatas e acompanhamentos.
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                R$ 39,90
              </Text>

            </View>


            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 8
              }}
            >
            </Text>

           


            <Pressable
              onPress={() => alert('Pedido enviado!')}
              style={{
                backgroundColor: 'brown',
                padding: 15,
                borderRadius: 10,
                alignItems: 'center',
                marginBottom: 20
              }}
            >

              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                FAZER PEDIDO
              </Text>

            </Pressable>

          </View>

        </ScrollView>


      </SafeAreaView>

    </SafeAreaProvider>
  );
}
