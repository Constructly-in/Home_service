import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

const PGListingForm = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission, e.g., send data to the server
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={styles.header}>List Your PG</Text>

      <Controller
        name="propertyType"
        control={control}
        defaultValue=""
        rules={{ required: 'Property type is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Property Type (PG, flat, house, etc.)"
            value={value}
            onChangeText={onChange}
            errorMessage={errors.propertyType ? errors.propertyType.message : ''}
          />
        )}
      />

      <Controller
        name="location"
        control={control}
        defaultValue=""
        rules={{ required: 'Location is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Location (address, neighborhood)"
            value={value}
            onChangeText={onChange}
            errorMessage={errors.location ? errors.location.message : ''}
          />
        )}
      />

      <Controller
        name="numberOfRooms"
        control={control}
        defaultValue=""
        rules={{ required: 'Number of rooms is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Number of Rooms Available"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            errorMessage={errors.numberOfRooms ? errors.numberOfRooms.message : ''}
          />
        )}
      />

      <Controller
        name="amenities"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Input
            placeholder="Amenities (furnished, kitchen, Wi-Fi, etc.)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="rentAmount"
        control={control}
        defaultValue=""
        rules={{ required: 'Rent amount is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Rent Amount"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            errorMessage={errors.rentAmount ? errors.rentAmount.message : ''}
          />
        )}
      />

      <Controller
        name="securityDeposit"
        control={control}
        defaultValue=""
        rules={{ required: 'Security deposit is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Security Deposit"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            errorMessage={errors.securityDeposit ? errors.securityDeposit.message : ''}
          />
        )}
      />

      <Controller
        name="availabilityDate"
        control={control}
        defaultValue=""
        rules={{ required: 'Availability date is required' }}
        render={({ onChange, value }) => (
          <TextInput
            label="Availability Date"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={errors.availabilityDate}
          />
        )}
      />

      <Controller
        name="propertyDescription"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Input
            placeholder="Brief Description of the Property"
            value={value}
            onChangeText={onChange}
            multiline
          />
        )}
      />

      <Controller
        name="specialFeatures"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Input
            placeholder="Special Features or Selling Points"
            value={value}
            onChangeText={onChange}
            multiline
          />
        )}
      />

      <Controller
        name="houseRules"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Input
            placeholder="House Rules"
            value={value}
            onChangeText={onChange}
            multiline
          />
        )}
      />

      <Controller
        name="ownerName"
        control={control}
        defaultValue=""
        rules={{ required: 'Owner’s name is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Owner’s Name"
            value={value}
            onChangeText={onChange}
            errorMessage={errors.ownerName ? errors.ownerName.message : ''}
          />
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        rules={{ required: 'Phone number is required' }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Phone Number"
            value={value}
            onChangeText={onChange}
            keyboardType="phone-pad"
            errorMessage={errors.phoneNumber ? errors.phoneNumber.message : ''}
          />
        )}
      />

      <Controller
        name="emailAddress"
        control={control}
        defaultValue=""
        rules={{ required: 'Email address is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
        render={({ onChange, value }) => (
          <Input
            placeholder="Email Address"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            errorMessage={errors.emailAddress ? errors.emailAddress.message : ''}
          />
        )}
      />

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        buttonStyle={styles.submitButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default PGListingForm;
