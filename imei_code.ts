// install device info npm install react-native-device-info

import DeviceInfo from 'react-native-device-info';

// link the native module to the pc react-native link react-native-device-info

// Get the IMEI code
const imei = DeviceInfo.getImei();

console.log('IMEI Code: ', imei);