import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const iconAndTextColor = '#ededed';





export default class MovieDetail extends PureComponent {
    state = {
        movie: null,
    }

    componentWillMount() {
        const { id: movieId } = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${movie_Id}?api_key=d86d5ce95a86d3cd615899d27f869506&append_to_response=images`)
            .then(response => response.json())
            .then(movie => this.setState({
                movie,
            }));
    }

    MovieFooter = ({ voteAverate, releaseYear }) => {
        return (
            <View style={styles.footer}>
                <View style={styles.footerItem}>
                    <Ionicons name="md-star" size={32} color={iconAndTextColor} style={styles.icon} />
                    <Text style={styles.text}>{voteAverate}</Text>
                </View>
                {releaseYear && <View style={styles.footerItem}>
                    <Ionicons name="md-calendar" size={32} color={iconAndTextColor} style={styles.icon} />
                    <Text style={styles.text}>{releaseYear}</Text>
                </View>}
            </View>
        )
    }


}

















// import React, { PureComponent } from 'react';
// import {
//     TouchableOpacity,
//     View,
//     Text,
//     ImageBackground,
//     StyleSheet,
//     ScrollView,
//     WebView,
// } from 'react-native';
// import { Video } from 'expo';



//     const { id: movieId } = this.props;
//     fetch(`https://api.themoviedb.org/3/credit/{credit_id}?api_key=d86d5ce95a86d3cd615899d27f869506&append_to_response=videos`)
//         .then(response => response.json())
//         .then(movie => this.setState({
//             movie,
//         }));









export default MovieCasts;