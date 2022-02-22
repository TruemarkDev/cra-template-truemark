class LocalStorageManager {
  static getItem(key) {
    const data = localStorage.getItem(key);

    if (data) return JSON.parse(data);

    return data;
  }

  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

export default LocalStorageManager;
