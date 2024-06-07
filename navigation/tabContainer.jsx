import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../app/components/TabBar'
import Home from '../app/screens/home'
import AutoDonate from '../app/screens/auto_donate'
import RoundUp from '../app/screens/round_up'
import Portfolio from '../app/screens/portfolio'
import Profile from '../app/screens/profile'

const ShowTabs = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator 
            tabBar={props => <TabBar {...props} />
            }
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="auto_donate"
                component={AutoDonate}
                options={{
                    title: "Auto Donate"
                }}
            />
            <Tab.Screen
                name="round_up"
                component={RoundUp}
                options={{
                    title: "Round Up"
                }}
            />
            <Tab.Screen
                name="portfolio"
                component={Portfolio}
                options={{
                    title: "Portfolio"
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    title: "Profile"
                }}
            />
        </Tab.Navigator>
    )
}

export default ShowTabs