// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-community/async-storage';

// export async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     getfcmToken();
//   }
// }
// const getfcmToken = async () => {
//   let fcmToken = await AsyncStorage.getItem('fcmToken');
//   console.log(`the old token`, fcmToken);
//   if (!fcmToken) {
//     try {
//       const fcmToken = await messaging().getToken();
//       if (fcmToken) {
//         console.log(`the new generated token `, fcmToken);
//         await AsyncStorage.setItem('fcmToken');
//       }
//     } catch (error) {
//       console.log(`error raised in fcm token`, error);
//     }
//   }
// };
// export const notificationListener = async ({navigation}) => {

//   messaging().onNotificationOpenedApp((remoteMessage) => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//   });
//   messaging().onMessage(async (remoteMessage) => {
//     if (remoteMessage.data.name) {
//       navigation.navigate('CreateCart');
//     }
//     console.log(`received in foreground`, remoteMessage.data.name);
//   });
//   messaging()
//     .getInitialNotification()
//     .then((remoteMessage) => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });
// };
