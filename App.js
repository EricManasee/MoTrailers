import React from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Modal,
	Text,
	ImageBackground,
	StatusBar,
	Button,
	ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Constants } from 'expo';
import { MovieDetail, Menu, Loading } from './components';
import People from './components/People';
import menuItens from './config/menuItens';
import { MediaList } from './containers';


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
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
					{/* <Menu itens={menuItens} onPress={(item) => {
						console.log('selecting', item)
						this.setState({ selectMediaItem: item })
					}} /> */}

					{this.getMediaList()}
					<Modal
						style={{ backgroundColor: 'black' }}
						animationType="slide"
						transparent={true}
						visible={this.state.modalVisible}
						onRequestClose={() => this.setState({ modalVisible: false })}>
						<StatusBar backgroundColor="blue" barStyle="default" />
						<StatusBar hidden={MovieDetail.statusBarHidden} />
						<MovieDetail id={this.state.movieId} goBack={() => this.setState({ modalVisible: false })} />
					</Modal>


					{/* adding a TabNavigator */}
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
						<Menu itens={menuItens} onPress={(item) => {
							console.log('selecting', item)
							this.setState({ selectMediaItem: item })
						}} />
					</View>



				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		width: 150,
		height: 200,
		padding: 6,
	},
	Bgcontainer: {
		flex: 1,
	},
	overlayContainer: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#000000',
		// backgroundColor: 'rgba(0, 0, 0, 0.73)',
	},
});