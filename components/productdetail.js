import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
import axios from "axios";
import { globalstyles } from '../globalstyles/globalstyles';

export default function ProductDetail({ route, navigation }) {

    const { item } = route.params

    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Mobiles")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [product, setProduct] = useState([])

    useEffect(() => {
        setImageURL(item.imageURL)
        setName(item.name)
        setBrand(item.brand)
        setDescription(item.description)
        setCategory(item.category)
        setPrice(item.price)
        setStock(item.stock)
        setProduct(item)
    })

    const deleteProduct = () => {
        console.log("Delete product with received id: " + item.id)
        axios.delete("http://localhost:3000/products/" + item.id)
            .then(response => {
                console.log(response.data);
                navigation.push("Home")
            }, error => { console.log(error); })
    }

    return (
        <View style={globalstyles.view}>
            <ScrollView>
                <Card>
                    <Image
                        source={{ uri: imageURL }}
                        style={globalstyles.images}
                    />
                    <Text style={globalstyles.textDetail}><b>Product Name:</b> {name}</Text>
                    <Text style={globalstyles.textDetail}><b>Brand:</b> {brand}</Text>
                    <Text style={globalstyles.textDetail}><b>Description:</b> {description}</Text>
                    <Text style={globalstyles.textDetail}><b>Category:</b> {category}</Text>
                    <Text style={globalstyles.textDetail}><b>Price:</b> {price}</Text>
                    <Text style={globalstyles.textDetail}><b>Stock:</b> {stock}</Text>
                    <TouchableOpacity style={globalstyles.button}>
                        <Button
                            color="rgb(173, 42, 42)"
                            title="Update"
                            onPress={() => navigation.navigate("Update Product", { items: product })}
                        ></Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalstyles.button}>
                        <Button
                            color="rgb(81, 23, 146)"
                            title="Delete"
                            onPress={deleteProduct}
                        ></Button>
                    </TouchableOpacity>


                </Card>
            </ScrollView>
        </View>
    )
}