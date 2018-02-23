export default class Utils {
  static updateArray(item, arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        return arr;
      }
    }
    arr.push(item);
    return arr;
  }
  static isEqualArr (arr1, arr2) {
    if(!(arr1 && arr2)) return false;
    if(!(arr1.length === arr2.length)) return false;
    let result = true;
    for(let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        break;
      }
    }
    return result;
  }
  static cloneArr (arr1) {
    let  arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
      arr2.push(arr1[i]);
    }
    return arr2;
  }
}