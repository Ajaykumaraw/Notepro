import AsyncStorage from '@react-native-async-storage/async-storage';  

export function AsyncStoragefunction(key,value){
        console.log('set storage'+key+''+value)
    const storeData = async (key,value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
          // saving error
        }
      };
}


export function readAsyncStoragefunction(key){
    console.log('get storage'+key)
    const getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          console.log('get storage'+value)
          if (value !== null) {
            // value previously stored
            return value;
          }
        } catch (e) {
          // error reading value
        }
      };

}


export function setItemM(key,data){
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key,data);
}

export function getItemM(key){
  return new Promise((resolve,reject)=>{
    AsyncStorage.getItem(key).then( data =>{
      console.log('in get item',data)
      resolve(JSON.parse(data))
    })
  })
}
