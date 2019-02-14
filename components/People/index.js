import React, { PureComponent } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { Category } from '../../components';

const { height, width } = Dimensions.get('window')

export default class People extends PureComponent {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    buildPeople(credits) {
        if (credits && credits.cast) {
			console.log('credits.cast ', credits.cast);
            const base = `https://image.tmdb.org/t/p/w500/`;
            const people = credits.cast.map((castItem) => {
				let imageURL = castItem.profile_path === null ? 'https://image.tmdb.org/t/p/w500/AhX2E9R1l4I8xgCwS1z3i6KoPX9.jpg' : `${base}${castItem.profile_path}`;
				console.log(imageURL);
                return <Category
                    key={`${castItem.name}_${castItem.order}`}
                    imageUri={imageURL}
                    // imageUri={require(`https://image.tmdb.org/t/p/w500/${profile_path}`)}
                    name={castItem.name}
                    style={{ color: 'white' }}
                />
            });
            return people;
        }
        return null;
    }

    render() {
        const { credits } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, position: 'relative', top: 0, paddingTop: 0 }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: '400',
                                paddingHorizontal: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}>
                                Movie casts.
                            </Text>

                            <View style={{ height: 120, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {this.buildPeople(credits)}

                                </ScrollView>
                            </View>

                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
        position: 'relative'
    },
    imageUri: {
        borderRadius: 25,
    }
});