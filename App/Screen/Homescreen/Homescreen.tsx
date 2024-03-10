import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MyButton from '../../../src/assets/Component/MyButton'
import CategoryButton from '../../../src/assets/Component/CategoryButton'
import color from '../../utility/color'

import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface HomescreenProps {
  navigation: any; // Change 'any' to the actual type if possible
  
}


const Homescreen = ({navigation}:HomescreenProps) => {
  return (
    <LinearGradient start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#000000', '#20232C']}
      style={styles.Container}>

           <View style={styles.Header}>
              <Text style={styles.Title}>HYY..</Text>
              <Text style={styles.SubTitle}>SEE FEATURES OF :-</Text>
              
            </View>

            <View style={styles.SubContainer}>

                {/* <View style={styles.RightContainer}> */}
                 

                      <View style={styles.Box}>
                    
                          {/* <Text>student</Text> */}

                          <Image source={require('../../../image/Login_AS/student.png')}
                          style ={{width:"90%" , height:"90%" }}
                          />
                          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />
                      </View>

                      <View style={ styles.Box}>
                          {/* <Text>Home</Text> */}

                          <Image source={require('../../../image/Login_AS/contractor.png')}
                          style ={{width:"90%" , height:"90%" }}
                          />
                          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />

                      </View>

                      <View style={ styles.Box}>
                          {/* <Text>Home</Text> */}

                          <Image source={require('../../../image/Login_AS/homeowner.png')}
                          style ={{width:"90%" , height:"90%" }}
                          />
                          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />

                      </View>

                      <View style={styles.Box}>
                          {/* <Text>Home</Text> */}

                          <Image source={require('../../../image/Login_AS/shopowner.png')}
                          style ={{width:"90%" , height:"90%" }}
                          />
                          <CategoryButton title={'BUyer  >>'} onPress={() => navigation.navigate("Student")} />


                      </View>

                {/* </View> */}

                {/* <View style={styles.LeftContainer}>
                  
                  
                     <View style={styles.ShopOwnerContainer}>
                        <Text>shop</Text>
                     </View>

                     <View style={styles.ShopOwnerContainer}>
                        <Text>contractor</Text>
                     </View>

                </View> */}

               

                {/* <View style={styles.ShopOwnerContainer}>
                  <Text>Homescreen</Text>
                </View> */}

            </View>
    </LinearGradient>

  )
}

export default Homescreen

const styles = StyleSheet.create({
  Container: {
    // Remove fixed height and width
    flex: 1,
  },

  Title: {
    fontSize: RFValue(25), // Using responsive font size
    fontFamily: 'Poppins-ExtraBold',
    color: color.white,
  },
  
  SubTitle: {
    fontSize: RFValue(30), // Using responsive font size
    fontFamily: 'Poppins-ExtraBold',
    color: color.Lightgrey,
  },

  Header: {
    height: windowHeight * 0.2, // 20% of the screen height
    paddingLeft: windowWidth * 0.1, // 10% of the screen width
    paddingTop: windowHeight * 0.07, // 5% of the screen height
    // backgroundColor:"red"
  },

  SubContainer: {
    marginTop: windowHeight * 0.01, // 1% of the screen height
    height: windowHeight * 0.75, // 75% of the screen height
    flexWrap: 'wrap',
    alignContent: 'space-around',
    // backgroundColor:'white'
  },

  Box: {
    padding: windowWidth * 0.02, // 2% of the screen width
    height: windowHeight * 0.22, // 20% of the screen height
    width: windowWidth * 0.45, // 40% of the screen width
    marginTop: windowHeight * 0.07, // 5% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
});