/*
 * @Author: 吴占超
 * @Date: 2019-04-26 14:23:49
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-06-04 10:54:38
 */
import { validKey } from './validate.js';

export default class StorageUtils {
  /**
   * 获取本地item json实例化
   *
   * @static
   * @param {String} [key=validKey()]
   * @returns
   *
   * @memberOf StorageUtils
   */
  static getLocalItem (key = validKey()) {
    let value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return value;
  }

  /**
   * 存储本地item json实力化
   *
   * @static
   * @param {String} [key=validKey()]
   * @param {Object} [value=validKey()]
   *
   * @memberOf StorageUtils
   */
  static setLocalItem (key = validKey(), value = validKey()) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 清空所有 or 指定 key 删除
   *
   * @static
   * @param {String} key
   *
   * @memberOf StorageUtils
   */
  static clearLocal (key) {
    !key ? localStorage.clear() : localStorage.removeItem(key);
  }

  /**
   * 获取会话session item
   *
   * @static
   * @param {String} [key=validKey()]
   * @returns
   *
   * @memberOf StorageUtils
   */
  static getSessionItem (key = validKey()) {
    let value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return value;
  }

  /**
   * 存储会话session item
   *
   * @static
   * @param {String} [key=validKey()]
   * @param {Object} [value=validKey()]
   *
   * @memberOf StorageUtils
   */
  static setSessionItem (key = validKey(), value = validKey()) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 清空会话
   *
   * @static
   * @param {String} key
   *
   * @memberOf StorageUtils
   */
  static clearSession (key) {
    !key ? sessionStorage.clear() : sessionStorage.removeItem(key);
  }
}
