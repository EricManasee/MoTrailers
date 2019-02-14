import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        const CastName= this.props.name
        return (
            <View style={styles.container} >
                {/* <View style={{ width: 84, height: 84, borderRadius:40, backgroundColor:'#ffffff', justifyContent: 'center' }}> */}
                <View style={{ width: 84, height: 84, backgroundColor:'#ffffff', justifyContent: 'center' }}>
                    <Image source={{uri: this.props.imageUri}}
                        style={{
                            // flex: 1,
                            left: 2,
                            width: 80,
                            height: 80,
                            resizeMode: 'cover',
                            borderRadius: 40,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            
                        }}
                    />
                </View>
                <View style={{ paddingBottom: 0, paddingTop: 5, }}>
                    <Text style={{  color: '#ffffff', textAlign: 'center', width: 100 }}
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