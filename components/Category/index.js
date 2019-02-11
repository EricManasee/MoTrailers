import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ }}>
                <View style={{ flex: 1,width: 150, height: 150, marginLeft: 20,borderRadius: 150/2}}>
                    <Image source={this.props.imageUri}
                        style={{
                            flex: 1,
                            width: 150,
                            height: 150,
                            
                            resizeMode: 'cover',
                            borderRadius: 150/2,
                        }}
                    />
                    {/* <Text style={{color: 'white'}}
                    >{this.props.name}</Text> */}
                </View>
                <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}
                    >{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    }
});