import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
	TouchableOpacity,
	View,
	Text,
	ImageBackground,
	StyleSheet,
	ScrollView,
	WebView,
} from 'react-native';
import MovieMock from '../mock/MovieDetail.json';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo';
import People from './People';
import MovieFooter from '../components/Movie/MovieFooter';


export default class MovieDetail extends PureComponent {
	state = {
		movie: null,
		credits: null,
	}

	componentWillMount() {
		const { id: movieId } = this.props;
		fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d86d5ce95a86d3cd615899d27f869506&append_to_response=videos`)
			.then(response => response.json())
			.then(movie => this.setState({
				movie,
			}));

		fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d86d5ce95a86d3cd615899d27f869506`)
			.then(response => response.json())
			.then(credits => this.setState({
				credits,
			}));
	}

	renderYoutubeTrailer() {
		const { videos } = this.state.movie;
		return videos && videos.results.length > 0 && videos.results[0].site === "YouTube"
			? (
				<WebView
					style={styles.videoPlayer}
					javaScriptEnabled={true}
					source={{ uri: `https://www.youtube.com/embed/${videos.results[0].key}?rel=0&autoplay=0&showinfo=0&controls=0` }}
				/>
			) : null
	}

	renderHeader() {
		const { goBack } = this.props;
		const { backdrop_path } = this.state.movie

		return (
			<ImageBackground
				source={{
					uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
				}}
				style={styles.movieImage}
			>
				{/* <MovieFooter 
      voteAverate={2017} 
      releaseYear={'date'} 
      style={{
        width: 1000,
        backgroundColor: '#eb8900'
      }} */}
				/>
      <View>
					<TouchableOpacity
						onPress={goBack}>
						<Ionicons name="ios-arrow-dropleft-circle" size={50} color="#eb8900" style={styles.icon} />
					</TouchableOpacity>
				</View>
			</ImageBackground>

		)
	}

	renderMovie() {
		const { movie, credits } = this.state;
		const {
			title,
			overview, // adding movie footer, still not appearing
		} = movie;
		return (
			<ScrollView style={styles.movieView}
			// vertical={true}

			>
				{this.renderHeader()}
				<View style={styles.movieContentWrapper}>
					<People credits={credits}/>
					<Text style={styles.movieContentTitle}>{title}</Text>
					<Text
						textBreakStrategy='highQuality'
						style={styles.movieContent}>
						{overview}
					</Text>
					{this.renderYoutubeTrailer()}
				</View>
			</ScrollView>
		)
	}

	render() {
		const { movie } = this.state;

		return movie ? (
			this.renderMovie()
		) : null
	}
}

MovieDetail.propTypes = {
	id: PropTypes.number.isRequired,
	goBack: PropTypes.func,
};

MovieDetail.defaultProps = {
	goBack: () => null,
}

const styles = StyleSheet.create({
	movieIcon: {
		display: 'flex',
		position: 'absolute',
		paddingLeft: 20,
	},
	movieContent: {
		textAlign: 'justify',
		color: '#F1FFF4',
		paddingTop: 10,
		paddingBottom: 15,
	},
	movieContentWrapper: {
		padding: 15
	},
	movieContentTitle: {
		fontSize: 24,
		textAlign: 'center',
		color: '#F1FFF4',
	},
	videoPlayer: {
		flex: 1,
		height: 210,
		marginBottom: 60,
	},
	movieView: {
		flex: 1,
		backgroundColor: 'black',
		marginTop: 80,
		flexDirection: 'column',
	},
	movieImage: {
		height: 240,
		flex: 1,
		paddingLeft: 15,
		paddingTop: 10,
	}
});