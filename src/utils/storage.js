/**
 * 缓存管理类
 */
class Storage {
  // 写入
  set(key, value = "", expire = 0) {
    let ttl = expire > 0 ? Date.now() + expire * 1000 : 0;
    return uni.setStorageSync(key, {
      value,
      ttl,
    });
  }

  // 读取
  get(key, defalut = null) {
    const data = uni.getStorageSync(key);
    if (data && typeof data === "object") {
      // 没有有效期
      if (data.ttl === 0) {
        return data.value;
      }
      return Date.now() > data.ttl ? defalut : data.value;
    }
    return defalut;
  }

  // 删除
  delete(key) {
    return uni.removeStorageSync(key);
  }

  // 清空
  clear() {
    return uni.clearStorageSync();
  }
}

const GlobalStorage = new Storage();

export default GlobalStorage;