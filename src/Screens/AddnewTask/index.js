import {Text, TextInput, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './stylesheet';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/Reducers/cartSlice';
import {useNavigation} from '@react-navigation/native';

const AddnewTask = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [retailer_name, setRetailer_name] = useState('');
  const [status, setStatus] = useState('Status');
  const [date, setDate] = useState(new Date());
  const [statusData, SetStatusData] = useState(['Started', 'Not Started']);
  const [showStaus, setShowStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const addTask = () => {
    if (retailer_name === '') {
      alert('Please fill retailer name');
    } else if (status === 'Status') {
      alert('Choose a status');
    } else {
      let task = {
        retailer_name: retailer_name,
        status: status,
        date: moment(date).format('DD-MM-YYYY'),
      };
      console.log(task);
      dispatch(addToCart(task));
      alert('Added to list successfully.');
      navigation.goBack();
    }
  };



  return (
    <View>
      <TextInput
        value={retailer_name}
        onChangeText={setRetailer_name}
        style={{...styles.inputstyle, marginTop: 10}}
        placeholder="Add a retailer name"
        autoCapitalize="none"
        autoComplete="off"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setShowStatus(prev => !prev);
        }}
        style={{...styles.inputstyle, marginTop: 10}}>
        <Text>{status}</Text>
      </TouchableOpacity>

      {showStaus ? (
        <FlatList
          data={statusData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setStatus(item), setShowStatus(prev => !prev);
                }}
                style={styles.statusCard}>
                <Text style={{margin: 10}}> {item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : null}

      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}
        activeOpacity={0.8}
        style={{...styles.inputstyle, marginTop: 10}}>
        <Text>{moment(date).format('DD-MM-YYYY')}</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        androidVariant="nativeAndroid"
        date={date}
        mode="date"
        title="Date"
        minimumDate={new Date()}
        // maximumDate={new Date()}
        open={open}
        onConfirm={date => {
          setDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <TouchableOpacity
        onPress={addTask}
        activeOpacity={0.8}
        style={styles.button}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddnewTask;
