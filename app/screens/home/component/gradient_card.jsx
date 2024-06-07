import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const GradientCard = (props) => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#FCE7D0']}
      style={styles.cardStyle}
      start={{ x: 0.3, y: 0.8 }}
      end={{ x: 1, y: 1.1 }}
    >
      <View style={styles.view}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Text style={styles.CapsuleHeading}>{props.Heading}</Text>
          <Image source={props.image} style={{height: 24, width: 26}} />
        </View>
        <Text style={styles.Description}>{props.Description}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: "46%",
    height: 100,
    borderRadius: 20,
    marginLeft: 10,
    marginBottom: 10

  },
  CapsuleHeading: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 16,
    alignSelf: 'center',
  },
  Description: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 16,
    paddingRight: 25,
    color: '#00000080'
  },
  view: { paddingVertical: 15, paddingHorizontal: 15 },
});

export default GradientCard;
