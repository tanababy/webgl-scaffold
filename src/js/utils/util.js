export class Util {
  constructor() {
    this._instance = null;
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new Util();
    }

    return this._instance;
  }

  static random(min, max) {
    return Math.random() * (max - min) + min;
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomArr(arr) {
    return arr[this.randomInt(0, arr.length - 1)];
  }

  static shuffle(arr) {
    let i = arr.length;
    while (--i) {
      let j = Math.floor(Math.random() * (i + 1));
      if (i == j) continue;
      let k = arr[i];
      arr[i] = arr[j];
      arr[j] = k;
    }
  }

  static clamp(val, min, max) {
    return Math.min(max, Math.max(val, min));
  }

  static map(num, fromMin, fromMax, toMin, toMax) {
    if (num <= fromMin) return toMin;
    if (num >= fromMax) return toMax;

    const p = (toMax - toMin) / (fromMax - fromMin);
    return (num - fromMin) * p + toMin;
  }

  static mix(x, y, n) {
    return x * (1 - n) + y * n;
  }

  static radian(degree) {
    return (degree * Math.PI) / 180;
  }

  static degree(radian) {
    return (radian * 180) / Math.PI;
  }
}
