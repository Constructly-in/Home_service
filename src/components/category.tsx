// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import CategoryButton from '../assets/Buttons/CategoryButton'


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// interface HomescreenProps {
//     navigation: any; // Change 'any' to the actual type if possible
  
//   }
// const category = ({{ navigation }: HomescreenProps}) => {
//   return (
//     <View style={styles.SubContainer}>
      


//         {/* <View style={styles.RightContainer}> */}


//         <View style={styles.Box}>

//           {/* <Text>student</Text> */}

//           <Image source={require('../../../image/Login_AS/student.png')}
//             style={{ width: "90%", height: "90%" }}
//           />
//           <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />
//         </View>

//         <View style={styles.Box}>
//           {/* <Text>Home</Text> */}

//           <Image source={require('../../../image/Login_AS/contractor.png')}
//             style={{ width: "90%", height: "90%" }}
//           />
//           <CategoryButton title={'contactor >>'} onPress={() => navigation.navigate("Student")} />

//         </View>

//         <View style={styles.Box}>
//           {/* <Text>Home</Text> */}

//           <Image source={require('../../../image/Login_AS/homeowner.png')}
//             style={{ width: "90%", height: "90%" }}
//           />
//           <CategoryButton title={'Home-owner >>'} onPress={() => navigation.navigate("Student")} />

//         </View>

//         <View style={styles.Box}>
//           {/* <Text>Home</Text> */}

//           <Image source={require('../../../image/Login_AS/shopowner.png')}
//             style={{ width: "90%", height: "90%" }}
//           />
//           <CategoryButton title={'Retailer  >>'} onPress={() => navigation.navigate("Student")} />


//         </View>

  

      
//       </View>
//   )
// }

// export default category

// const styles = StyleSheet.create({


//     SubContainer: {
//         flex: 40,
//         marginTop: windowHeight * 0.01, // 1% of the screen height
//         height: windowHeight * 0.75, // 75% of the screen height
//         flexWrap: 'wrap',
//         alignContent: 'space-around',
//         // backgroundColor:'white'
//       },
    
//       Box: {
//         padding: windowWidth * 0.02, // 2% of the screen width
//         height: windowHeight * 0.22, // 20% of the screen height
//         width: windowWidth * 0.45, // 40% of the screen width
//         marginTop: windowHeight * 0.07, // 5% of the screen height
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor:'pink'
//       },
// })