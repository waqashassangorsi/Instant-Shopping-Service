import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import colors from '../../../theme/colors';


// const images = [
//   {id: 1, src: '../../../assets/miniDress.png', title: 'Mini Dress', description: 'Black',price:'$250.99'}
// ];

const CreateCart = () => {
    return (
      <View style={{flex: 1, backgroundColor: colors.white, margin: 10}}>
        <View
          style={{
            flex: 1,
            // backgroundColor: colors.WebGLQuery,
            marginTop: 10,
            borderWidth: 2,
            borderColor: colors.WebGLQuery,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FAFAFA',
              borderBottomWidth: 2,
              borderColor: colors.WebGLQuery,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/miniDress.png')}
                style={{width: 73, height: 73}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}>Mini Dress</Text>
                <Text style={{fontSize: 10}}>Black</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                    marginTop: 10,
                  }}>
                  $250.99
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity style={{left: 40}}>
                <Image
                  source={require('../../../assets/cancel.png')}
                  style={{width: 13, height: 13}}
                  tintColor={colors.WebGLQuery}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  right: 25,
                }}>
                <TouchableOpacity>
                  <Text style={{fontSize: 20, color: colors.WebGLQuery}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    margin: 15,
                    paddingHorizontal: 5,
                    borderColor: colors.WebGLQuery,
                    elevation:1
                  }}>
                  <Text>5</Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.WebGLQuery,
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FAFAFA',
              borderBottomWidth: 2,
              borderColor: colors.WebGLQuery,
            }}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/miniDress.png')}
                style={{width: 73, height: 73}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}>Mini Dress</Text>
                <Text style={{fontSize: 10}}>Black</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                    marginTop: 10,
                  }}>
                  $250.99
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity style={{left: 40}}>
                <Image
                  source={require('../../../assets/cancel.png')}
                  style={{width: 13, height: 13}}
                  tintColor={colors.WebGLQuery}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  right: 25,
                  // marginRight:20
                }}>
                <TouchableOpacity>
                  <Text style={{fontSize: 20, color: colors.WebGLQuery}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    margin: 15,
                    paddingHorizontal: 5,
                    borderColor: colors.WebGLQuery,
                    elevation:1
                  }}>
                  <Text>5</Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.WebGLQuery,
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FAFAFA',
              borderBottomWidth: 2,
              borderColor: colors.WebGLQuery,
            }}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/miniDress.png')}
                style={{width: 73, height: 73}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}>Mini Dress</Text>
                <Text style={{fontSize: 10}}>Black</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                    marginTop: 10,
                  }}>
                  $250.99
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity style={{left: 40}}>
                <Image
                  source={require('../../../assets/cancel.png')}
                  style={{width: 13, height: 13}}
                  tintColor={colors.WebGLQuery}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  right: 25,
                  // marginRight:20
                }}>
                <TouchableOpacity>
                  <Text style={{fontSize: 20, color: colors.WebGLQuery}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    margin: 15,
                    paddingHorizontal: 5,
                    borderColor: colors.WebGLQuery,
                    elevation:1
                  }}>
                  <Text>5</Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.WebGLQuery,
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 10,
            }}>
            <Text style={{fontSize: 16}}>Total</Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.greenColor,
                marginHorizontal: 10,
              }}>
              $6,274.75
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: colors.WebGLQuery,
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            margin: 10,
          }}>
          <Text style={{fontSize: 12, color: colors.WebGLQuery}}>
            Continue shopping
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor:colors.greenColor,
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            marginHorizontal:10
          }}>
          <Text style={{fontSize: 12, color: colors.white}}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    );
}

export default CreateCart;
