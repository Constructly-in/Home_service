import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../../../../../App/utility/color'
import MyButton from '../../../Component/MyButton'
import Booknow from '../../../Component/Booknow'
import LinearGradient from 'react-native-linear-gradient'

const InterShip = () => {
  return (
    <View style={styles.Bg}>

      <Text style={styles.headingText}>
        INTERSHIP
      </Text>
      <View style={styles.container}>



        <View style={styles.cards}>
          <Image
            source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/Feature.jpg')}
            style={styles.CardImage}
          />

          {/* <View style={styles.cardBody}> */}
          <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#242831', '#414345']}
            style={styles.cardBody}>

            <Text style={styles.cardtitle}>Toursist place </Text>

            {/* <Text style = {styles.cardLable}> place where no one can visite</Text> */}
            <Text style={styles.cardDescription}>toursist place  are the peace plac e apriioshyajh ioihusah kjbb 8uhkj gfiouh jnciulowsagtf nb erifgi dudgiufnb</Text>

            {/* <Text style = {styles.cardFooter}>toursist place </Text> */}
            <Booknow title={"Book now"} onPress={undefined} />

          </LinearGradient>
          {/* </View> */}

        </View>


      </View>

    </View>
  )
}

export default InterShip


const styles = StyleSheet.create({
 

  headingText: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 20,
    paddingHorizontal: 20,
    color: color.white,
    fontFamily: "Cardo-Bold",

  },



  container: {
    flex: 1,
    alignItems: "center"
  },

  cards: {
    height: 420,
    width: 380,
    marginVertical: 9,
    marginHorizontal: 12,
    borderRadius: 10,

    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: color.white,
    elevation: 5,


  },


  CardImage: {
    height: "51%",
    width: "100%",
    //   resizeMode:"contain",
    justifyContent: "center",
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },

  cardBody: {
    paddingHorizontal: 15,
    flex: 1,
    flexGrow: 1
  },

  cardtitle: {
    color: color.white,
    fontFamily: "BebasNeue-Regula",
    fontSize: 24,
    // fontWeight: "600",
    paddingTop: 10
  },


  cardDescription: {
    color: color.white,
    fontSize: 15,
    fontWeight: "500",
    paddingVertical: "5%"
  },



})
