import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import products from '@assets/data/products'
import { useState } from 'react'
import Button from '@/components/Button'

const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const sizes =  ['S', 'M', 'L', 'XL']

const addToCart = () => {
  console.warn('added to cart')
}

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams() // get the id
  const [selectedSize, setSelectedSize] = useState('M')

  const product = products.find((product) => product?.id.toString() === id)

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }}/>
      <Image source={{ uri: product?.image || defaultImage }} style={styles.image} resizeMode='contain' />
      <Text>Select Size: </Text>
      <View style={styles.sizes}>
      {
        sizes.map((size) => (
          <Pressable onPress={() => setSelectedSize(size)} style={[styles.size, { backgroundColor: selectedSize === size ? 'gainsboro' : 'white' }]} key={size}>
            <Text style={[styles.sizeText, { color: selectedSize === size ? 'black' : 'gray'}]}>{size}</Text>
          </Pressable>
        ))
      }
      </View>
      <Text style={styles.price}>${product?.price}</Text>
      <Button text="Add to Cart" onPress={addToCart} />
    </View>
  )
}

export default ProductDetailScreen
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }
})