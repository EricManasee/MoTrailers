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
    // title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tmdbUrl: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
  })).isRequired,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  menuItem: {
    width: 60, 
    height: 60, 
    backgroundColor: '#000000',
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'space-between', 
    borderRadius: 5,
  },
  menuSeparator: {
    width: 10,
    height: 60,
    // backgroundColor: 'red',
  },
  menuItemIcon: {
    display: 'flex',
    // flex: 2/4,
    width: 24,
    height: 24,
    // justifyContent: 'center',
    position: 'relative',
    left: 10,
    paddingBottom: 10,
    padding: 10,
  },
  menuItemText: {
    color: 'white',
    fontSize: 12,
    width: 65 
  },
  menuView: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
    left: 10,
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  }
})
export default Menu;
