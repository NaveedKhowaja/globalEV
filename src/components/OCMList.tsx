import { FlatList, Text } from 'react-native';
import React from 'react';
import OCMChargingPoint from '../types/OCMChargingPoint';

type PropsType = {
  data: OCMChargingPoint[];
};

const OCMList = ({ data }: PropsType) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.AddressInfo.Title}</Text>}
      keyExtractor={(item, index) => item.UUID + index}
    />
  );
};

export default OCMList;
