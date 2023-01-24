import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './stylesheet';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {cartScreenData} from '../../Redux/Selector/CartSelector';
import {clear} from '../../Redux/Reducers/cartSlice';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartList = useSelector(cartScreenData);
  const [userData, setUserData] = useState(cartList);

  const gotoAddTask = () => {
    navigation.navigate('AddnewTask');
  };
  //   useEffect(() => {
  //     setUserData(cartList);
  //   });
  return (
    <View>
      {/* <Text>Homepage</Text> */}
      <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: 'white',
        }}
        style={{height: 100, paddingTop: 20, paddingBottom: 10}}
        calendarHeaderStyle={{color: 'white'}}
        calendarColor={'#7743CE'}
        dateNumberStyle={{color: 'white'}}
        dateNameStyle={{color: 'white'}}
        highlightDateNumberStyle={{color: 'yellow'}}
        highlightDateNameStyle={{color: 'yellow'}}
        disabledDateNameStyle={{color: 'grey'}}
        disabledDateNumberStyle={{color: 'grey'}}
        startingDate={new Date()}
        onDateSelected={date => {
          console.log(moment(date).format('DD-MM-YYYY'), 'onDateSelected');
          let newArray = [];
          cartList.map(item => {
            let isSameDate = moment(item.date).isSame(
              moment(date).format('DD-MM-YYYY'),
            );
            isSameDate ? (newArray = [...newArray, item]) : null;
          });
          console.log(newArray);
          setUserData(newArray);
        }}
        iconContainer={{flex: 0.1}}
      />

      <View style={{height: '80%'}}>
        <FlatList
          data={userData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={()=>{
            return(
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>No data</Text>
                </View>
            )
          }}
          renderItem={({item}) => {
            // console.log(item);
            return (
              <View style={styles.card}>
                <Text>Name: {item.retailer_name}</Text>
                <Text>Status: {item.status}</Text>
                <Text>Date: {item.date}</Text>
              </View>
            );
          }}
        />
      </View>

      <TouchableOpacity
        onPress={gotoAddTask}
        activeOpacity={0.8}
        style={styles.button}>
        <Text>Add</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={()=>{
            dispatch(clear())
        }}
        activeOpacity={0.8}
        style={styles.button}>
        <Text>Clear data</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Homepage;
