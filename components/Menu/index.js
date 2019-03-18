import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import menuItens from '../../config/menuItens';


const { width, height } = Dimensions.get('window')

const getWidthSizeByPercentage = percentage => (percentage / 100) * width
const getHeightSizeByPercentage = percentage => (percentage / 100) * height
const menuWidth = getWidthSizeByPercentage(100)
const menuHeight = getHeightSizeByPercentage(61)


// const MenuItem = ({ item, onPress }) => {
//   const { icon, title } = item
//   return (
//     <TouchableOpacity onPress={() => onPress(item)}>
//       <View style={styles.menuItem} >
//         <Image source={icon} style={styles.menuItemIcon} />
//         <Text style={styles.menuItemText}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

const MenuSeparator = () => (<View style={styles.menuSeparator} />)
const Menu = ({ itens, onPress }) => {
  return (
    <Container >
      <Header />
      <Content />
      <Footer >
        <FooterTab style={{ backgroundColor: 'black', marginBottom: -18, }}>
          {
            itens.map((item, index) => {
              return <Button key={index} vertical onPress={() => onPress(item)}>
                <Image source={item.icon} style={styles.menuItemIcon} />
                <Text style={styles.menuItemText}
                >{item.title}</Text>
              </Button>;
            })
          }
        </FooterTab>
      </Footer>
    </Container>
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


  menuItemIcon: {
    width: 30,
    height: 30,

  },
  menuItemText: {
    color: "#fff", 
    fontSize: 12, 
    marginTop: 3
  },
  
})
export default Menu;
