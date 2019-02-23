import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

const MenuItem = ({ item, onPress }) => {
  const { icon, title } = item
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.menuItem} >
        <Image source={icon}  style={styles.menuItemIcon}/>
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const MenuSeparator = () =>( <View style={styles.menuSeparator} />)
const Menu = ({ itens, onPress }) => {
  return (
    <View style={styles.menuView}>
      <FlatList
        keyExtractor={(item) => `${item.title}`}
        data={itens}
        renderItem={({item}) => <MenuItem  item={item} onPress={onPress}/>}
        horizontal
      />
    </View>
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
  
  menuItemIcon: {
    display: 'flex',
    width: 30,
    height: 30,
    justifyContent: 'center',
    position: 'relative',
    left: 5,
    marginBottom: 5,
    padding: 10,
  },
  menuItemText: {
    textAlign: 'justify',
    color: 'white',
    fontSize: 12,
    width: 65,
    height: 20 
  },
  menuItem:{
    flex: 1,
    justifyContent: 'center', 
    marginLeft: 14
  },
  menuView: {
    flex: 1,
    height: 60,
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    left: 0,
    justifyContent: 'space-between',
    marginLeft: 2,
  },
  
})
export default Menu;
