import React from 'react';
import { 
	StyleSheet, 
	View, 
	FlatList, 
	Modal, 
	Text, 
	ImageBackground
 } from 'react-native';
import { Constants } from 'expo';
import { MovieDetail, Menu, Loading } from './components';
import People from './components/People';
import menuItens from './config/menuItens';
import { MediaList } from './containers';


export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	state = {
		modalVisible: false,
		movieId: 19404,
		tmdbUrl: 'https://api.themoviedb.org/3/movie/550?api_key=d86d5ce95a86d3cd615899d27f869506',
		selectMediaItem: menuItens[0],
	};

	getMediaList() {
		const { path, title, tmdbUrl } = this.state.selectMediaItem;
		return (tmdbUrl && title) ? (
			<MediaList title={title} key={title} tmdbUrl={tmdbUrl} goToDetail={this.goToDetail} />
		)
			: null;
	}

	goToDetail = id => {
		this.setState({
			modalVisible: true,
			movieId: id,
		})
	}

	render() {
		const { selectMediaItem } = this.state
		return (
			<ImageBackground
				source={require('./assets/bg/movie-poster-full.jpg')}
				style={styles.Bgcontainer}>
				<View style={styles.overlayContainer}>
					<Menu itens={menuItens} onPress={(item) => {
						console.log('selecting', item)
						this.setState({ selectMediaItem: item })
					}} />
					{this.getMediaList()}
					<Modal
						animationType="fade"
						transparent={true}
						visible={this.state.modalVisible}
						onRequestClose={() => this.setState({ modalVisible: false })}>
						<MovieDetail id={this.state.movieId} goBack={() => this.setState({ modalVisible: false })} />
					</Modal>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		width: 150,
		height: 200,
		padding: 4, 
		// need shadow
	},
	Bgcontainer: {
		flex: 1,
	},
	overlayContainer: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: 'rgba(0, 0, 0, 0.73)',
	},
});