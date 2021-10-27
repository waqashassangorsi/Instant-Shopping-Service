import React, {useState, useEffect} from 'react';
import {View, Image, Text, Pressable, ScrollView, FlatList} from 'react-native';
import colors from '../../../theme/colors';
import {connect} from 'react-redux';
import {getallcategory} from '../../../Redux/Action/Loginaction';
import {UIActivityIndicator} from 'react-native-indicators';
import LoaderModal from 'react-native-modal';
const TopPerformingCategories = ({getallcategory}) => {
  const [category, setcategory] = useState([]);

  const [loading, setLoading] = useState();
  const [isLoaderModalVisible, setLoaderModalVisible] = useState(false);
  const toggleModal = () => {
    setLoaderModalVisible(!isLoaderModalVisible);
  };
  useEffect(() => {
    toggleModal();
    setLoading(true);

    // console.log('fashindata,', fashiondata);
    (async () => {
      const res = await getallcategory();
      setcategory(res.data.data);
      setLoading(false);
      toggleModal();
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        padding: 10,
        backgroundColor: colors.WebGLQuery,
      }}>
      {loading ? (
        <LoaderModal
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          isVisible={isLoaderModalVisible}>
          <View
            style={{
              position: 'absolute',
              padding: 20,
              borderRadius: 50,
              backgroundColor: 'black',
            }}>
            <UIActivityIndicator color="white" />
          </View>
        </LoaderModal>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: colors.WebGLQuery,
          borderBottomWidth: 1,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 12,
            textTransform: 'capitalize',
          }}>
          top performing categories
        </Text>
        <Pressable
          android_ripple={{
            color: colors.black,
            borderless: false,
          }}>
          <Text
            style={{
              fontSize: 10,
              color: colors.gray,
              textTransform: 'uppercase',
            }}>
            See All
          </Text>
        </Pressable>
      </View>

      {/* <View>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: colors.white,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {category.map((item) => (
            <View key={item.id}>
              <View
                android_ripple={{color: colors.white, borderless: false}}
                style={{
                  flex: 1,
                  margin: 2,
                  backgroundColor: colors.white,
                  width: 70,
                  height: 85,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 5,
                }}>
                <Image
                  source={{uri: item.category_image}}
                  resizeMode="cover"
                  style={{
                    width: 115,
                    height: 115,
                  }}
                />
              </View>
              <Text style={{fontSize: 10}}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}
      {/* <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}> */}
      <FlatList
        data={category}
        numColumns={2}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                // width: '40%',
                // margin: 2,
                // backgroundColor: colors.WebGLQuery,
                // borderRadius: 12,
                flexDirection: 'row',

                justifyContent: 'space-between',
                // backgroundColor: 'red',
              }}>
              <Image
                source={{uri: item.category_image}}
                style={{
                  resizeMode: 'contain',
                  width: 130,
                  height: 140,
                  borderRadius: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  textTransform: 'capitalize',
                  textAlign: 'center',
                  // backgroundColor: 'red',
                }}>
                {item.category_name}
              </Text>
            </View>
          </View>
        )}
      />
      {/* <View
          style={{
            flex: 1,
            margin: 2,
            backgroundColor: colors.WebGLQuery,
            borderRadius: 12,
          }}>
          <Image
            source={{uri: category.category_image}}
            style={{
              resizeMode: 'contain',
              width: 110,
              height: 140,
              borderRadius: 10,
            }}
          />
          <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
            gardening
          </Text>
        </View> */}

      {/* <View
          style={{
            flex: 1,
            margin: 2,
            backgroundColor: colors.WebGLQuery,
            borderRadius: 12,
          }}>
          <Image
            source={{uri: category.category_image}}
            style={{
              resizeMode: 'contain',
              width: 110,
              height: 140,
              borderRadius: 10,
            }}
          />
          <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
            fashion
          </Text>
        </View> */}
      {/* <View
          style={{
            flex: 1,
            margin: 2,
            backgroundColor: colors.WebGLQuery,
            borderRadius: 12,
          }}>
          <Image
            source={require('../../../assets/mensWear.png')}
            style={{
              resizeMode: 'contain',
              width: 110,
              height: 140,
              borderRadius: 10,
            }}
          />
          <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
            mens wears
          </Text>
        </View> */}
      {/* </View> */}
      {/* <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}> */}
      {/* <View
          style={{
            flex: 1,
            margin: 2,
            backgroundColor: colors.WebGLQuery,
            borderRadius: 12,
          }}>
          <Image
            source={require('../../../assets/sports.png')}
            style={{
              resizeMode: 'contain',
              width: 110,
              height: 140,
              borderRadius: 10,
            }}
          />
          <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
            sports
          </Text>
        </View> */}
      {/* <View
          style={{
            flex: 1,
            margin: 2,
            backgroundColor: colors.WebGLQuery,
            borderRadius: 12,
          }}>
          <Image
            source={require('../../../assets/kitchen.png')}
            style={{
              resizeMode: 'contain',
              width: 110,
              height: 140,
              borderRadius: 10,
            }}
          />
          <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
            kitchen
          </Text>
        </View> */}
      {/* <View
          android_ripple={{color: colors.white, borderless: false}}
          style={{
            flex: 1,
            margin: 2,
            backgroundColor: colors.WebGLQuery,
            borderRadius: 12,
          }}>
          <Image
            source={require('../../../assets/gaming.png')}
            style={{
              resizeMode: 'contain',
              width: 110,
              height: 140,
              borderRadius: 10,
            }}
          />
          <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
            gaming
          </Text>
        </View> */}
      {/* </View> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {getallcategory})(
  TopPerformingCategories,
);
