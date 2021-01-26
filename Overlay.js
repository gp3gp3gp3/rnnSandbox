import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

const {width} = Dimensions.get('window');

const Overlay = gestureHandlerRootHOC(() => {
  return (
    <View
      style={{
        alignSelf: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'space-between',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          Navigation.dismissAllOverlays();
        }}
        style={{
          backgroundColor: '#4a4a4a',
          width,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        <View style={{padding: 20}}>
          <Text style={{color: 'white'}}>Im an overlay</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});

export default Overlay;
