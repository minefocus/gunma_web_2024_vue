// 使用方法
// import { TimeFormat } from '@/utils/date-time'
//   TimeFormat("yyyy-MM-dd") "yyyy-MM-dd hh:mm:ss" // 想要什么格式自己定义
export function TimeFormat(newDate, fmt) {
  if (newDate === '' || newDate === null || String(newDate).length === 0) {
    return;
  }
  let nowDate = ''
  if (typeof newDate === 'string') {
    nowDate = new Date(newDate.replace('-', '/'))
  } else {
    nowDate = new Date(newDate)
  }
  let milliseconds = '000'+nowDate.getMilliseconds()

  var o = {
    'M+': nowDate.getMonth() + 1, // 月份
    'd+': nowDate.getDate(), // 日
    'h+': nowDate.getHours(), // 小时
    'm+': nowDate.getMinutes(), // 分
    's+': nowDate.getSeconds(), // 秒
    'q+': Math.floor((nowDate.getMonth() + 3) / 3), // 季度
    'S': milliseconds.substr(milliseconds.length-3)// 毫秒

  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (nowDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

// 日期的日份加减函数
// newDate:需要计算的日期，必须是日期格式
// num：需要加减的日数 +n计算n个日后；-n计算n个日前
// 返回值：计算后的日期yyyy/MM/dd格式
export function setDateByDay(newDate, num) {
  if (newDate instanceof Date && parseInt(num)) {
    const nowDate = new Date(newDate)
    return TimeFormat(nowDate.setHours(nowDate.getHours() + 24 * num), 'yyyy/MM/dd')
  } else {
    return ''
  }
}

// 日期的月份加减函数
// newDate:需要计算的日期，必须是日期格式
// num：需要加减的月数 +n计算n个月后；-n计算n个月前
// 返回值：计算后的日期yyyy/MM/dd格式
export function setDateByMonth(newDate, num) {
  if (newDate instanceof Date && parseInt(num)) {
    const nowDate = new Date(newDate)
    return TimeFormat(nowDate.setHours(nowDate.getHours() + 31 * 24 * num), 'yyyy/MM/dd')
  } else {
    return ''
  }
}

// 日期的年份加减函数
// newDate:需要计算的日期，必须是日期格式
// num：需要加减的月数 +n计算年后；-n计算n年前
// 返回值：计算后的日期yyyy/MM/dd格式
export function setDateByYear(newDate, num) {
  if (newDate instanceof Date && parseInt(num)) {
    const nowDate = new Date(newDate)
    return TimeFormat(nowDate.setHours(nowDate.getHours() + 366 * 24 * num), 'yyyy/MM/dd')
  } else {
    return ''
  }
}

// 日付の月と日の0を補足する
export function zeroAdd(date) {
  if (String(date).length === 1) {
    return '0' + String(date)
  }
  return date
}
