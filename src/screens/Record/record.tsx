import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {Calendar, DateData} from 'react-native-calendars/src';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from 'react-native-screens/native-stack';
import MainLayout from 'src/components/Layout/main.layout';

const Record = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RecordStackParamsType>>();
  const [date, setDate] = React.useState<DateData>();
  const [markedDates, setMarkedDates] = React.useState({});
  const [logs, setLogs] = React.useState([]);

  interface IMarkedDates {
    [index: string]: {
      selected?: boolean;
      marked?: boolean;
    };
  }

  return (
    <MainLayout>
      <View>
        <Text style={[styles.text, {padding: 10}]}>
          {format(date ? new Date(date.dateString) : new Date(), 'PPP', {
            locale: ko,
          })}
        </Text>
        <Calendar
          markedDates={markedDates}
          style={styles.calendar}
          onDayPress={day => {
            setDate(day);
            const obj: IMarkedDates = {};
            obj[day.dateString] = {
              selected: true,
            };
            setMarkedDates(obj);
          }}
          theme={{
            selectedDayBackgroundColor: '#009688',
            arrowColor: '#009688',
            dotColor: '#009688',
            todayTextColor: '#009688',
          }}
        />
        {logs.length === 0 && (
          <View style={{marginTop: 20, marginHorizontal: 10}}>
            <Text style={styles.text}>작성된 글이 없어요</Text>
            <Pressable
              style={{
                backgroundColor: 'red',
                width: 54,
                padding: 2,
                marginTop: 10,
              }}
              onPress={() => navigation.navigate('RecordWrite')}>
              <Text style={[styles.text]}>작성하기</Text>
            </Pressable>
          </View>
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  calendar: {},
  text: {color: 'white'},
});

export default Record;
