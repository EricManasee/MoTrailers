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
            const PersonNoPic = require('../../assets/images/PersonNoPic.png');
            const people = credits.cast.map((castItem) => {
                let imageURL = castItem.profile_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' : `${base}${castItem.profile_path}`;                
				console.log(imageURL);
                return <Category
                    key={`${castItem.name}_${castItem.order}`}
                    imageUri={imageURL}
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

                            <View style={{ height: 160, marginTop: 10 }}>
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