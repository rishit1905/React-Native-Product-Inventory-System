import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, SearchBar } from 'react-native-elements';
import { globalstyles } from '../globalstyles/globalstyles';
import { ScrollView, TouchableOpacity, View, Text, Image, Button } from "react-native";


export default function ProductList({ navigation }) {

    const [products, setProducts] = useState([])
    const [filteredproducts, setFilteredProducts] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
                setFilteredProducts(response.data)
            }, error => {
                console.log(error);
            })
    }, [])

    const searchProduct = (text) => {
        console.log(text)
        setSearch(text)
        let product = filteredproducts.filter((p) => {
            return p.name.toLowerCase().startsWith(text.trim().toLowerCase())
        })
        setProducts(product)
    }

    return (
        <View style={globalstyles.view}>
            <SearchBar
                placeholder="Search Product"
                onChangeText={searchProduct}
                value={search}
            >
            </SearchBar>
            <TouchableOpacity style={globalstyles.button}>
                <Button
                    color="rgb(37, 37, 158)"
                    title="Add Product"
                    onPress={() => navigation.navigate("Add Product", { item: products })}
                ></Button>
            </TouchableOpacity>
            <ScrollView>
                {
                    products.map(product => {
                        return (
                            <View key={product.id}>
                                <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { item: product })}>
                                    <Card>
                                        <Image
                                            source={{ uri: product.imageURL }}
                                            style={globalstyles.images}
                                        />
                                        <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { item: product })}>
                                            <Text style={globalstyles.text}>{product.name}</Text>
                                        </TouchableOpacity>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}