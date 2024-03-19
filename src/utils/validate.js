import store from "@/store";
import { decrypt } from "../utils/jse";
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
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
    return true;
  } else {
    return false;
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
    return true;
  } else {
    return false;
  }
}
// 半角数 动态长度 校验
export function checkNumxLength(str, length) {
  if (/^[0-9]*$/.test(str) && str.length < length) {
    return false;
  } else {
    return true;
  }
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 半角英数
export function checkHalfAngle(str) {
  return /^[0-9a-zA-Z]*$/.test(str);
}
// 半角数
export function checkHalNum(str) {
  return /^[0-9]*$/.test(str);
}
//全角 绘表情 判断
export function PATTERFULL(str) {
  return /^[\uFF01-\uFF5E\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FFF\uF900-\uFAFF々〃]+$/.test(
    str
  );
}
export function checkHal02(str) {
  return /[^\u30A0-\u30FF\u3040-\u309F]/.test(str);
}
// /[^\u30A0-\u30FF\u3040-\u309Fa-zA-Zａ-ｚＡ-Ｚ]/g
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 用户名校验
export function validateUsernameForUserId(str) {
  return /^[0-9a-zA-Z]{0,20}$/.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// ユーザー識別子校验
export function validateAuthAccountId(str) {
  return /^[0-9a-zA-Z]{0,255}$/.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// ユーザID
export function validateUserID(str) {
  return /^[0-9a-zA-Z]{0,32}$/.test(str);
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 密码校验
export function validPassword(str) {
  return /^(?![a-zA-Z]+$)(?!\d+$)(?![~`!@#$%^&*()_+\-={}[\]|:;''<>,.?/\\]+$)[a-zA-Z~`!@#$%^&*()_+\-={}[\]|:;''<>,.?/\\\d]{8,20}$/.test(
    str
  );
}
// 半角英数记号
export function enNumsymbol(str) {
  return /^[A-Za-z0-9~`!@#$%^&*()_+\-={}[\]|:;''<>,.?/\\]+$/.test(str);
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// 邮箱校验
export function validMailAddress(str) {
  return /^[a-zA-Z0-9\.!#\$%&'\*\+\/=\?\^_`\{\|\}~-]{1,}@([a-zA-Z0-9\.!#\$%&'\*\+\/=\?\^_`\{\|\}~-]+\.)+[a-zA-Z0-9\.!#\$%&'\*\+\/=\?\^_`\{\|\}~-]+$/.test(
    str
  );
  // ! # $ % & ' * + - / = ? ^ _ ` { | } ~ .
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// 视频ID校验
export function validateVideoForVideoId(str) {
  return /^[0-9a-zA-Z]{0,256}$/.test(str);
}
//半角 白名单 check
export function whitelist(str) {
  return /^[ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｳﾞｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ\-゛゜\s]+$/g.test(str);
}
//半角 白名单02 check
export function whitelist02(str) {
  return /^[ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｳﾞｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ\-゛゜\s0-9()\.]+$/g.test(str);
}
// 转半角(英文 数字 符号)
export function toSBC(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 12288) {
      result += String.fromCharCode(str.charCodeAt(i) - 12256);
      continue;
    }
    if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
      result += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else {
      result += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return result;
}

/**
 * 空チェック
 * @param {string} str
 * @returns {Boolean}
 */
export function isEmpty(str) {
  return str === "" || str === null || str.length === 0;
}

// customer_id校验
export function validateCustomerId(str) {
  return /^[0-9a-zA-Z]{8}$/.test(str);
}

// 数字校验
export function validateNumber(str) {
  return /^[0-9]$/.test(str);
}

//英数符号
export function englishNumberSymbol(str) {
  return /^[0-9a-zA-Z~!@#$%^&*()_+-={}\[\];':'\\|,.<>/?`]*$/.test(str);
}
// 不能有 这些符号 ^((?!~|!|`|\.|@|,|#|\$|/|%|\?|<|\^|&|\*|_|\+|-|=|{|}|\[|\]|;|'|:|\\).)*$
export function Symbol02(str) {
  const pattern = /^((?!~|!|`|\.|@|,|#|\$|\/|%|\?|<|>|\^|&|\*|_|\+|=|{|}|\[|\]|;|'|:|\\).)*$/;
  let bol = pattern.test(str);
  return bol;
}
export function ToDBC02(txtstring) {
  var tmp = "";
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
    ガ: "ｶﾞ",
    ギ: "ｷﾞ",
    グ: "ｸﾞ",
    ゲ: "ｹﾞ",
    ゴ: "ｺﾞ",
    ザ: "ｻﾞ",
    ジ: "ｼﾞ",
    ズ: "ｽﾞ",
    ゼ: "ｾﾞ",
    ゾ: "ｿﾞ",
    ダ: "ﾀﾞ",
    ヂ: "ﾁﾞ",
    ヅ: "ﾂﾞ",
    デ: "ﾃﾞ",
    ド: "ﾄﾞ",
    バ: "ﾊﾞ",
    ビ: "ﾋﾞ",
    ブ: "ﾌﾞ",
    ベ: "ﾍﾞ",
    ボ: "ﾎﾞ",
    パ: "ﾊﾟ",
    ピ: "ﾋﾟ",
    プ: "ﾌﾟ",
    ペ: "ﾍﾟ",
    ポ: "ﾎﾟ",
    ヴ: "ｳﾞ",
    ヷ: "ﾜﾞ",
    ヺ: "ｦﾞ",
    ア: "ｱ",
    イ: "ｲ",
    ウ: "ｳ",
    エ: "ｴ",
    オ: "ｵ",
    カ: "ｶ",
    キ: "ｷ",
    ク: "ｸ",
    ケ: "ｹ",
    コ: "ｺ",
    サ: "ｻ",
    シ: "ｼ",
    ス: "ｽ",
    セ: "ｾ",
    ソ: "ｿ",
    タ: "ﾀ",
    チ: "ﾁ",
    ツ: "ﾂ",
    テ: "ﾃ",
    ト: "ﾄ",
    ナ: "ﾅ",
    ニ: "ﾆ",
    ヌ: "ﾇ",
    ネ: "ﾈ",
    ノ: "ﾉ",
    ハ: "ﾊ",
    ヒ: "ﾋ",
    フ: "ﾌ",
    ヘ: "ﾍ",
    ホ: "ﾎ",
    マ: "ﾏ",
    ミ: "ﾐ",
    ム: "ﾑ",
    メ: "ﾒ",
    モ: "ﾓ",
    ヤ: "ﾔ",
    ユ: "ﾕ",
    ヨ: "ﾖ",
    ラ: "ﾗ",
    リ: "ﾘ",
    ル: "ﾙ",
    レ: "ﾚ",
    ロ: "ﾛ",
    ワ: "ﾜ",
    ヲ: "ｦ",
    ン: "ﾝ",
    ァ: "ｧ",
    ィ: "ｨ",
    ゥ: "ｩ",
    ェ: "ｪ",
    ォ: "ｫ",
    ッ: "ｯ",
    ャ: "ｬ",
    ュ: "ｭ",
    ョ: "ｮ",
    "。": "｡",
    "、": "､",
    ー: "ｰ",
    "「": "｢",
    "」": "｣",
    "・": "･"
  };
  var reg = new RegExp("(" + Object.keys(kanaMap).join("|") + ")", "g");
  return str
    .replace(reg, function(match) {
      return kanaMap[match];
    })
    .replace(/゛/g, "ﾞ")
    .replace(/゜/g, "ﾟ");
}

//文字转大文字
export function toBig(str){
  let samllWord = characters1.split("")
  let    big    = characters2.split("")
  for (let i = 0; i < samllWord.length; i++) {
    newValue = newValue.replace(
      new RegExp(samllWord[i], "gm"),
      big[i]
    );
  }
return newValue
}
const characters1 = "ァィゥェォッャュョヮヵヶ"
const characters2 = "アイウエオツヤユヨワカケ"
// 空格 英文 数字 记号 片假名 转全角
export function halfToFull(str) {
  let newValue = "";
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
  const arrFullkana = fullKanaListPart2.split(",");
  const arrHalfkana = halfKanaListPart2.split(",");
  for (let i = 0; i < arrHalfkana.length; i++) {
    newValue = newValue.replaceAll(arrHalfkana[i], arrFullkana[i]);
    newValue = newValue.replace(
      new RegExp(arrHalfkana[i], "gm"),
      arrFullkana[i]
    );
  }
  // 半角片假名转全角片假名 part1
  for (let i = 0; i < halfKanaListPart1.length; i++) {
    newValue = newValue.replace(
      new RegExp(halfKanaListPart1[i], "gm"),
      fullKanaListPart1[i]
    );
  }
  return newValue;
}

const fullKanaListPart1 =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンーーーーーーャュョァィゥェォッ゛゜";
const fullKanaListPart2 =
  "ヴ,ガ,ギ,グ,ゲ,ゴ,ザ,ジ,ズ,ゼ,ゾ,ダ,ヂ,ヅ,デ,ド,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ";
const halfKanaListPart1 =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ-‐−ーｰ－ｬｭｮｧｨｩｪｫｯﾞﾟ";
const halfKanaListPart2 =
  "ｳﾞ,ｶﾞ,ｷﾞ,ｸﾞ,ｹﾞ,ｺﾞ,ｻﾞ,ｼﾞ,ｽﾞ,ｾﾞ,ｿﾞ,ﾀﾞ,ﾁﾞ,ﾂﾞ,ﾃﾞ,ﾄﾞ,ﾊﾞ,ﾋﾞ,ﾌﾞ,ﾍﾞ,ﾎﾞ,ﾊﾟ,ﾋﾟ,ﾌﾟ,ﾍﾟ,ﾎﾟ";
// 空格 英文 数字 记号 片假名 转半角
export function FullTohalf(str) {

  var newValue = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 12288) {
      newValue += String.fromCharCode(str.charCodeAt(i) - 12256);
      continue;
    }
    if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
      newValue += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else {
      newValue += String.fromCharCode(str.charCodeAt(i));
    }
  }

  // 半角片假名转全角片假名 part2
  const arrFullkana = fullKanaListPart2.split(",");
  const arrHalfkana = halfKanaListPart2.split(",");
  for (let i = 0; i < arrFullkana.length; i++) {
    newValue = newValue.replaceAll(arrFullkana[i], arrHalfkana[i]);
    newValue = newValue.replace(
      new RegExp(arrFullkana[i], "gm"),
      arrHalfkana[i]
    );
  }
  // 半角片假名转全角片假名 part1
  for (let i = 0; i < fullKanaListPart1.length; i++) {
    newValue = newValue.replace(
      new RegExp(fullKanaListPart1[i], "gm"),
      halfKanaListPart1[i]
    );
  }
  return newValue;
}

export function strto(str) {
  var a = [];
  var c;
  var m = mapdata;

  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (codeindex.indexOf(c) != -1) {
      a.push(m[c]);
      a.push(65438);
    } else if (codeindex02.indexOf(c) != -1) {
      a.push(m[c]);
      a.push(65439);
    } else {
      a.push(m[c] || c);
    }
  }

  return String.fromCharCode.apply(null, a);
}
let mapdata = {
  0x30a1: 0xff67,
  0x30a3: 0xff68,
  0x30a5: 0xff69,
  0x30a7: 0xff6a,
  0x30a9: 0xff6b,
  0x30fc: 0xff70,
  0x30a2: 0xff71,
  0x30a4: 0xff72,
  0x30a6: 0xff73,
  0x30a8: 0xff74,
  0x30aa: 0xff75,
  0x30ab: 0xff76,
  0x30ad: 0xff77,
  0x30af: 0xff78,
  0x30b1: 0xff79,
  0x30b3: 0xff7a,
  0x30b5: 0xff7b,
  0x30b7: 0xff7c,
  0x30b9: 0xff7d,
  0x30bb: 0xff7e,
  0x30bd: 0xff7f,
  0x30bf: 0xff80,
  0x30c1: 0xff81,
  0x30c4: 0xff82,
  0x30c6: 0xff83,
  0x30c8: 0xff84,
  0x30ca: 0xff85,
  0x30cb: 0xff86,
  0x30cc: 0xff87,
  0x30cd: 0xff88,
  0x30ce: 0xff89,
  0x30cf: 0xff8a,
  0x30d2: 0xff8b,
  0x30d5: 0xff8c,
  0x30d8: 0xff8d,
  0x30db: 0xff8e,
  0x30de: 0xff8f,
  0x30df: 0xff90,
  0x30e0: 0xff91,
  0x30e1: 0xff92,
  0x30e2: 0xff93,
  0x30e4: 0xff94,
  0x30e6: 0xff95,
  0x30e8: 0xff96,
  0x30e9: 0xff97,
  0x30ea: 0xff98,
  0x30eb: 0xff99,
  0x30ec: 0xff9a,
  0x30ed: 0xff9b,
  0x30ef: 0xff9c,
  0x30f3: 0xff9d,
  0x309b: 0xff9e,
  0x309c: 0xff9f,
  0x30f2: 0xff66,
  12449: 65383, //ァ
  12451: 65384, //ィ
  12453: 65385, //ゥ
  12455: 65386, //ェ
  12457: 65387, //ォ
  12483: 65391, //ッ
  12515: 65388, //ャ
  12517: 65389, //ュ
  12519: 65390, //ョ
  12460: 65398, //ｶﾞ
  12462: 65399, //ギ
  12464: 65400, //ｸﾞ
  12466: 65401, //ゲ
  12468: 65402, //ｺﾞ
  12470: 65403, //ｻﾞ
  12472: 65404, //ｻﾞ
  12474: 65405, //ｽﾞ
  12476: 65406, //ｾﾞ
  12478: 65407, //ゾ
  12480: 65408, //ﾀﾞ
  12482: 65409, //ﾁﾞ
  12485: 65410, //ﾂﾞ
  12487: 65411, //デ
  12489: 65412, //ﾄﾞ
  12496: 65418, //バ
  12499: 65419, //ビ
  12502: 65420, //ブ
  12505: 65421, //ﾍﾞ
  12508: 65422, //ボ
  12497: 65418, //ﾊﾟ
  12500: 65419, //ピ
  12503: 65420, //ﾌﾟ
  12506: 65421, //ﾍﾟ
  12509: 65422 //ポ
};
let codeindex = [
  12460, //ｶﾞ
  12462, //ギ
  12464, //ｸﾞ
  12466, //ゲ
  12468, //ｺﾞ
  12470, //ｻﾞ
  12472, //ｻﾞ
  12474, //ｽﾞ
  12476, //ｾﾞ
  12478, //ゾ
  12480, //ﾀﾞ
  12482, //ﾁﾞ
  12485, //ﾂﾞ
  12487, //デ
  12489, //ﾄﾞ
  12496, //バ
  12499, //ビ
  12502, //ブ
  12505, //ﾍﾞ
  12508 //ボ
];
let codeindex02 = [
  12497, //ﾊﾟ
  12500, //ピ
  12503, //ﾌﾟ
  12506, //ﾍﾟ
  12509 //ポ
];
/**
 * 自宅電話番号の下4桁とパターン一致
 * @param {string} password
 * @param {string} phoneNumber
 * @returns {Boolean}
 */
export function isSimilarToPhoneNumber(password) {
  let phoneNumber =
    decrypt(store.state.user.tele_number01) +
    "" +
    decrypt(store.state.user.tele_number02) +
    "" +
    decrypt(store.state.user.tele_number03);
  let phoneNumber02 =
    decrypt(store.state.user.phone_number01) +
    "" +
    decrypt(store.state.user.phone_number02) +
    "" +
    decrypt(store.state.user.phone_number03);
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
  if (phoneNumber.includes(password) || phoneNumber02.includes(password)) {
    return true;
  }
  return false;
}

// 暗証番号は生年月日の連続数字と同じチェック
export function similarBirthday(password) {
  let birthday = decrypt(store.state.user.birthday);

  if (isEmpty(birthday)) {
    return false;
  }
  let ymd = birthday.split("/");

  //密码长度
  let pwLength = password.length;
  // 月
  let monthFormat = "";
  // 日
  let dayFormat = "";
  // 和历年
  let jpDateFormat = "";

  // 传入的西历年
  // let year = birthday.split("年")[0]
  let year = ymd[0];
  let month = ymd[1];
  let yearjp = calendarBirthday(birthday) + "";
  if (yearjp.length === 1) {
    jpDateFormat = "0" + yearjp;
  } else {
    jpDateFormat = yearjp;
  }
  // 传入的月
  // let month = year[1].split("月")[0]
  if (month.length === 1) {
    monthFormat = "0" + month;
  } else {
    monthFormat = month;
  }
  // 传入的日
  // let day = year[1].split("月")[0].split("日")[0]
  let day = ymd[2];
  if (day.length === 1) {
    dayFormat = "0" + day;
  } else {
    dayFormat = day;
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
  let list = [];
  // 月日分成单个字符
  let M1 = monthFormat.charAt(0);
  let M2 = monthFormat.charAt(1);

  let D1 = dayFormat.charAt(0);
  let D2 = dayFormat.charAt(1);

  // if (birthFlag === "1") {
  //西历年 字符串
  let yearStr = year;
  let Y1 = yearStr.charAt(0);
  let Y2 = yearStr.charAt(1);
  let Y3 = yearStr.charAt(2);
  let Y4 = yearStr.charAt(3);

  if (pwLength === 4) {
    // [暗証番号チェック] 誕生月日と一致
    //Ｍ１Ｍ２Ｄ１Ｄ２
    let M1M2D1D2 = M1 + M2 + D1 + D2;
    list.push(M1M2D1D2);
    // [暗証番号チェック] 誕生日の西暦年とパターン一致
    //Y１Y２Y３Y４
    let Y1Y2Y3Y4 = Y1 + Y2 + Y3 + Y4;
    list.push(Y1Y2Y3Y4);
    // [暗証番号チェック] 誕生日の西暦下2桁＋月と一致
    //Ｙ３Ｙ４Ｍ１Ｍ２
    let Y3Y4M1M2 = Y3 + Y4 + M1 + M2;
    list.push(Y3Y4M1M2);
    // [暗証番号チェック] 誕生月、誕生日が一桁のとき、誕生日の西暦下2桁＋月＋日と一致
    //Ｙ３Ｙ４Ｍ２Ｄ２

    let Y3Y4M2D2 = Y3 + Y4 + M2 + D2;
    list.push(Y3Y4M2D2);

    //Ｙ３Ｙ４Ｄ１Ｄ２
    let Y3Y4D1D2 = Y3 + Y4 + D1 + D2;
    list.push(Y3Y4D1D2);
    //Ｙ２Ｙ３Ｙ４Ｍ１
    let Y2Y3Y4M1 = Y2 + Y3 + Y4 + M1;
    list.push(Y2Y3Y4M1);
    //Ｙ２Ｙ３Ｙ４Ｍ２

    let Y2Y3Y4M2 = Y2 + Y3 + Y4 + M2;
    list.push(Y2Y3Y4M2);

    //Ｙ４Ｍ１Ｍ２Ｄ１
    let Y4M1M2D1 = Y4 + M1 + M2 + D1;
    list.push(Y4M1M2D1);
    //Ｙ４Ｍ１Ｍ２Ｄ２

    let Y4M1M2D2 = Y4 + M1 + M2 + D2;
    list.push(Y4M1M2D2);

    //Ｙ４Ｍ２D１Ｄ２

    let Y4M2D1D2 = Y4 + M2 + D1 + D2;
    list.push(Y4M2D1D2);
  }
  let Yjp1 = jpDateFormat.charAt(0);
  let Yjp2 = jpDateFormat.charAt(1);

  if (pwLength === 4) {
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
let mappingFlag = "1";
//半角片假名 转 全角片假名
export function changeToDBC(str) {
  let result = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    let cCode = str.charCodeAt(i);
    cCode = cCode >= 0x0021 && cCode <= 0x007e ? cCode + 65248 : cCode;
    cCode = cCode == 0x0020 ? 0x03000 : cCode;
    result += String.fromCharCode(cCode);
  }
  return toZenkanaCase(result);
}

//将全角平假名转换为全角片假名
export function toKatakanaCase(str) {
  let i = str.length,
    a = [];

  while (i--) {
    let c = str.charCodeAt(i);
    // @ts-ignore
    a[i] = 0x3041 <= c && c <= 0x3096 ? c + 0x0060 : c;
  }
  return String.fromCharCode.apply(null, a);
}
//半角片假名转全角片假名
function toZenkanaCase(str) {
  let i,
    j,
    k1 = [],
    k2 = [],
    f,
    c,
    a = [];
  let flag1 = false;
  let flag2 = false;
  str = str.split("");
  for (j = 0; j < str.length; ) {
    if (flag1) {
      // @ts-ignore
      k1.push(j);
    }
    if (flag2) {
      // @ts-ignore
      k2.push(j);
    }
    flag1 = false;
    flag2 = false;
    if (str[j].charCodeAt(0) === 0xff9e) {
      str.splice(j, 1);
      if (j !== 0) {
        j--;
      }
      flag1 = true;
    } else if (str[j].charCodeAt(0) === 0xff9f) {
      str.splice(j, 1);
      if (j !== 0) {
        j--;
      }
      flag2 = true;
    } else {
      j++;
    }
  }
  str = str.join("");
  // str = str.split(/-|:|,/)
  for (i = 0, f = str.length; i < f; i++) {
    // @ts-ignore
    if (k1.indexOf(i) !== -1) {
      mappingFlag = "2";
      // @ts-ignore
    } else if (k2.indexOf(i) !== -1) {
      mappingFlag = "3";
    } else {
      mappingFlag = "1";
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
function toZenkanaCaseMAPPING() {
  let rtn =
    mappingFlag === "1"
      ? {
          0xff67: 0x30a1,
          0xff68: 0x30a3,
          0xff69: 0x30a5,
          0xff6a: 0x30a7,
          0xff6b: 0x30a9,
          0xff70: 0x30fc,
          0xff71: 0x30a2,
          0xff72: 0x30a4,
          0xff73: 0x30a6,
          0xff74: 0x30a8,
          0xff75: 0x30aa,
          0xff76: 0x30ab,
          0xff77: 0x30ad,
          0xff78: 0x30af,
          0xff79: 0x30b1,
          0xff7a: 0x30b3,
          0xff7b: 0x30b5,
          0xff7c: 0x30b7,
          0xff7d: 0x30b9,
          0xff7e: 0x30bb,
          0xff7f: 0x30bd,
          0xff80: 0x30bf,
          0xff81: 0x30c1,
          0xff82: 0x30c4,
          0xff83: 0x30c6,
          0xff84: 0x30c8,
          0xff85: 0x30ca,
          0xff86: 0x30cb,
          0xff87: 0x30cc,
          0xff88: 0x30cd,
          0xff89: 0x30ce,
          0xff8a: 0x30cf,
          0xff8b: 0x30d2,
          0xff8c: 0x30d5,
          0xff8d: 0x30d8,
          0xff8e: 0x30db,
          0xff8f: 0x30de,
          0xff90: 0x30df,
          0xff91: 0x30e0,
          0xff92: 0x30e1,
          0xff93: 0x30e2,
          0xff94: 0x30e4,
          0xff95: 0x30e6,
          0xff96: 0x30e8,
          0xff97: 0x30e9,
          0xff98: 0x30ea,
          0xff99: 0x30eb,
          0xff9a: 0x30ec,
          0xff9b: 0x30ed,
          0xff9c: 0x30ef,
          0xff9d: 0x30f3,
          0xff9e: 0x309b,
          0xff9f: 0x309c,
          0xff66: 0x30f2
        }
      : mappingFlag === "2"
      ? {
          0xff76: 0x30ac,
          0xff77: 0x30ae,
          0xff78: 0x30b0,
          0xff79: 0x30b2,
          0xff7a: 0x30b4,
          0xff7b: 0x30b6,
          0xff7c: 0x30b8,
          0xff7d: 0x30ba,
          0xff7e: 0x30bc,
          0xff7f: 0x30be,
          0xff80: 0x30c0,
          0xff81: 0x30c2,
          0xff82: 0x30c5,
          0xff83: 0x30c7,
          0xff84: 0x30c9,
          0xff8a: 0x30d0,
          0xff8b: 0x30d3,
          0xff8c: 0x30d6,
          0xff8d: 0x30d9,
          0xff8e: 0x30dc
        }
      : {
          0xff8a: 0x30d1,
          0xff8b: 0x30d4,
          0xff8c: 0x30d7,
          0xff8d: 0x30da,
          0xff8e: 0x30dd
        };
  return rtn;
}

// todo
// 新 連続番号  check

export function PasswordCheck(password) {
  //同一番号・連続番号かチェックを行う

  if (password.length == 4) {
    let num01 = password.charAt(0);
    let num02 = password.charAt(1);
    let num03 = password.charAt(2);
    let num04 = password.charAt(3);
    //①同一番号：1111、2222、3333、4444、5555、6666、7777、8888、9999、0000
    if (num01 == num02 && num02 == num03 && num03 == num04) {
      return true;
    }
    //②連続番号：0123、1234、2345、3456、4567、5678、6789
    if (
      password == "0123" ||
      password == "1234" ||
      password == "2345" ||
      password == "3456" ||
      password == "4567" ||
      password == "5678" ||
      password == "6789"
    ) {
      return true;
    }
    //③倒序番号：9876、8765、7654、6543、5432、4321、3210
    if (
      password == "9876" ||
      password == "8765" ||
      password == "7654" ||
      password == "6543" ||
      password == "5432" ||
      password == "4321" ||
      password == "3210"
    ) {
      return true;
    }

    // 获取  西历生日
    let birthday = decrypt(store.state.user.birthday);
    let ymd = birthday.split("/");
    let Y = ymd[0];
    let M = ymd[1];
    let D = ymd[2];
    // 1，西历转和历  和历年
    let Hlyear = calendarBirthday(birthday);
    if (Hlyear.length == 1) {
      Hlyear = "0" + Hlyear;
    }
    // 2，月日单位的前补零成2位的
    if (M.length == 1) {
      M = "0" + M;
    }
    if (D.length == 1) {
      D = "0" + D;
    }
    //  【チェック１】：生年月日の西暦4桁『2002』
    if (Y == password) {
      return true;
    }
    // 3，西历和历都取后6位（Y1Y2M1M2D1D2)
    // 西暦（YYYYMMDD）のうち、下６桁
    let SixX = (Y + M + D).slice(2);
    // 和暦（GYYMMDD）のうち、下６桁
    let SixH = Hlyear + M + D;
    // 4，分别对3中西历和历的6位进行如下check
    let XO1 = SixX.charAt(0);
    let XO2 = SixX.charAt(1);
    let XO3 = SixX.charAt(2);
    let XO4 = SixX.charAt(3);
    let XO5 = SixX.charAt(4);
    let XO6 = SixX.charAt(5);

    let HO1 = SixH.charAt(0);
    let HO2 = SixH.charAt(1);
    let HO3 = SixH.charAt(2);
    let HO4 = SixH.charAt(3);
    let HO5 = SixH.charAt(4);
    let HO6 = SixH.charAt(5);
    //          【チェック2】：  ①生年月日（６桁）の年月チェック：先頭「１、２、３、４桁」が入力と一致するかをチェック 　年月
    //          【チェック3】：  ②生年月日（６桁）の年日チェック：先頭「１、２、５、６桁」が入力と一致するかをチェック　　年日
    //          【チェック4】：  ③生年月日（６桁）の月日チェック：先頭「３、４、５、６桁」が入力と一致するかをチェック　　月日
    if (
      password == XO1 + XO2 + XO3 + XO4 ||
      password == HO1 + HO2 + HO3 + HO4 ||
      password == XO1 + XO2 + XO5 + XO6 ||
      password == HO1 + HO2 + HO5 + HO6 ||
      password == XO3 + XO4 + XO5 + XO6 ||
      password == HO3 + HO4 + HO5 + HO6
    ) {
      return true;
    }

    // 5，分别对3中西历和历的6位如果存在0的场合，去掉6位中所有的0、进行如下check
    // 西历
    if (SixX.indexOf("0") != -1) {
      let SixX02 = SixX.replace(/0/g, "");
      // 【チェック5】： ①圧縮後４桁：そのままチェック
      if (SixX02.length == 4 && password == SixX02) {
        return true;
      }
      //  【チェック6】：  ②圧縮後５桁：先頭から４桁をチェック、最終から４桁（下４桁）をチェック（２パターンのチェック）
      if (SixX02.length == 5) {
        if (
          SixX02.substring(0, 4) == password ||
          SixX02.substring(1, 5) == password
        ) {
          return true;
        }
      }
      //  【チェック7】：  ③圧縮後３桁：先頭桁にゼロをセットしてチェック、最終桁にゼロをセットしてチェック（２パターンのチェック）
      if (SixX02.length <= 3) {
        if (
          SixX02.padStart(4, "0") == password ||
          SixX02.padEnd(4, "0") == password
        ) {
          return true;
        }
      }
    }

    // 和历
    if (SixH.indexOf("0") != -1) {
      let SixH02 = SixH.replace(/0/g, "");
      // 【チェック5】： ①圧縮後４桁：そのままチェック
      if (SixH02.length == 4 && password == SixH02) {
        return true;
      }
      //  【チェック6】：  ②圧縮後５桁：先頭から４桁をチェック、最終から４桁（下４桁）をチェック（２パターンのチェック）
      if (SixH02.length == 5) {
        if (
          SixH02.substring(0, 4) == password ||
          SixH02.substring(1, 5) == password
        ) {
          return true;
        }
      }
      //  【チェック7】：  ③圧縮後３桁：先頭桁にゼロをセットしてチェック、最終桁にゼロをセットしてチェック（２パターンのチェック）
      if (SixH02.length <= 3) {
        if (
          SixH02.padStart(4, "0") == password ||
          SixH02.padEnd(4, "0") == password
        ) {
          return true;
        }
      }
    }
    // 住宅和连携，勤务先的电话，都check
    // 1，去掉-
    // 2，最后4位进行check
    let tele_number =
      decrypt(store.state.user.tele_number01) +
      "" +
      decrypt(store.state.user.tele_number02) +
      "" +
      decrypt(store.state.user.tele_number03);
    let phone_number =
      decrypt(store.state.user.phone_number01) +
      "" +
      decrypt(store.state.user.phone_number02) +
      "" +
      decrypt(store.state.user.phone_number03);
    let work_tele_number =
      decrypt(store.state.user.work_tele_number01) +
      "" +
      decrypt(store.state.user.work_tele_number02) +
      "" +
      decrypt(store.state.user.work_tele_number03);

    if (
      tele_number.slice(-4) == password ||
      phone_number.slice(-4) == password ||
      work_tele_number.slice(-4) == password
    ) {
      return true;
    }

    // 1,画面中入力的时候是半角的时候应该都处理成全角的了，所以取住所的カナ
    // 2,取出所有的数字半角转换，
    // 3，不足4位的时候，前补零到4位进行check，后补零到4位进行check
    // 4，大于等于4位的时候，上4位，下4位分别check
    let str = toSBC(decrypt(store.state.user.kana_address));
    let number = str.match(/\d+/g);
    if(number!=null){
      number = number.join("")
    
    if (number.length < 4 ) {
      if (
        number.padStart(4, "0") == password ||
        number.padEnd(4, "0") == password
      ) {
        return true;
      }
    }
    if (number.length >= 4) {
      if (number.slice(0, 4) == password || number.slice(-4) == password) {
        return true;
      }
    }
  }

  let str02 = toSBC(decrypt(store.state.user.work_kana_address));
  let number02 = str02.match(/\d+/g);
  if(number02!=null){
    number02 = number02.join("")
  
  if (number02.length < 4 ) {
    if (
      number02.padStart(4, "0") == password ||
      number02.padEnd(4, "0") == password
    ) {
      return true;
    }
  }
  if (number02.length >= 4) {
    if (number02.slice(0, 4) == password || number02.slice(-4) == password) {
      return true;
    }
  }
}
}
  return false;
}

// 重复
export function repeatNum(password) {
  if (password.length == 4) {
    let num01 = password.charAt(0);
    let num02 = password.charAt(1);
    let num03 = password.charAt(2);
    let num04 = password.charAt(3);
    if (num01 == num02 && num02 == num03 && num03 == num04) {
      return true;
    }
  } else if (password.length == 6) {
    let num01 = password.charAt(0);
    let num02 = password.charAt(1);
    let num03 = password.charAt(2);
    let num04 = password.charAt(3);
    let num05 = password.charAt(4);
    let num06 = password.charAt(5);
    if (
      num01 == num02 &&
      num02 == num03 &&
      num03 == num04 &&
      num04 == num05 &&
      num05 == num06
    ) {
      return true;
    }
  }

  return false;
}
//日期转和历
export function calendarBirthday(birthday) {
  ``;
  //明治
  let maiji = new Date("1868/10/23").getTime();
  //大正
  let taisyo = new Date("1912/07/30").getTime();
  //昭和
  let syowa = new Date("1926/12/25").getTime();
  //平成
  let heisei = new Date("1989/01/08").getTime();
  //令和ZoneOffset
  let reiwa = new Date("2019/05/01").getTime();

  let ymd = birthday.split("/");
  let brithdayEpoc = new Date(birthday).getTime();
  let year = new Date(birthday).getFullYear();
  let calendarName = "";
  let jpDate = "";
  if (maiji <= brithdayEpoc && brithdayEpoc < taisyo) {
    jpDate = year - 1867;
    calendarName = "明治";
  } else if (taisyo <= brithdayEpoc && brithdayEpoc < syowa) {
    jpDate = year - 1911;
    calendarName = "大正";
  } else if (syowa <= brithdayEpoc && brithdayEpoc < heisei) {
    jpDate = year - 1925;
    calendarName = "昭和";
  } else if (heisei <= brithdayEpoc && brithdayEpoc < reiwa) {
    jpDate = year - 1988;
    calendarName = "平成";
  } else {
    jpDate = year - 2018;
    calendarName = "令和";
  }
  //  alert( jpDate==1?calendarName+'元年':calendarName+jpDate+'年')

  return jpDate;
}

/**
 * ひらがなまたはカタカナからローマ字へ変換
 * @param {string} targetStr ローマ字へ変換する文字列（変換元の文字列）
 * @param {"hepburn"|"kunrei"} [type="hepburn"] ローマ字の種類
 * @param {Object} [options] その他各種オプション
 *                           {boolean} [options.bmp=true] ... "ん"（n）の次がb.m.pの場合にnからmへ変換するかどうか
 *                           {"latin"|"hyphen"} [options.longSound="latin"] ... 長音の表し方
 * @return {string} ローマ字へ変換された文字列を返す
 */
export function kanaToRoman(targetStr, type, options) {
  /**
   * 変換マップ
   */
  var romanMap = {
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    さ: "sa",
    し: { hepburn: "shi", kunrei: "si" },
    す: "su",
    せ: "se",
    そ: "so",
    た: "ta",
    ち: { hepburn: "chi", kunrei: "ti" },
    つ: { hepburn: "tsu", kunrei: "tu" },
    て: "te",
    と: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    は: "ha",
    ひ: "hi",
    ふ: { hepburn: "fu", kunrei: "hu" },
    へ: "he",
    ほ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    わ: "wa",
    ゐ: "wi",
    ゑ: "we",
    を: { hepburn: "o", kunrei: "wo" },
    ん: "n",
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ざ: "za",
    じ: { hepburn: "ji", kunrei: "zi" },
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    だ: "da",
    ぢ: { hepburn: "ji", kunrei: "di" },
    づ: { hepburn: "zu", kunrei: "du" },
    で: "de",
    ど: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    きゃ: "kya",
    きぃ: "kyi",
    きゅ: "kyu",
    きぇ: "kye",
    きょ: "kyo",
    くぁ: "qa",
    くぃ: "qi",
    くぇ: "qe",
    くぉ: "qo",
    くゃ: "qya",
    くゅ: "qyu",
    くょ: "qyo",
    しゃ: { hepburn: "sha", kunrei: "sya" },
    しぃ: "syi",
    しゅ: { hepburn: "shu", kunrei: "syu" },
    しぇ: "sye",
    しょ: { hepburn: "sho", kunrei: "syo" },
    ちゃ: { hepburn: "cha", kunrei: "tya" },
    ちぃ: ["tyi"],
    ちゅ: { hepburn: "chu", kunrei: "tyu" },
    ちぇ: ["tye"],
    ちょ: { hepburn: "cho", kunrei: "tyo" },
    てゃ: "tha",
    てぃ: "thi",
    てゅ: "thu",
    てぇ: "the",
    てょ: "tho",
    ひゃ: "hya",
    ひぃ: "hyi",
    ひゅ: "hyu",
    ひぇ: "hye",
    ひょ: "hyo",
    ふぁ: "fa",
    ふぃ: "fi",
    ふぇ: "fe",
    ふぉ: "fo",
    みゃ: "mya",
    みぃ: "myi",
    みゅ: "myu",
    みぇ: "mye",
    みょ: "myo",
    ヴぁ: "va",
    ヴぃ: "vi",
    ヴぇ: "ve",
    ヴぉ: "vo",
    ぎゃ: "gya",
    ぎぃ: "gyi",
    ぎゅ: "gyu",
    ぎぇ: "gye",
    ぎょ: "gyo",
    じゃ: { hepburn: "ja", kunrei: "zya" },
    じぃ: "zyi",
    じゅ: { hepburn: "ju", kunrei: "zyu" },
    じぇ: "zye",
    じょ: { hepburn: "jo", kunrei: "zyo" },
    ぢゃ: { hepburn: "dya", kunrei: "zya" },
    ぢぃ: "dyi",
    ぢゅ: { hepburn: "dyu", kunrei: "zya" },
    ぢぇ: "dye",
    ぢょ: { hepburn: "dyo", kunrei: "zya" },
    びゃ: "bya",
    びぃ: "byi",
    びゅ: "byu",
    びぇ: "bye",
    びょ: "byo",
    ぴゃ: "pya",
    ぴぃ: "pyi",
    ぴゅ: "pyu",
    ぴぇ: "pye",
    ぴょ: "pyo",
    ぁ: "xa",
    ぃ: "xi",
    ぅ: "xu",
    ぇ: "xe",
    ぉ: "xo",
    ゃ: "xya",
    ゅ: "xyu",
    ょ: "xyo",
    っ: "xtu",
    ヴ: "vu",
    ー: "-",
    "、": ", ",
    "，": ", ",
    "。": "."
  };

  /**
   * 長音のラテン文字
   */
  var latins = {
    hepburn: {
      a: 257,
      i: 299,
      u: 363,
      e: 275,
      o: 333
    },
    kunrei: {
      a: 226,
      i: 238,
      u: 251,
      e: 234,
      o: 244
    }
  };

  if (typeof targetStr !== "string" && typeof targetStr !== "number") {
    throw "変換する対象が文字列ではありません。";
  }

  if (typeof type !== "string" || !type.match(/^(hepburn|kunrei)$/))
    type = "hepburn";

  if (!options) options = {};
  if (typeof options.kana !== "string") options.kana = "all";
  if (!options.kana.match(/^(all|hiragana|katakana)$/)) options.kana = "all";
  if (typeof options.bmp !== "boolean") options.bmp = true;
  if (typeof options.longSound !== "string") options.longSound = "latin";
  if (!options.longSound.match(/^(latin|hyphen)$/)) options.longSound = "latin";

  var remStr = String(targetStr),
    result = "",
    slStr,
    roman,
    lastStr;

  /**
   * 残りの文字列から1文字を切り抜く
   * @return {string} 切り抜いた1つの文字列を返す
   */
  var splice = function() {
    var oneChar = remStr.slice(0, 1);
    remStr = remStr.slice(1);
    return oneChar;
  };

  /**
   * 残りの文字列の最初が小文字か判定
   * @return {boolean} 小文字の場合はtrue、そうでない場合はfalseを返す
   */
  var isSmallChar = function() {
    return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょァィゥェォャュョ]$/);
  };

  /**
   * カタカナからひらがなへ変換
   * @param {string} kana 元とおなるカタカナ
   * @return {string} ひらがなへ変換された文字列
   */
  var toHiragana = function(kana) {
    return kana.replace(/[\u30a1-\u30f6]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
  };

  /**
   * ひらがなから対応するローマ字を取得
   * @param {string} kana 元となるひらがな
   * @return {string} 見つかった場合は対応するローマ字、見つからなかったら元のひらがなを返す
   */
  var getRoman = function(kana) {
    var roman = romanMap[toHiragana(kana)];
    if (roman) {
      if (typeof roman === "string") {
        return roman;
      } else if (type === "hepburn") {
        return roman.hepburn;
      } else if (type === "kunrei") {
        return roman.kunrei;
      }
    } else {
      return kana;
    }
  };

  while (remStr) {
    slStr = splice();

    if (slStr.match(/^(っ|ッ)$/)) {
      slStr = splice();
      if (isSmallChar()) slStr += splice();

      roman = getRoman(slStr);
      roman = (roman !== slStr ? roman.slice(0, 1) : "") + roman;
    } else {
      if (isSmallChar()) slStr += splice();

      roman = getRoman(slStr);
    }

    var nextRoman = kanaToRoman(remStr.slice(0, 1));
    if (roman === "n") {
      if (nextRoman.match(/^[aiueo]$/)) {
        roman += type === "hepburn" ? "-" : "'";
      } else if (
        options.bmp &&
        nextRoman.match(/^[bmp]/) &&
        type === "hepburn"
      ) {
        roman = "m";
      }
    } else if (roman === "-") {
      lastStr = result.match(/[aiueo]$/);
      if (lastStr && options.longSound === "latin") {
        result = result.slice(0, -1);
        roman = String.fromCharCode(latins[type][lastStr[0]]);
      }
    }

    result += roman;
  }

  return result;
}

export function getUserAge(birthDay,is0402){
  const birthDayAge = new Date(birthDay);
  //当前年份
  let Year0402 = new Date().toDateString();
  if(is0402){
    let now = new Date()
     //当前年份的0402
    let thisYear0402 = now.getFullYear()+ "/04/01";
    let beforYear0402 = now.getFullYear()-1+ "/04/01"
    if(now > new Date(thisYear0402)){
      Year0402 = thisYear0402;
      }else{
        Year0402 = beforYear0402;
      }
  }
  if (new Date(Year0402) < birthDayAge) { //出生日期晚于当前时间，无法计算
    return 0;
  }

  let Year0402Date = new Date(Year0402);
  let yearNow = Year0402Date.getFullYear();  //当前年份
  let monthNow =Year0402Date.getMonth() + 1;  //当前月份
  let dayOfMonthNow = Year0402Date.getDate(); //当前日期

  let yearBirth = birthDayAge.getFullYear();
  let monthBirth = birthDayAge.getMonth() + 1;
  let dayOfMonthBirth = birthDayAge.getDate();

  let age = yearNow - yearBirth;   //计算整岁数
  if (monthNow <= monthBirth) {
      if (monthNow == monthBirth) {
          if (dayOfMonthNow < dayOfMonthBirth) {
              age--;//当前日期在生日之前，年龄减一
          }
      } else {
          age--;//当前月份在生日之前，年龄减一
      }
  }
  return age;
}

// ^(?:[ぁ-んァ-ン]|[一-龥]|[〃仝々]|[ゞゝゐゔゑ]|[ヾヽヷヰヸヴヱヹヲヺヶ]|[ａ-ｚＡ-Ｚ]|[0-9\\uFF10-\\uFF19]|[ﾟﾞ]|[\\u3000]|[\\\\]|[（）]|[ー|−|―|－])+$
// public static int getUserAge(String birthDay,boolean is0402) throws Exception {
//   SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
//   Date birthDayAge = sdf.parse(birthDay);
//   Calendar cal = Calendar.getInstance();
//   //是否采取0402的算法
//   if(is0402){
//       //当前年份的0402
//       Date thisYear0402 =  sdf.parse( String.valueOf(LocalDate.now().getYear()) + "0402");
//       //前一年的0402
//       Date beforYear0402 = sdf.parse(String.valueOf(LocalDate.now().getYear() - 1) + "0402");
//       Date nowDate = new Date();
//       if(nowDate.after(thisYear0402)){
//           cal.setTime(thisYear0402);
//       }else{
//           cal.setTime(beforYear0402);
//       }
//   }

//   if (cal.before(birthDayAge)) { //出生日期晚于当前时间，无法计算
//       return 0;
//   }
//   int yearNow = cal.get(Calendar.YEAR);  //当前年份
//   int monthNow = cal.get(Calendar.MONTH);  //当前月份
//   int dayOfMonthNow = cal.get(Calendar.DAY_OF_MONTH); //当前日期

//   cal.setTime(birthDayAge);
//   int yearBirth = cal.get(Calendar.YEAR);
//   int monthBirth = cal.get(Calendar.MONTH);
//   int dayOfMonthBirth = cal.get(Calendar.DAY_OF_MONTH);

//   int age = yearNow - yearBirth;   //计算整岁数
//   if (monthNow <= monthBirth) {
//       if (monthNow == monthBirth) {
//           if (dayOfMonthNow < dayOfMonthBirth) {
//               age--;//当前日期在生日之前，年龄减一
//           }
//       } else {
//           age--;//当前月份在生日之前，年龄减一
//       }
//   }
//   return age;
// }
                                   

