import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const QAScreen = () => {
  const [isViewVisible, setIsViewVisible] = useState({});

  const toggleViewVisibility = (index) => {
    setIsViewVisible(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20, margin: 20, alignItems: 'center' }}>
      <View style={{ }}>
              <Text style={{color:'red', fontSize:30,fontWeight:'bold'}}>Q&A</Text>
            </View>

        {/* 1 */}
        <View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View style={{ width: 320, paddingRight: 5 }}>
              <Text style={styles.text1}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => toggleViewVisibility(1)}>
              {isViewVisible[1] ? (
                <Image style={{ width: 25, height: 25 }} source={require('../image/len.png')} />
              ) : (
                <Image style={{ width: 25, height: 25 }} source={require('../image/xg.png')} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            {isViewVisible[1] && (
              <View style={styles.hiddenView}>
                {/* Content of the hidden view */}
                <Text>A,B,C,D,F rồi cho một ít E.Nên pha vào xô rồi cho máy sục oxy vào thì dung dịch sẽ tan đều và nhanh hơn   </Text>
              </View>
            )}
          </View>
        </View>

        {/* 2 */}
        <View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View style={{ width: 320, paddingRight: 5 }}>
              <Text style={styles.text1}>Tôi có thể giữ dung dịch dưỡng hỗn hợp trong bao lâu?</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => toggleViewVisibility(2)}>
              {isViewVisible[2] ? (
                <Image style={{ width: 25, height: 25 }} source={require('../image/len.png')} />
              ) : (
                <Image style={{ width: 25, height: 25 }} source={require('../image/xg.png')} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            {isViewVisible[2] && (
              <View style={styles.hiddenView}>
                {/* Content of the hidden view */}
                <Text>A,B,C,D,F rồi cho một ít E.Nên pha vào xô rồi cho máy sục oxy vào thì dung dịch sẽ tan đều và nhanh hơn   </Text>
              </View>
            )}
          </View>
        </View>

        {/* 3 */}
        <View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View style={{ width: 320, paddingRight: 5 }}>
              <Text style={styles.text1}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => toggleViewVisibility(3)}>
              {isViewVisible[3] ? (
                <Image style={{ width: 25, height: 25 }} source={require('../image/len.png')} />
              ) : (
                <Image style={{ width: 25, height: 25 }} source={require('../image/xg.png')} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            {isViewVisible[3] && (
              <View style={styles.hiddenView}>
                {/* Content of the hidden view */}
                <Text>A,B,C,D,F rồi cho một ít E.Nên pha vào xô rồi cho máy sục oxy vào thì dung dịch sẽ tan đều và nhanh hơn   </Text>
              </View>
            )}
          </View>
        </View>

        {/* 4 */}
        <View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View style={{ width: 320, paddingRight: 5 }}>
              <Text style={styles.text1}>Các chất điểu chỉnh tăng trưởng có được sử dụng trong các sản phẩm Plants không?</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => toggleViewVisibility(4)}>
              {isViewVisible[4] ? (
                <Image style={{ width: 25, height: 25 }} source={require('../image/len.png')} />
              ) : (
                <Image style={{ width: 25, height: 25 }} source={require('../image/xg.png')} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            {isViewVisible[4] && (
              <View style={styles.hiddenView}>
                {/* Content of the hidden view */}
                <Text>A,B,C,D,F rồi cho một ít E.Nên pha vào xô rồi cho máy sục oxy vào thì dung dịch sẽ tan đều và nhanh hơn   </Text>
              </View>
            )}
          </View>
        </View>

        {/* 5 */}
        <View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View style={{ width: 320, paddingRight: 5 }}>
              <Text style={styles.text1}>Các sản phẩm Planta có phải là hữu cơ không?</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => toggleViewVisibility(5)}>
              {isViewVisible[5] ? (
                <Image style={{ width: 25, height: 25 }} source={require('../image/len.png')} />
              ) : (
                <Image style={{ width: 25, height: 25 }} source={require('../image/xg.png')} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            {isViewVisible[5] && (
              <View style={styles.hiddenView}>
                {/* Content of the hidden view */}
                <Text>A,B,C,D,F rồi cho một ít E.Nên pha vào xô rồi cho máy sục oxy vào thì dung dịch sẽ tan đều và nhanh hơn   </Text>
              </View>
            )}
          </View>
        </View>

      </View>

    </ScrollView>
  );
};

export default QAScreen;

const styles = StyleSheet.create({
  hiddenView: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginTop: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    margin: 20
  },
  text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
