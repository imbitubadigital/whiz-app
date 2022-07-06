import {config} from '@configs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataUserProps} from '@contexts/auth/interfaces';

// export async function settingStorageDeviceInfo(dataStorage: DeviceInfoProps) {
//   await AsyncStorage.setItem(
//     `${config.keyAsyncStorage}:DEVICEINFO`,
//     JSON.stringify(dataStorage),
//   );
// }

export async function settingStorage(dataStorage: DataUserProps) {
  await AsyncStorage.setItem(
    `${config.keyAsyncStorage}:TOKEN`,
    JSON.stringify(dataStorage),
  );
}

export async function settingStorageInitialTour(tour: boolean) {
  await AsyncStorage.setItem(
    `${config.keyAsyncStorage}:INITIALTOUR`,
    JSON.stringify(tour),
  );
}

export async function getStorage() {
  return await AsyncStorage.getItem(`${config.keyAsyncStorage}:TOKEN`);
}
export async function getSearchStorage() {
  return await AsyncStorage.getItem(`${config.keyAsyncStorage}:SEARCH`);
}

export async function removeStorage() {
  await AsyncStorage.multiRemove([`${config.keyAsyncStorage}:TOKEN`]);
}
