import React from "react";
import { View, TouchableOpacity, FlatList, ScrollView, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientCard from "./component/gradient_card";
import { FontAwesome } from '@expo/vector-icons';
import { CalculatorsList, data } from "../../constants/data";
import { styles } from "./styles";

const Home = () => {
  const renderItem = ({ item }) => (
    <GradientCard
      Heading={item?.heading}
      Description={item?.description}
      image={item?.image}
    />
  );

  const CalculatorItem = ({ title, image }) => (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#EF7D00', '#ffffff10', '#ffffff']}
        style={styles.gradient}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.headerContainer}>
            <Image source={require("../../../assets/images/header_background.png")} style={styles.imageBackground} />
            <View style={styles.imageTextContainer}>
              <Image source={require("../../../assets/images/penny_appeal.png")} style={styles.imageText} />
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>Salam, Ahmed</Text>
              <TouchableOpacity>
                <FontAwesome name="search" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
            <View style={{ flexDirection: 'row', paddingBottom: 3, width: "90%", justifyContent: 'space-between' }}>
              <Text style={styles.progressText}>$450</Text>
              <Text style={styles.progressText}>2024 donation goal</Text>
              <Text style={styles.progressText}>$1,000</Text>
            </View>
            <Image source={require("../../../assets/images/progress_bar.png")} style={styles.progressBar} />
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={styles.list}
            />

            <View style={styles.calContainer}>
              <Text style={styles.header}>Calculators</Text>
              <FlatList
                data={CalculatorsList}
                renderItem={({ item }) => <CalculatorItem title={item.title} image={item.image} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
          </View>
        </ScrollView>

      </LinearGradient>
    </View>
  );
};

export default Home;
