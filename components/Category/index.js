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
            <View style={styles.container}>
                <View style={{ width: 84, height: 84, borderRadius:40, backgroundColor:'#ffffff', justifyContent: 'center' }}>
                    <Image source={this.props.imageUri}
                        style={{
                            // flex: 1,
                            left: 2,
                            width: 80,
                            height: 80,
                            resizeMode: 'cover',
                            borderRadius: 40,
                            justifyContent: 'center',
                            
                        }}
                    />
                </View>
                <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                    <Text style={{ color: '#ffffff', textAlign: 'center' }}
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
    }
});