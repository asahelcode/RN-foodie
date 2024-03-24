import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'


const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams() // get the id
  return (
    <View>
      <Stack.Screen options={{ title: 'Detail' }}/>
      <Text>Welcome to Product detail page { id }</Text>
    </View>
  )
}

export default ProductDetailScreen