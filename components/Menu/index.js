import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';


const { width, height } = Dimensions.get('window')

const getWidthSizeByPercentage = percentage => (percentage / 100) * width
const getHeightSizeByPercentage = percentage => (percentage / 100) * height
const menuWidth = getWidthSizeByPercentage(100)
const menuHeight = getHeightSizeByPercentage(61)


const MenuItem = ({ item, onPress }) => {
  const { icon, title } = item
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.menuItem} >
        <Image source={icon} style={styles.menuItemIcon} />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const MenuSeparator = () => (<View style={styles.menuSeparator} />)
const Menu = ({ itens, onPress }) => {
  return (
    // <View style={styles.menuView}>
    <FlatList
      style={styles.menuView}
      keyExtractor={(item) => `${item.title}`}
      data={itens}
      renderItem={({ item }) => <MenuItem item={item} onPress={onPress} />}
      horizontal
    />
    // </View>
  )
}

Menu.defaultProps = {
  onPress: () => null,
};

Menu.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tmdbUrl: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
  })).isRequired,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  // menuItem: {
  //   width: 60, 
  //   height: 60, 
  //   backgroundColor: '#cfcfcf',
  //   padding: 8,
  //   flexDirection: 'column',
  //   justifyContent: 'space-between', 
  //   borderRadius: 5,
  // },
  menuItem: {
    flex: 1,
    marginRight: 16,
    backgroundColor: 'red'
    
  },
  menuItemIcon: {
    width: 30,
    height: 30,
    // justifyContent: '',
    // position: 'relative',
    // left: 5,
    // marginBottom: 5,
    // padding: 10,
  },
  menuItemText: {
    // textAlign: 'justify',
    position: 'relative',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    width: 65,
    height: 20
  },
  menuView: {
    // flex: 1,
    height: 60,
    marginRight: 10,
    // marginLeft: 10,
    // position: 'absolute',
    bottom: 0,
    top: 10,
    marginBottom: 0,
    left: 0,
    // justifyContent: 'space-between',
    width: menuWidth,
    // backgroundColor: 'black'
    // marginLeft: 14,
  },

})
export default Menu;
