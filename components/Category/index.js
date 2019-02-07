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
            <View style={{ height: 200, width: 152, marginLeft: 20, borderWidth: 0.5, }}>
                <View style={{ flex: 1, borderRadius: 5 }}>
                    <Image source={this.props.imageUri}
                        style={{
                            flex: 1,
                            width: 150,
                            height: 190,
                            resizeMode: 'cover'
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});