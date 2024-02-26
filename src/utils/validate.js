import store from '@/store'
import {decrypt} from '../utils/jse'
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// export function validUsername(str) {
//   // const valid_map = ['admin', 'editor', 'iyo_user']
//   // return valid_map.indexOf(str.trim()) >= 0
//   return /^[\x00-\xff]{1,10}$/.test(str)
// }
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 半角英数 动态长度 校验
export function checkHalfAngleLength(str, length) {
  if (/^[0-9a-zA-Z]*$/.test(str) && str.length <= length) {
    return true
  } else {
    return false
  }
}

/**
 * @param {string} str
 * @param {int} length
 * @returns {Boolean}
 */
// 半角英数 动态长度 校验
export function checkHalfAngleFixLength(str, length) {
  if (/^[0-9a-zA-Z]*$/.test(str) && str.length === length) {
    return true
  } else {
    return false
  }
}
// 半角数 动态长度 校验
export function checkNumxLength(str, length) {
  if (/^[0-9]*$/.test(str) && str.length < length) {
    return false
  } else {
    return true
  }
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 半角英数
export function checkHalfAngle(str) {
  return /^[0-9a-zA-Z]*$/.test(str)
}
// 半角数
export function checkHalNum(str) {
  return /^[0-9]*$/.test(str)
}
//全角 绘表情 判断
export function PATTERFULL(str) {
  return /^[\uFF01-\uFF5E\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FFF\uF900-\uFAFF々〃]+$/.test(str)
}
export function checkHal02(str) {
  return /[^\u30A0-\u30FF\u3040-\u309F]/.test(str)
}
// /[^\u30A0-\u30FF\u3040-\u309Fa-zA-Zａ-ｚＡ-Ｚ]/g
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 用户名校验
export function validateUsernameForUserId(str) {
  return /^[0-9a-zA-Z]{0,20}$/.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// ユーザー識別子校验
export function validateAuthAccountId(str) {
  return /^[0-9a-zA-Z]{0,255}$/.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// ユーザID
export function validateUserID(str) {
  return /^[0-9a-zA-Z]{0,32}$/.test(str)
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 密码校验
export function validPassword(str) {
  return /^(?![a-zA-Z]+$)(?!\d+$)(?![~`!@#$%^&*()_+\-={}[\]|:;''<>,.?/\\]+$)[a-zA-Z~`!@#$%^&*()_+\-={}[\]|:;''<>,.?/\\\d]{8,20}$/.test(str)
}
// 半角英数记号
export function enNumsymbol(str) {
  return /^[A-Za-z0-9~`!@#$%^&*()_+\-={}[\]|:;''<>,.?/\\]+$/.test(str)
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 邮箱校验
export function validMailAddress(str) {
  return  /^[a-zA-Z0-9\.!#\$%&'\*\+\/=\?\^_`\{\|\}~-]{1,}@([a-zA-Z0-9\.!#\$%&'\*\+\/=\?\^_`\{\|\}~-]+\.)+[a-zA-Z0-9\.!#\$%&'\*\+\/=\?\^_`\{\|\}~-]+$/.test(str)
  // ! # $ % & ' * + - / = ? ^ _ ` { | } ~ .
}   

/**
 * @param {string} str
 * @returns {Boolean}
 */
// 视频ID校验
export function validateVideoForVideoId(str) {
  return /^[0-9a-zA-Z]{0,256}$/.test(str)
}


// 转半角(英文 数字 符号)
export function toSBC(str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 12288) {
      result += String
        .fromCharCode(str.charCodeAt(i) - 12256)
      continue
    }
    if (str.charCodeAt(i) > 65280 &&
      str.charCodeAt(i) < 65375) {
      result += String
        .fromCharCode(str.charCodeAt(i) - 65248)
    } else {
      result += String
        .fromCharCode(str.charCodeAt(i))
    }
  }
  return result
}

/**
 * 空チェック
 * @param {string} str
 * @returns {Boolean}
 */
export function isEmpty(str) {
  return str === '' || str === null || str.length === 0 
}

// customer_id校验
export function validateCustomerId(str) {
  return /^[0-9a-zA-Z]{8}$/.test(str)
}

// 数字校验
export function validateNumber(str) {
  return /^[0-9]$/.test(str)
}

//英数符号
export function englishNumberSymbol(str) {
  return /^[0-9a-zA-Z~!@#$%^&*()_+-={}\[\];':'\\|,.<>/?`]*$/.test(str)
}
// 不能有 这些符号 ^((?!~|!|`|\.|@|,|#|\$|/|%|\?|<|\^|&|\*|_|\+|-|=|{|}|\[|\]|;|'|:|\\).)*$
export function Symbol02(str) {

  const pattern = /^((?!~|!|`|\.|@|,|#|\$|\/|%|\?|<|>|\^|&|\*|_|\+|=|{|}|\[|\]|;|'|:|\\).)*$/;
  let bol = pattern.test(str);
  return bol
}
export function ToDBC02(txtstring) {
  var tmp = '';
  for (var i = 0; i < txtstring.length; i++) {
    if (txtstring.charCodeAt(i) == 32) {
      tmp = tmp + String.fromCharCode(12288);
    }
    if (txtstring.charCodeAt(i) < 127) {
      tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248);
    }
  }

  
  return tmp;
}





export function zenkana2Hankana(str) {
  var kanaMap = {
    'ガ': 'ｶﾞ', 'ギ': 'ｷﾞ', 'グ': 'ｸﾞ', 'ゲ': 'ｹﾞ', 'ゴ': 'ｺﾞ',
    'ザ': 'ｻﾞ', 'ジ': 'ｼﾞ', 'ズ': 'ｽﾞ', 'ゼ': 'ｾﾞ', 'ゾ': 'ｿﾞ',
    'ダ': 'ﾀﾞ', 'ヂ': 'ﾁﾞ', 'ヅ': 'ﾂﾞ', 'デ': 'ﾃﾞ', 'ド': 'ﾄﾞ',
    'バ': 'ﾊﾞ', 'ビ': 'ﾋﾞ', 'ブ': 'ﾌﾞ', 'ベ': 'ﾍﾞ', 'ボ': 'ﾎﾞ',
    'パ': 'ﾊﾟ', 'ピ': 'ﾋﾟ', 'プ': 'ﾌﾟ', 'ペ': 'ﾍﾟ', 'ポ': 'ﾎﾟ',
    'ヴ': 'ｳﾞ', 'ヷ': 'ﾜﾞ', 'ヺ': 'ｦﾞ',
    'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
    'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
    'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
    'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
    'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
    'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
    'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
    'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
    'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
    'ワ': 'ﾜ', 'ヲ': 'ｦ', 'ン': 'ﾝ',
    'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ',
    'ッ': 'ｯ', 'ャ': 'ｬ', 'ュ': 'ｭ', 'ョ': 'ｮ',
    '。': '｡', '、': '､', 'ー': 'ｰ', '「': '｢', '」': '｣', '・': '･'
  }
  var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
  return str
    .replace(reg, function (match) {
      return kanaMap[match];
    })
    .replace(/゛/g, 'ﾞ')
    .replace(/゜/g, 'ﾟ');
};


export function halfToFull(str) {
  let newValue = '';
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    if (code == 32) {
      // 半角空格转全角
      newValue += String.fromCharCode(12288);
    } else if (code < 127) {
      // 半角英文、数字、记号转全角
      newValue += String.fromCharCode(code + 65248);
    } else {
      newValue += str[i];
    }
  }
  // 半角片假名转全角片假名 part2
  const arrFullkana = fullKanaListPart2.split(',');
  const arrHalfkana = halfKanaListPart2.split(',');
  for (let i = 0; i < arrHalfkana.length; i++) {
    newValue = newValue.replaceAll(arrHalfkana[i], arrFullkana[i]);
    newValue = newValue.replace(new RegExp(arrHalfkana[i], "gm"), arrFullkana[i]);
  }
  // 半角片假名转全角片假名 part1
  for (let i = 0; i < halfKanaListPart1.length; i++) {

    newValue = newValue.replace(new RegExp(halfKanaListPart1[i], "gm"), fullKanaListPart1[i]);
  }
  return newValue;
}

const fullKanaListPart1 = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンーーーーーーャュョァィゥェォッ゛゜';
const fullKanaListPart2 = 'ヴ,ガ,ギ,グ,ゲ,ゴ,ザ,ジ,ズ,ゼ,ゾ,ダ,ヂ,ヅ,デ,ド,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ';
const halfKanaListPart1 = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ-‐−ーｰ－ｬｭｮｧｨｩｪｫｯﾞﾟ';
const halfKanaListPart2 = 'ｳﾞ,ｶﾞ,ｷﾞ,ｸﾞ,ｹﾞ,ｺﾞ,ｻﾞ,ｼﾞ,ｽﾞ,ｾﾞ,ｿﾞ,ﾀﾞ,ﾁﾞ,ﾂﾞ,ﾃﾞ,ﾄﾞ,ﾊﾞ,ﾋﾞ,ﾌﾞ,ﾍﾞ,ﾎﾞ,ﾊﾟ,ﾋﾟ,ﾌﾟ,ﾍﾟ,ﾎﾟ';




export function strto(str) {
  var a = []
  var c;
  var m = mapdata;

  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (codeindex.indexOf(c) != -1) {
      a.push(m[c])
      a.push(65438)
    } else if (codeindex02.indexOf(c) != -1) {
      a.push(m[c])
      a.push(65439)
    } else {
      a.push(m[c] || c);
    }

  };

  return String.fromCharCode.apply(null, a);
};
let mapdata = {
  0x30A1: 0xFF67,
  0x30A3: 0xFF68,
  0x30A5: 0xFF69,
  0x30A7: 0xFF6A,
  0x30A9: 0xFF6B,
  0x30FC: 0xFF70,
  0x30A2: 0xFF71,
  0x30A4: 0xFF72,
  0x30A6: 0xFF73,
  0x30A8: 0xFF74,
  0x30AA: 0xFF75,
  0x30AB: 0xFF76,
  0x30AD: 0xFF77,
  0x30AF: 0xFF78,
  0x30B1: 0xFF79,
  0x30B3: 0xFF7A,
  0x30B5: 0xFF7B,
  0x30B7: 0xFF7C,
  0x30B9: 0xFF7D,
  0x30BB: 0xFF7E,
  0x30BD: 0xFF7F,
  0x30BF: 0xFF80,
  0x30C1: 0xFF81,
  0x30C4: 0xFF82,
  0x30C6: 0xFF83,
  0x30C8: 0xFF84,
  0x30CA: 0xFF85,
  0x30CB: 0xFF86,
  0x30CC: 0xFF87,
  0x30CD: 0xFF88,
  0x30CE: 0xFF89,
  0x30CF: 0xFF8A,
  0x30D2: 0xFF8B,
  0x30D5: 0xFF8C,
  0x30D8: 0xFF8D,
  0x30DB: 0xFF8E,
  0x30DE: 0xFF8F,
  0x30DF: 0xFF90,
  0x30E0: 0xFF91,
  0x30E1: 0xFF92,
  0x30E2: 0xFF93,
  0x30E4: 0xFF94,
  0x30E6: 0xFF95,
  0x30E8: 0xFF96,
  0x30E9: 0xFF97,
  0x30EA: 0xFF98,
  0x30EB: 0xFF99,
  0x30EC: 0xFF9A,
  0x30ED: 0xFF9B,
  0x30EF: 0xFF9C,
  0x30F3: 0xFF9D,
  0x309B: 0xFF9E,
  0x309C: 0xFF9F,
  0x30F2: 0xFF66,
  12449: 65383,//ァ
  12451: 65384,//ィ
  12453: 65385,//ゥ
  12455: 65386,//ェ
  12457: 65387,//ォ
  12483: 65391,//ッ
  12515: 65388,//ャ
  12517: 65389,//ュ
  12519: 65390,//ョ
  12460: 65398,//ｶﾞ
  12462: 65399,//ギ
  12464: 65400,//ｸﾞ
  12466: 65401,//ゲ
  12468: 65402,//ｺﾞ
  12470: 65403,//ｻﾞ
  12472: 65404,//ｻﾞ
  12474: 65405,//ｽﾞ
  12476: 65406,//ｾﾞ
  12478: 65407,//ゾ
  12480: 65408,//ﾀﾞ
  12482: 65409,//ﾁﾞ
  12485: 65410,//ﾂﾞ
  12487: 65411,//デ
  12489: 65412,//ﾄﾞ
  12496: 65418,//バ
  12499: 65419,//ビ
  12502: 65420,//ブ
  12505: 65421,//ﾍﾞ
  12508: 65422,//ボ
  12497: 65418,//ﾊﾟ
  12500: 65419,//ピ
  12503: 65420,//ﾌﾟ
  12506: 65421,//ﾍﾟ
  12509: 65422//ポ
}
let codeindex = [
  12460,//ｶﾞ
  12462,//ギ
  12464,//ｸﾞ
  12466,//ゲ
  12468,//ｺﾞ
  12470,//ｻﾞ
  12472,//ｻﾞ
  12474,//ｽﾞ
  12476,//ｾﾞ
  12478,//ゾ
  12480,//ﾀﾞ
  12482,//ﾁﾞ
  12485,//ﾂﾞ
  12487,//デ
  12489,//ﾄﾞ
  12496,//バ
  12499,//ビ
  12502,//ブ
  12505,//ﾍﾞ
  12508//ボ
]
let codeindex02 = [
  12497,//ﾊﾟ
  12500,//ピ
  12503,//ﾌﾟ
  12506,//ﾍﾟ
  12509//ポ
]
/**
 * 自宅電話番号の下4桁とパターン一致
 * @param {string} password
 * @param {string} phoneNumber
 * @returns {Boolean}
 */
 export function isSimilarToPhoneNumber(password) {
  let phoneNumber  =  decrypt(store.state.user.tele_number01)+''+decrypt(store.state.user.tele_number02)+''+decrypt(store.state.user.tele_number03)
  let phoneNumber02 = decrypt(store.state.user.phone_number01)+''+decrypt(store.state.user.phone_number02)+''+decrypt(store.state.user.phone_number03)
  // if (phoneNumber.length == 10) {
  //   let teleNumber= []
  //   let phone = store.state.user.tele_number01+''+store.state.user.tele_number02+''+store.state.user.tele_number03
    
  //   let A1 = phone.charAt(0)
  //   let B1 = phone.charAt(1)
  //   let C1 = phone.charAt(2)
  //   let D1 = phone.charAt(3)
  //   let E1 = phone.charAt(6)
  //   let F1 = phone.charAt(7)
  //   let G1 = phone.charAt(8)
  //   let H1 = phone.charAt(9)

  //   if (password.length === 4) {
  //     let disPwd2 = E1 + F1 + G1 + H1

  //     teleNumber.push(disPwd2)
  //   }
  //   if (teleNumber.includes(password)) {
  //     //密码格式错误
  //     return true
  //   } else {
  //     //密码格式正确
  //     return false
  //   }
  // }
  // if (phoneNumber.length == 11) {

  //   let teleNumber = []

  //   let A = phoneNumber.charAt(0)
  //   let B = phoneNumber.charAt(1)
  //   let C = phoneNumber.charAt(2)
  //   let D = phoneNumber.charAt(3)
  //   let E = phoneNumber.charAt(7)
  //   let F = phoneNumber.charAt(8)
  //   let G = phoneNumber.charAt(9)
  //   let H = phoneNumber.charAt(10)

  //   if (password.length === 4) {
  //     let disPwd2 = E + F + G + H;

  //     teleNumber.push(disPwd2);
  //   }
  //   if (teleNumber.includes(password)) {
  //     //密码格式错误
  //     return true;
  //   } else {
  //     //密码格式正确
  //     return false;
  //   }
  // }
  if(phoneNumber.includes(password) || phoneNumber02.includes(password)){
    return true
  }
  return false;
}

// 暗証番号は生年月日の連続数字と同じチェック
export function similarBirthday(password) {
  let birthday = decrypt(store.state.user.birthday);

  if(isEmpty(birthday)){
    return false
  }
   let ymd = birthday.split('/')
   
  //密码长度
  let pwLength = password.length;
  // 月
  let monthFormat = ""
  // 日
  let dayFormat = ""
  // 和历年
  let jpDateFormat = ""

  // 传入的西历年
  // let year = birthday.split("年")[0]
  let year = ymd[0]
  let month = ymd[1]
  let yearjp = calendarBirthday(birthday)+''
  if (yearjp.length === 1) {
    jpDateFormat = "0" + yearjp
  } else {
    jpDateFormat = yearjp
  }
  // 传入的月
  // let month = year[1].split("月")[0]
  if (month.length === 1) {
    monthFormat = "0" + month
  } else {
    monthFormat = month
  }
  // 传入的日
  // let day = year[1].split("月")[0].split("日")[0]
  let day = ymd[2]
  if (day.length === 1) {
    dayFormat = "0" + day
  } else {
    dayFormat = day
  }
  // 传入生年月日为和历
  // if (birthFlag === "2") {
  //   let dateString = year.split("")
  //   let jpYear = dateString.substring(2, dateString.length)
  //   if (jpYear.length === 1) {
  //     jpDateFormat = "0" + jpYear
  //   } else {
  //     jpDateFormat = jpYear
  //   }
  // }


  // 将不符合格式的日期装到这里。
  let list = []
  // 月日分成单个字符
  let M1 = monthFormat.charAt(0)
  let M2 = monthFormat.charAt(1)
  
  let D1 = dayFormat.charAt(0)
  let D2 = dayFormat.charAt(1)

  // if (birthFlag === "1") {
    //西历年 字符串
    let yearStr = year
    let Y1 = yearStr.charAt(0)
    let Y2 = yearStr.charAt(1)
    let Y3 = yearStr.charAt(2)
    let Y4 = yearStr.charAt(3)

    if (pwLength === 4) {
      // [暗証番号チェック] 誕生月日と一致
      //Ｍ１Ｍ２Ｄ１Ｄ２
      let M1M2D1D2 = M1+M2+D1+D2
      list.push(M1M2D1D2)
      // [暗証番号チェック] 誕生日の西暦年とパターン一致
      //Y１Y２Y３Y４　
      let Y1Y2Y3Y4 = Y1+Y2+Y3+Y4
      list.push(Y1Y2Y3Y4)
      // [暗証番号チェック] 誕生日の西暦下2桁＋月と一致
      //Ｙ３Ｙ４Ｍ１Ｍ２
      let Y3Y4M1M2 = Y3+Y4+M1+M2
      list.push(Y3Y4M1M2)
      // [暗証番号チェック] 誕生月、誕生日が一桁のとき、誕生日の西暦下2桁＋月＋日と一致
      //Ｙ３Ｙ４Ｍ２Ｄ２
   
        let Y3Y4M2D2 = Y3+Y4+M2+D2
        list.push(Y3Y4M2D2)
      
      //Ｙ３Ｙ４Ｄ１Ｄ２
      let Y3Y4D1D2 = Y3+Y4+D1+D2
      list.push(Y3Y4D1D2)
      //Ｙ２Ｙ３Ｙ４Ｍ１
      let Y2Y3Y4M1 = Y2+Y3+Y4+M1
      list.push(Y2Y3Y4M1)
      //Ｙ２Ｙ３Ｙ４Ｍ２
   
        let Y2Y3Y4M2 = Y2+Y3+Y4+M2
        list.push(Y2Y3Y4M2)
      
      //Ｙ４Ｍ１Ｍ２Ｄ１
      let Y4M1M2D1 = Y4+M1+M2+D1
      list.push(Y4M1M2D1)
      //Ｙ４Ｍ１Ｍ２Ｄ２
  
        let Y4M1M2D2 = Y4+M1+M2+D2
        list.push(Y4M1M2D2)
      
      //Ｙ４Ｍ２D１Ｄ２
  
        let Y4M2D1D2 = Y4+M2+D1+D2
        list.push(Y4M2D1D2)
      
      
    }
    let Yjp1 = jpDateFormat.charAt(0)
    let Yjp2 = jpDateFormat.charAt(1)

    if (pwLength === 4){

      // ｙ１ｙ２m１m２
      let disPwd5 = Yjp1 + Yjp2 + M1 + M2;
      list.push(disPwd5);
      // ｙ１ｙ２ｍ２ｄ２	
      let disPwd6 = Yjp1 + Yjp2 + M2 + D2;
      list.push(disPwd6);
      // ｙ１ｙ２ｄ１ｄ２		
      let disPwd7 = Yjp1 + Yjp2 + D1 + D2;
      list.push(disPwd7);
      // ｙ２ｍ１ｍ２ｄ１
      let disPwd8 = Yjp2 + M1 + M2 + D1;
      list.push(disPwd8);
      // ｙ２ｍ１ｍ２ｄ２
      let disPwd9 = Yjp2 + M1 + M2 + D2;
      list.push(disPwd9);
      //ｙ２ｍ２ｄ１ｄ２
      let disPwd10 = Yjp2 + M2 + D1 + D2;
      list.push(disPwd10);
    }
 
  return list.includes(password);
}
let mappingFlag = '1'
  //半角を全角に変換する
 export function changeToDBC(str) {
    let result = '';
    let len = str.length;
    for (let i = 0; i < len; i++) {
      let cCode = str.charCodeAt(i);
      cCode = cCode >= 0x0021 && cCode <= 0x007e ? cCode + 65248 : cCode;
      cCode = cCode == 0x0020 ? 0x03000 : cCode;
      result += String.fromCharCode(cCode);
    }
    return toZenkanaCase(result);
  }

    //全角ひらがなを全角カタカナに変換します
   export function toKatakanaCase(str) {
      let i = str.length, a = [];
  
      while (i--) {
        let c = str.charCodeAt(i);
        // @ts-ignore
        a[i] = (0x3041 <= c && c <= 0x3096) ? c + 0x0060 : c;
      }
      return String.fromCharCode.apply(null, a);
    }
 //半角のカタカナを全角のカタカナに変換します
  function toZenkanaCase(str) {
  let i, j, k1 = [], k2 = [], f, c, a = [];
  let flag1 = false
  let flag2 = false
  str = str.split("")
  for (j = 0; j < str.length;) {
    if (flag1) {
      // @ts-ignore
      k1.push(j)
    }
    if (flag2) {
      // @ts-ignore
      k2.push(j)
    }
    flag1 = false
    flag2 = false
    if (str[j].charCodeAt(0) === 0xFF9E) {
      str.splice(j, 1)
      if (j !== 0) {
        j--
      }
      flag1 = true
    } else if (str[j].charCodeAt(0) === 0xFF9F) {
      str.splice(j, 1)
      if (j !== 0) {
        j--
      }
      flag2 = true
    } else {
      j++
    }
  }
  str = str.join("")
  // str = str.split(/-|:|,/)
  for (i = 0, f = str.length; i < f; i++) {
    // @ts-ignore
    if (k1.indexOf(i) !== -1) {
      mappingFlag = '2'
      // @ts-ignore
    } else if (k2.indexOf(i) !== -1) {
      mappingFlag = '3'
    } else {
      mappingFlag = '1'
    }
    // @ts-ignore
    let m = toZenkanaCaseMAPPING;
    c = str.charCodeAt(i);
    // @ts-ignore
    a.push(m()[c] || c);
  }

  return String.fromCharCode.apply(null, a);
}

// @ts-ignore
function toZenkanaCaseMAPPING(){
  let rtn = mappingFlag === '1' ?
    {
      0xFF67: 0x30A1,
      0xFF68: 0x30A3,
      0xFF69: 0x30A5,
      0xFF6A: 0x30A7,
      0xFF6B: 0x30A9,
      0xFF70: 0x30FC,
      0xFF71: 0x30A2,
      0xFF72: 0x30A4,
      0xFF73: 0x30A6,
      0xFF74: 0x30A8,
      0xFF75: 0x30AA,
      0xFF76: 0x30AB,
      0xFF77: 0x30AD,
      0xFF78: 0x30AF,
      0xFF79: 0x30B1,
      0xFF7A: 0x30B3,
      0xFF7B: 0x30B5,
      0xFF7C: 0x30B7,
      0xFF7D: 0x30B9,
      0xFF7E: 0x30BB,
      0xFF7F: 0x30BD,
      0xFF80: 0x30BF,
      0xFF81: 0x30C1,
      0xFF82: 0x30C4,
      0xFF83: 0x30C6,
      0xFF84: 0x30C8,
      0xFF85: 0x30CA,
      0xFF86: 0x30CB,
      0xFF87: 0x30CC,
      0xFF88: 0x30CD,
      0xFF89: 0x30CE,
      0xFF8A: 0x30CF,
      0xFF8B: 0x30D2,
      0xFF8C: 0x30D5,
      0xFF8D: 0x30D8,
      0xFF8E: 0x30DB,
      0xFF8F: 0x30DE,
      0xFF90: 0x30DF,
      0xFF91: 0x30E0,
      0xFF92: 0x30E1,
      0xFF93: 0x30E2,
      0xFF94: 0x30E4,
      0xFF95: 0x30E6,
      0xFF96: 0x30E8,
      0xFF97: 0x30E9,
      0xFF98: 0x30EA,
      0xFF99: 0x30EB,
      0xFF9A: 0x30EC,
      0xFF9B: 0x30ED,
      0xFF9C: 0x30EF,
      0xFF9D: 0x30F3,
      0xFF9E: 0x309B,
      0xFF9F: 0x309C,
      0xFF66: 0x30F2
    } : mappingFlag === '2' ? {
      0xFF76: 0x30AC,
      0xFF77: 0x30AE,
      0xFF78: 0x30B0,
      0xFF79: 0x30B2,
      0xFF7A: 0x30B4,
      0xFF7B: 0x30B6,
      0xFF7C: 0x30B8,
      0xFF7D: 0x30BA,
      0xFF7E: 0x30BC,
      0xFF7F: 0x30BE,
      0xFF80: 0x30C0,
      0xFF81: 0x30C2,
      0xFF82: 0x30C5,
      0xFF83: 0x30C7,
      0xFF84: 0x30C9,
      0xFF8A: 0x30D0,
      0xFF8B: 0x30D3,
      0xFF8C: 0x30D6,
      0xFF8D: 0x30D9,
      0xFF8E: 0x30DC
    } : {
      0xFF8A: 0x30D1,
      0xFF8B: 0x30D4,
      0xFF8C: 0x30D7,
      0xFF8D: 0x30DA,
      0xFF8E: 0x30DD
    }
  return rtn
}

export function repeatNum(password){
  if(password.length==4){
    let num01 = password.charAt(0);
    let num02 = password.charAt(1);
    let num03 = password.charAt(2);
    let num04 = password.charAt(3);
   if(num01==num02&&num02==num03&&num03==num04){
     return true
   }
  }else if(password.length==6){
    let num01 = password.charAt(0);
    let num02 = password.charAt(1);
    let num03 = password.charAt(2);
    let num04 = password.charAt(3);
    let num05 = password.charAt(4);
    let num06 = password.charAt(5);
   if(num01==num02&&num02==num03&&num03==num04&&num04==num05&&num05==num06){
     return true
   }
  }

return false
}
//日期转和历
export function calendarBirthday(birthday) {
 //明治
 let maiji = new Date('1868/10/23').getTime();
 //大正
 let taisyo = new Date('1912/07/30').getTime();
 //昭和
 let syowa = new Date('1926/12/25').getTime();
 //平成
 let heisei = new Date('1989/01/08').getTime();
 //令和ZoneOffset
 let reiwa = new Date('2019/05/01').getTime();

 let ymd = birthday.split('/')
 let brithdayEpoc = new Date(birthday).getTime();
 let year = new Date(birthday).getFullYear();
 let calendarName =''
 let jpDate = '';
 if (maiji <= brithdayEpoc && brithdayEpoc < taisyo) {
     jpDate = year - 1867;
     calendarName= '明治'
 } else if (taisyo <= brithdayEpoc && brithdayEpoc < syowa) {
     jpDate = year - 1911;
     calendarName= '大正'
 } else if (syowa <= brithdayEpoc && brithdayEpoc < heisei) {
     jpDate = year - 1925;
     calendarName= '昭和'
 } else if (heisei <= brithdayEpoc && brithdayEpoc < reiwa) {
     jpDate = year - 1988;
     calendarName= '平成'
 } else {
     jpDate = year - 2018;
     calendarName= '令和'
 }
//  alert( jpDate==1?calendarName+'元年':calendarName+jpDate+'年')

 return jpDate

  

}

// ^(?:[ぁ-んァ-ン]|[一-龥]|[〃仝々]|[ゞゝゐゔゑ]|[ヾヽヷヰヸヴヱヹヲヺヶ]|[ａ-ｚＡ-Ｚ]|[0-9\\uFF10-\\uFF19]|[ﾟﾞ]|[\\u3000]|[\\\\]|[（）]|[ー|−|―|－])+$