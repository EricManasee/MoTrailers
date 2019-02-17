import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <MenuItem  item={item} onPress={onPress}/>}
        ItemSeparatorComponent={MenuSeparator}
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
  menuSeparator: {
    width: 10,
    height: 60,
  },
  menuItemIcon: {
    display: 'flex',
    width: 36,
    height: 36,
    justifyContent: 'center',
    position: 'relative',
    // left: 10,
    paddingBottom: 10,
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
  },
  menuView: {
    flex: 1,
    height: 60,
    position: 'absolute',
    bottom: 0,
    // marginBottom: 1,
    left: 15,
    justifyContent: 'space-between',
    // flexDirection: 'column-reverse',
    alignContent: 'flex-end',
  },
  
})
export default Menu;
