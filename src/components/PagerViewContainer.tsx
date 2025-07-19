import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import PagerView from 'react-native-pager-view';
import OCMList from './OCMList';
import OCMMap from './OCMMap';
import useOCMChargingPoints from '../utils/useOCMChargingPoints';
import GeoLocationType from '../types/GeoLocation';

type PropsType = {
  location: GeoLocationType;
};

const PagerViewContainer = ({ location }: PropsType) => {
  const pagerRef = useRef<PagerView | null>(null);
  const ocmCharginPoints = useOCMChargingPoints(location);

  return (
    <View style={styles.container}>
      <View style={styles.pageButtonContainer}>
        <TouchableOpacity style={styles.pageButton} onPress={() => pagerRef.current?.setPage(0)}>
          <Text style={styles.pageTitleText}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageButton} onPress={() => pagerRef.current?.setPage(1)}>
          <Text style={styles.pageTitleText}>Map</Text>
        </TouchableOpacity>
      </View>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
        ref={pagerRef}
        collapsable={false}
      >
        <OCMList data={ocmCharginPoints} />
        <OCMMap data={ocmCharginPoints} />
      </PagerView>
    </View>
  );
};

export default PagerViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  pageButtonContainer: {
    borderRadius: 20,
    height: 44,
    backgroundColor: 'white',
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
  },
  pageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'lightblue',
    height: '100%',
    paddingHorizontal: 32,
  },
  pageTitleText: {
    color: 'black',
  },
  pagerView: {
    flex: 1,
    marginTop: 8,
  },
  listContainer: {
    flex: 1,
  },
});
