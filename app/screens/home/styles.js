import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    calContainer: {
        flex: 1,
        marginTop: 20,
        paddingLeft: 15,
      },
      header: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
      },
      flatListContent: {
        paddingVertical: 10,
      },
      itemContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: 115,
        padding: 20,
        marginRight: 15,
        borderRadius: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      image: {
        width: 40,
        height: 40,
        marginBottom: 10,
      },
      title: {
        fontSize: 16,
        color: '#5A606D',
        fontWeight: '600',
      },
  
  
      container: {
        flex: 1
      },
      gradient: {
        height: "100%",
      },
      list: {
        marginTop: 20,
      },
      imageText: {
        height: 61,
        width: 90,
      },
      imageBackground: {
        height: 120,
        width: 150
      },
      imageTextContainer: {
        position: 'absolute',
        marginLeft: 20,
        paddingTop: 30
      },
      progressBar: {
        height: 5,
        width: "90%"
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      logoContainer: {
        position: 'absolute',
        paddingLeft: 20
      },
      logoText: {
        color: '#F26522',
        fontSize: 20,
      },
      logoSubText: {
        color: '#F26522',
        fontSize: 24,
        fontWeight: 'bold',
      },
      greetingContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginRight: "6%"
      },
      greetingText: {
        color: 'white',
        fontSize: 24,
        marginRight: 10,
        lineHeight: 28,
        fontWeight: 600,
        fontFamily: "Proxima Nova"
      },
      progressText: {
        color: 'white',
        fontSize: 14,
      },
});
