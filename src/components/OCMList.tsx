import { View, FlatList, StyleSheet, Text } from 'react-native';
import React from 'react';
import OCMChargingPoint from '../types/OCMChargingPoint';

type PropsType = {
  data: OCMChargingPoint[];
};

const OCMList = ({ data }: PropsType) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.AddressInfo.AddressLine1}</Text>}
        keyExtractor={(item, index) => item.UUID + index}
      />
    </View>
  );
};

export default OCMList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
