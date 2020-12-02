import axios from 'axios';
import React, { useState } from 'react';
import {
    FlatList, Image, ScrollView,
    StyleSheet, Text, View,
    ToastAndroid,
    Platform
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Card, CardItem, Header } from './cmponents';
import RatingScreen from './RatingScreen';
const HomeScreen = () => {

    const [results, setResult] = useState('')
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => {
        setSearchQuery(query)
        getResult(query);
    };

    // calling api hit the server 
    const getResult = (query) => {
        axios.get("http://www.omdbapi.com/?apikey=6a41b3f7&t=" + `${query}`)
            .then((response) => {
                if (response.data.Response == 'False') {
                    if (Platform.OS == 'android') {
                        ToastAndroid.show("Movie not found!", ToastAndroid.LONG);
                    } else {
                        alert("Movie not found!")
                    }
                } else {
                    setResult(response.data)
                }
            })
            .catch((error) => {
                if (Platform.OS == 'android') {
                    ToastAndroid.show("Something wrong try agin.", ToastAndroid.LONG);
                } else {
                    alert("Something wrong try agin.")
                }
            });

    };


    return (
        <ScrollView>
            <Header title="Home" />

            <View style={styles.searchViewContainer}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(newQuery) => onChangeSearch(newQuery)}
                    value={searchQuery}
                />
            </View>
            <View>
                {
                    searchQuery ?
                        <Card>
                            <CardItem>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: results.Poster }} />
                            </CardItem>
                            <CardItem>
                                <Text>Title : {results.Title}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Director : {results.Director}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Writer : {results.Writer}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Actors : {results.Actors}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Language : {results.Language}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Country : {results.Country}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Awards : {results.Awards}</Text>
                            </CardItem>
                            <CardItem>
                                {console.log("Rating List" + JSON.stringify(results.Ratings))}
                                <FlatList
                                    horizontal={true}
                                    data={results.Ratings}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(result) => {
                                        result.imdbID
                                        console.log(result.imdbID)
                                    }}
                                    renderItem={({ item }) => {
                                        return (
                                            <RatingScreen item={item} />
                                        );
                                    }}
                                />
                            </CardItem>
                        </Card>
                        :
                        <Text style={styles.hintStyle}>Search movie with name.</Text>
                }
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    searchViewContainer: {
        flex: 1,
        marginLeft: 16,
        marginTop: 12,
        marginRight: 16
    },
    imageStyle: {
        width: "100%",
        height: 200,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    hintStyle: {
        color: '#e2e2e2',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 25
    }
})

export default HomeScreen;
