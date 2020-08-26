import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';
import { globalstyles } from '../globalstyles/globalstyles';

export default function UpdateProduct({ route, navigation }) {

    const { items } = route.params
    const [imageURL, setImageURL] = useState(items.imageURL)
    const [name, setName] = useState(items.name)
    const [brand, setBrand] = useState(items.brand)
    const [description, setDescription] = useState(items.description)
    const [category, setCategory] = useState(items.category)
    const [price, setPrice] = useState(items.price)
    const [stock, setStock] = useState(items.stock)

    const submit = () => {
        let productBody = {
            "imageURL": imageURL,
            "name": name,
            "brand": brand,
            "description": description,
            "category": category,
            "price": price,
            "stock": stock
        }
        axios.put("http://localhost:3000/products/" + items.id, productBody)
            .then(response => {
                console.log(response)
                console.log("Done")
                navigation.push("Home")
            }, error => {
                console.log(error)
            })
    }

    return (
        <View style={globalstyles.view}>
            <Card>
                <Text style={globalstyles.text1}>Image:</Text>
                <TextInput
                    defaultValue={imageURL}
                    placeholder="Enter image url*"
                    style={globalstyles.input}
                    onChangeText={(text) => setImageURL(text)}
                ></TextInput>
                <Text style={globalstyles.text1}>Product Name:</Text>
                <TextInput
                    placeholder="Product Name*"
                    defaultValue={name}
                    style={globalstyles.input}
                    onChangeText={(text) => setName(text)}
                ></TextInput>
                <Text style={globalstyles.text1}>Brand:</Text>
                <TextInput
                    placeholder="Brand*"
                    defaultValue={brand}
                    style={globalstyles.input}
                    onChangeText={(text) => setBrand(text)}
                ></TextInput>
                <Text style={globalstyles.text1}>Description:</Text>
                <TextInput
                    placeholder="Description*"
                    multiline={true}
                    style={globalstyles.input}
                    defaultValue={description}
                    onChangeText={(text) => setDescription(text)}
                ></TextInput>
                <Text style={globalstyles.text1}>Category:</Text>
                <Picker
                    defaultValue={category}
                    style={globalstyles.input1}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                >
                    <Picker.Item label="Mobiles" value="Mobiles" />
                    <Picker.Item label="Cameras" value="Cameras" />
                    <Picker.Item label="Laptops" value="Laptops" />
                </Picker>
                <Text style={globalstyles.text1}>Price:</Text>
                <TextInput
                    placeholder="Price*"
                    keyboardType='number-pad'
                    style={globalstyles.input}
                    defaultValue={`${price}`}
                    onChangeText={(text) => setPrice(text)}
                ></TextInput>
                <Text style={globalstyles.text1}>Stock:</Text>
                <TextInput
                    placeholder="Stock*"
                    keyboardType='number-pad'
                    style={globalstyles.input}
                    defaultValue={`${stock}`}
                    onChangeText={(text) => setStock(text)}
                ></TextInput>
                <TouchableOpacity style={globalstyles.button}>
                    <Button
                        color="rgb(19, 100, 30)"
                        title="Update"
                        onPress={submit}
                    ></Button>
                </TouchableOpacity>
            </Card>
        </View>
    )
}