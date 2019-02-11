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

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, position: 'relative', top: 20 , paddingTop: 10}}>
                            <Text style={{ 
                                fontSize: 24, 
                                fontWeight: '700', 
                                paddingHorizontal: 20, 
                                color: 'white', 
                                textAlign: 'center'
                                }}>
                                Movie Stars.
                            </Text>

                            <View style={{ height: 160, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../../assets/images/PersonPic-1.jpg')}
                                        name="Name"
                                    style={{ color: 'white'}}
                                    />
                                    <Category imageUri={require('../../assets/images/PersonPic-2.jpg')}
                                        name="Name"
                                    />
                                    <Category imageUri={require('../../assets/images/PersonPic-3.jpg')}
                                        name="Name"
                                    />
                                    <Category imageUri={require('../../assets/images/PersonPic-4.jpg')}
                                        name="Name"
                                    />
                                    <Category imageUri={require('../../assets/images/PersonPic-2.jpg')}
                                        name="Name"
                                    />
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