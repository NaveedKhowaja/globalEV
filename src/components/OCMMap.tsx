import { View, StyleSheet } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import OCMChargingPoint from '../types/OCMChargingPoint';

type PropsType = {
  data: OCMChargingPoint[];
};

const OCMMap = ({ data }: PropsType) => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapView}
      />
    </View>
  );
};

export default OCMMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    height: '100%',
  },
});
