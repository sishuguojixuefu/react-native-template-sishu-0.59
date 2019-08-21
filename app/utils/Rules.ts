export default {
  /**
   * 用户名正则
   */
  username: /^[\u4e00-\u9fa5A-Za-z ]{2,20}$/,
  /**
   * 密码正则
   */
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
}
