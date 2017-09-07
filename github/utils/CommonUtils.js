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
}