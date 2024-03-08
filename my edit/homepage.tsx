import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MyButton from '../../../src/assets/Component/MyButton'
import CategoryButton from '../../../src/assets/Component/CategoryButton'
import color from '../../utility/color'

const Homepage = ({navigation}) => {
  return (
    <LinearGradient start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#000000', '#20232C']}
      style={styles.Container}>

           <View style={styles.Header}>
              <Text style={styles.TItle}>HYY..</Text>
              <Text style={styles.SubTitle}>SEE FEATURES OF :-</Text>
              
            </View>

            <View style={styles.SubContainer}>

                {/* <View style={styles.RightContainer}> */}
                 

                      <View style={styles.Box}>
                    
                          {/* <Text>student</Text> */}

                          <Image source={require('../image/Login_AS/student.png')}
                          style ={{width:"110%" , height:"110%" }}
                          />
                          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />
                      </View>

                      <View style={[styles.HomeOwnerContainer, styles.Box]}>
                          {/* <Text>Home</Text> */}

                          <Image source={require('../image/Login_AS/contractor.png')}
                          style ={{width:"100%" , height:"100%" }}
                          />
                          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />

                      </View>

                      <View style={[styles.HomeOwnerContainer, styles.Box]}>
                          {/* <Text>Home</Text> */}

                          <Image source={require('../image/Login_AS/homeowner.png')}
                          style ={{width:"100%" , height:"100%" }}
                          />
                          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />

                      </View>

                      <View style={[styles.HomeOwnerContainer, styles.Box]}>
                          {/* <Text>Home</Text> */}

                          <Image source={require('../image/Login_AS/shopowner.png')}
                          style ={{width:"110%" , height:"100%" }}
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

export default Homepage

const styles = StyleSheet.create({

  Container: {
    // flex: 1,
  },

  TItle:{
     fontSize:25,
    fontFamily:'Poppins-ExtraBold',
    color:color.white,
  },
  SubTitle:{
    fontSize:40,
    fontFamily:'Poppins-ExtraBold',
    color:"#ededed"
  },

  Header: {
    // flex: 1,
    
    height:175,
    paddingLeft:40,
    paddingTop:40
  },

  SubContainer:{
    // flex:7,
    // width:410,
  // backgroundColor:'white',
    // borderWidth:6,
    // borderColor:'red',

    marginTop:10,
    height:605,
    flexWrap:'wrap',
    // justifyContent:"center",
    alignContent:'space-around',

  },

  Box:{
    // flex:1,
    // backgroundColor:"pink",
    padding:10,
    height:210,
    width:180,
    marginTop:60,
    justifyContent:"center",
    alignItems:"center"
  },

  // LeftContainer:{
  //   flex:1,
  //   flexWrap:'wrap',
  //   flexDirection:'column',
    
    
  //   // backgroundColor:'pink'

  // },

  // RightContainer:{
  //   flex:1,
  //   flexWrap:'wrap',
  //   flexDirection:'column',
    
  //   // backgroundColor:'black'
  // },

  // Student_Container:{
  //   flex:1,
  //   backgroundColor:'pink'
  // },

  // Contractor_Container:{
  //   flex:1,
  //   backgroundColor:'red'
  // },

  // HomeOwnerContainer:{
  //   flex:1,
  //   backgroundColor:'green'
  // },

  // ShopOwnerContainer:{
  //   flex:1,
  //   backgroundColor:'brown'
  // },

})