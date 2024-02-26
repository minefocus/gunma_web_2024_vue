import { validateUsernameForUserId, validPassword, validMailAddress, toSBC, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validateUsernameForUserId', () => {
    // 入参5位半角字符串
    expect(validateUsernameForUserId('admin')).toBe(true)
    // 入参半角字母大小写20位
    expect(validateUsernameForUserId('adminUsernamePasswor')).toBe(true)
    // 入参半角数字字母大小写20位
    expect(validateUsernameForUserId('12345UsernamePasswor')).toBe(true)
    // 入参半角数字20位
    expect(validateUsernameForUserId('12345678901234567890')).toBe(true)
    // 入参四位字母
    expect(validateUsernameForUserId('admi')).toBe(false)
    // 入参四位数字
    expect(validateUsernameForUserId('1234')).toBe(false)
    // 入参21位半角字母大小写
    expect(validateUsernameForUserId('adminUsernamePassword')).toBe(false)
    // 入参数字21位
    expect(validateUsernameForUserId('123456789012345678900')).toBe(false)
    // 入参字母加符号5位以上
    expect(validateUsernameForUserId('adm@#if')).toBe(false)
    // 入参符号5位以上
    expect(validateUsernameForUserId('!^&@#*)')).toBe(false)
    // 入参全角数字5位以上
    expect(validateUsernameForUserId('５５５８８８')).toBe(false)
    // 入参全角字母5位以上
    expect(validateUsernameForUserId('ａｄｍｉｎ')).toBe(false)
    // 入参全角数字字母5位以上
    expect(validateUsernameForUserId('ａ１２３ｂ４Ｃ')).toBe(false)
    // 入参半角数字加全角数字字母5位以上
    expect(validateUsernameForUserId('ａ12３ｂ４Ｃ')).toBe(false)
    // 入参半角字母加全角数字字母5位以上
    expect(validateUsernameForUserId('adm１３ｂ４Ｃ')).toBe(false)
    // 入参半角字母数字加全角字母数字5位以上
    expect(validateUsernameForUserId('adm11１３ｂ４Ｃ')).toBe(false)
    // 输入 かなか5位以上
    expect(validPassword('かなかかなかかなか')).toBe(false)
    // 输入 メセッジ5位以上
    expect(validPassword('メセッジメセッジメセッジ')).toBe(false)
  })
  it('validPassword', () => {
    // 规则 8-20位
    // 如此那8位半角字母数字
    expect(validPassword('admin128')).toBe(true)
    // 入参20位半角数字字母符号
    expect(validPassword('12345UsernamePass@#%')).toBe(true)
    // 入参8位以上半角数字符号
    expect(validPassword('128(*&#$%')).toBe(true)
    // 入参8位以上字母符号
    expect(validPassword('effwe(*&#$%')).toBe(true)
    // 入参8位以上半角数字字母符号
    expect(validPassword('#$%12d8(*dhjhj%')).toBe(true)
    // 入参字母7位
    expect(validPassword('adminaa')).toBe(false)
    // 入参 24位半角英数字符号
    expect(validPassword('admin454546!@#$!$%$%$^#a')).toBe(false)
    // 入参8位字母
    expect(validPassword('adminaaa')).toBe(false)
    // 入参8位数字
    expect(validPassword('12345678')).toBe(false)
    // 入参8位符号
    expect(validPassword('!@#$%^&*')).toBe(false)
    // 入参全角字母8位以上
    expect(validPassword('ａｄｍｉｎａｄｍｉｎ')).toBe(false)
    // 入参全角数字8位以上
    expect(validPassword('１２３４５６７８')).toBe(false)
    // 入参全角符号8位以上
    expect(validPassword('！＠#＄％＾＆＊（）')).toBe(false)
    // 入参全角符号字母8位以上
    expect(validPassword('！＠#＄ａｄｍｉｎ')).toBe(false)
    // 入参全角数字符号8位以上
    expect(validPassword('１２３４５６＾＆＊（）')).toBe(false)
    // 入参全角英数字8位以上
    expect(validPassword('ａｍｉｎ４５６７８')).toBe(false)
    // 入参全角字母 半角数字八位以上
    expect(validPassword('ａｍｉｎ789456')).toBe(false)
    // 入参全角字母 半角符号八位以上
    expect(validPassword('ａｍｉｎ!@#$$')).toBe(false)
    // 入参全角数字 半角字母八位以上
    expect(validPassword('７８９４admin')).toBe(false)
    // 入参全角数字 半角符号八位以上
    expect(validPassword('７８９４!@#$')).toBe(false)
    // 入参全角符号 半角字母八位以上
    expect(validPassword('！＠#＄admin')).toBe(false)
    // 入参全角符号 半角数字八位以上
    expect(validPassword('！＠#＄123456')).toBe(false)
    // 数字6 之后携带所有符号八位以上
    expect(validPassword('6?!\d+$)(?![~`!@#$%')).toBe(true)
    expect(validPassword('6;"\'<>,.?/\\]+$')).toBe(true)
    expect(validPassword('6^&*()_+\-={}[\]|:')).toBe(true)
    // 输入 かなか八位以上
    expect(validPassword('かなかかなかかなか')).toBe(false)
    // 输入 メセッジ八位以上
    expect(validPassword('メセッジメセッジメセッジ')).toBe(false)
  })
  it('validMailAddress', () => {
    // @之前携带 半角字母符号
    expect(validMailAddress('mr.zlb@pactera.com')).toBe(true)
    // @之后携带半角字母数字
    expect(validMailAddress('mr.zlb#$%^@pactera8.com9')).toBe(true)
    // @之前输入64位半角
    expect(validMailAddress('mr.zlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbz@pactera.com')).toBe(true)
    // @之前输入65位半角
    expect(validMailAddress('mr.zlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzlbzl@pactera.com')).toBe(false)
    // @之前不输入
    expect(validMailAddress('@pactera8.com9')).toBe(false)
    // @之后有符号
    expect(validMailAddress('mr.zlb@pactera.$%^com')).toBe(false)
    // 字符串 无@
    expect(validMailAddress('admina')).toBe(false)
    // @之前全角字母输入
    expect(validMailAddress('ａｄｍｉｎ@pactera.com')).toBe(false)
    // @之前全角数字输入
    expect(validMailAddress('１２３４５@pactera.com')).toBe(false)
    // @之前全角符号输入
    expect(validMailAddress('！＠#＄％＾@pactera.com')).toBe(false)
    // @之后.com之前全角字母输入
    expect(validMailAddress('admin@ｐａｃｔｅｒａ.com')).toBe(false)
    // 结尾com 全角输入
    expect(validMailAddress('admin@pactera.ｃｏｍ')).toBe(false)
    // 全角@符号输入
    expect(validMailAddress('admin＠pactera.com')).toBe(false)
    // @之前所有符号
    expect(validMailAddress('!#$%&\'*+\\\\/=?^_`{|}~-@pactera.com')).toBe(true)
    // @之前"かな"
    expect(validMailAddress('かな@pactera.com')).toBe(false)
    // @之前"メセッジ"
    expect(validMailAddress('メセッジ@pactera.com')).toBe(false)
    // @之后.com之前 "かな"
    expect(validMailAddress('mr.zlb@pacteraかな.com')).toBe(false)
    // @之后.com之前 "メセッジ"
    expect(validMailAddress('mr.zlb@pacteraセッ.com')).toBe(false)
    // 结尾com "かな"
    expect(validMailAddress('mr.zlb@pactera.かな')).toBe(false)
    // 结尾com"メセッジ"
    expect(validMailAddress('mr.zlb@pactera.メセッジ')).toBe(false)
  })
  it('toSBC', () => {
    // 全角空格输入
    expect(toSBC('　')).toBe(' ')
    // 全角字母输入
    expect(toSBC('ａｓｄ')).toBe('asd')
    // 全角数字输入
    expect(toSBC('１２３')).toBe('123')
    // 全角符号输入
    expect(toSBC('！＄')).toBe('!$')
    // 半角英数字符号输入
    expect(toSBC('mr.zlb#$%^@pactera8.com9')).toBe('mr.zlb#$%^@pactera8.com9')
    // 全半角英数字符号混合输入
    expect(toSBC('mr.zｌｋ１b#$%^@pactera8.com9')).toBe('mr.zlk1b#$%^@pactera8.com9')
    // 半角所有符号输入
    expect(toSBC('～！＠＃＄％＾＆＊（）＿＋｀－＝')).toBe('~!@#$%^&*()_+`-=')
    // 输入 "かな"
    expect(toSBC('かな')).toBe('かな')
    // 输入 "メセッジ"
    expect(toSBC('メセッジ')).toBe('メセッジ')
  })
  it('isExternal', () => {
    expect(isExternal('https:')).toBe(true)
    expect(isExternal('mailto:')).toBe(true)
    expect(isExternal('tel:')).toBe(true)
    expect(isExternal('mr.zｌｋb#$%^@pactera8.com9')).toBe(false)
  })
})
