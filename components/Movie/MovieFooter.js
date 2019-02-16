import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import MediaList, { Movie } from '../../components'

const iconAndTextColor = '#ededed';
const { width, height } = Dimensions.get('window')

const getWidthSizeByPercentage = percentage => (percentage / 100) * width
const getHeightSizeByPercentage = percentage => (percentage / 100) * height
const footerTitleWidth = getWidthSizeByPercentage(50)
const footerTitleHeight = getHeightSizeByPercentage(86)
const footereWidth = getWidthSizeByPercentage(96)
const footerHeight = getHeightSizeByPercentage(86)

const MovieFooter = ({ voteAverate, releaseYear, title }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        {/* <Ionicons name="md-videocam" size={32} color={iconAndTextColor} style={styles.icon} /> */}
        <Text style={styles.title}>{title}</Text>
      </View>
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

MovieFooter.defaultProps = {
  releaseYear: null,
}
MovieFooter.propTypes = {
  voteAverate: PropTypes.number.isRequired,
  releaseYear: PropTypes.string,
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: footereWidth,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#eb8900',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    color: iconAndTextColor,
  },
  title: {
    color: iconAndTextColor,
    width: footerTitleWidth,
    fontWeight: 'bold',
  }
})

export default MovieFooter;