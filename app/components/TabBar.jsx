import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons, FontAwesome6, Foundation } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {

  const icons = {
    home: (props) => <Foundation name="home" size={26} color={greyColor} {...props} />,
    auto_donate: (props) => <FontAwesome6 name="repeat" size={20} color={greyColor} {...props} />,
    round_up: (props) => <MaterialIcons name="add-card" size={22} color={greyColor} {...props} />,
    portfolio: (props) => <Feather name="pie-chart" size={22} color={greyColor} {...props} />,
    profile: (props) => <MaterialIcons name="person-outline" size={26} color={greyColor} {...props} />,
  }

  const primaryColor = '#EF7D00';
  const greyColor = '#737373';
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              icons[route.name]({
                color: isFocused ? primaryColor : greyColor
              })
            }
            <Text style={{
              color: isFocused ? primaryColor : greyColor,
              fontSize: 11
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }
})

export default TabBar