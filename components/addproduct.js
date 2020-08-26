import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';
import { globalstyles } from '../globalstyles/globalstyles';

export default function AddProduct({ navigation }) {
    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Mobiles")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

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
        axios.post("http://localhost:3000/products", productBody)
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
                    placeholder="Enter image url*"
                    onChangeText={(text) => setImageURL(text)}
                    style={globalstyles.input}
                ></TextInput>
                <Text style={globalstyles.text1}>Product Name:</Text>
                <TextInput
                    placeholder="Product Name*"
                    onChangeText={(text) => setName(text)}
                    style={globalstyles.input}
                ></TextInput>
                <Text style={globalstyles.text1}>Brand:</Text>
                <TextInput
                    placeholder="Brand*"
                    onChangeText={(text) => setBrand(text)}
                    style={globalstyles.input}
                ></TextInput>
                <Text style={globalstyles.text1}>Description:</Text>
                <TextInput
                    placeholder="Description*"
                    multiline={true}
                    onChangeText={(text) => setDescription(text)}
                    style={globalstyles.input}
                ></TextInput>
                <Text style={globalstyles.text1}>Category:</Text>
                <Picker
                    selectedValue={category}
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
                    onChangeText={(text) => setPrice(text)}
                    style={globalstyles.input}
                ></TextInput>
                <Text style={globalstyles.text1}>Stock:</Text>
                <TextInput
                    placeholder="Stock*"
                    keyboardType='number-pad'
                    onChangeText={(text) => setStock(text)}
                    style={globalstyles.input}
                ></TextInput>
                <TouchableOpacity style={globalstyles.button}>
                    <Button
                        color="rgb(38, 38, 44)"
                        title="Add"
                        onPress={submit}
                    ></Button>
                </TouchableOpacity>

            </Card>
        </View>
    )
}