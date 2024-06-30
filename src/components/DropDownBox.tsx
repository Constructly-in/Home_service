import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import axios from 'axios';
import color from '../utility/color';

const DropDownBox = () => {
  const [cityData, setCityData] = useState([]);
  const [city, setCity] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          'https://api.countrystatecity.in/v1/countries/IN/states/CT/cities',
          {
            headers: {
              'X-CSCAPI-KEY': 'SFgxd1B4TUtWODl4S0x2aDJHd0lhU1lzcnNrV09OR1pIZmkxcVJuMg=='
            }
          }
        );
        const cityArray = response.data.map(city => ({
          value: city.id,
          label: city.name
        }));
        console.log(cityArray); // Log the city data
        setCityData(cityArray);

        // Find and set the default city (Bhilai)
        const defaultCity = cityArray.find(city => city.label === "Bhilai");
        if (defaultCity) {
          setCity(defaultCity.value);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCities();
  }, []);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle} // Add iconStyle here
        data={cityData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={city}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setCity(item.value);
          setIsFocus(false);
          
        }}
      />
    </View>
  );
};

export default DropDownBox;

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP('3%'),
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dropdown: {
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    // borderRadius: 8,
    // paddingHorizontal: 8
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: color.purple,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor:color.purple
  },
});
