/**
 * User data class
 */
export default class User {
  // ID
  id: number = 0

  // 姓
  familyname: string = ''

  // 名
  firstname: string = ''

  // 姓かな
  familynameKana: string = ''

  // 名かな
  firstnameKana: string = ''

  // メールアドレス
  email: string = ''

  // パスワード
  password: string = 'aaa'

  constructor(user: any = {}) {
    this.id = user.id ?? 0
    this.familyname = user.familyname
    this.firstname = user.firstname
    this.familynameKana = user.familynameKana
    this.firstnameKana = user.firstnameKana
    this.email = user.email
    this.password = user.password
  }
}
