import { TimeFormat, setDateByMonth, setDateByYear } from '@/utils/date-time.js'

describe('Utils:TimeFormat', () => {
  it('测试TimeFormat方法', () => {
    // 时间格式 yyyy/MM/dd
    expect(TimeFormat('2016/01/01', 'yyyy/MM/dd')).toBe('2016/01/01')
    // 时间格式 y/M/d
    expect(TimeFormat('2016/02/29', 'y/M/d')).toBe('6/2/29')
    // 时间格式 y/M
    expect(TimeFormat('2017/02/29', 'y/M')).toBe('7/3')
    // 时间格式 y
    expect(TimeFormat('2016/01/01', 'y')).toBe('6')
    // 时间格式 hh
    expect(TimeFormat(new Date('2016/01/01 13:16:52.23'), 'hh')).toBe('13')
    // 时间格式 hh/mm
    expect(TimeFormat(new Date('2016/01/01 13:15:52.23'), 'hh/mm')).toBe('13/15')
    // 时间格式 q
    expect(TimeFormat(new Date('2016/11/01'), 'q')).toBe('4')
    // 时间格式 yyyy/MM/dd/hh/mm/ss/SS
    expect(TimeFormat(new Date('2016/01/01 10:10:52.23'), 'yyyy/MM/dd/hh/mm/ss/SS')).toBe('2016/01/01/10/10/52/230S')

    expect(TimeFormat(new Date('2016/01/01 10:10:52.033'), 'yyyy/MM/dd/hh/mm/ss/SS')).toBe('2016/01/01/10/10/52/033S')
    expect(TimeFormat(new Date('2016/01/01 10:10:52.003'), 'yyyy/MM/dd/hh/mm/ss/SS')).toBe('2016/01/01/10/10/52/003S')
    expect(TimeFormat(new Date('2016/01/01 10:10:52.000'), 'yyyy/MM/dd/hh/mm/ss/SS')).toBe('2016/01/01/10/10/52/000S')

  })
})

describe('Utils:setDateByMonth', () => {
  it('test new date01', () => {
    // 加2月
    expect(setDateByMonth(new Date('2019/11/08'), '+2')).toBe('2020/01/09')
    // 加1月
    expect(setDateByMonth(new Date('2016/02/29'), '+1')).toBe('2016/03/31')
    // 加5月
    expect(setDateByMonth(new Date('2018/02/28'), '+5')).toBe('2018/08/02')
    // 减1月
    expect(setDateByMonth(new Date('2019/11/08'), '-1')).toBe('2019/10/08')
    // 减3月
    expect(setDateByMonth(new Date('2016/02/29'), '-3')).toBe('2015/11/28')
    // 减1月
    expect(setDateByMonth(new Date('2017/02/28'), '-1')).toBe('2017/01/28')
    // 全角数字
    expect(setDateByMonth(new Date(), '+３')).toBe('')
    expect(setDateByMonth(new Date('2019/02/28'), '-６')).toBe('')
    // ++ 符号
    expect(setDateByMonth(new Date(), '++')).toBe('')
    // +r
    expect(setDateByMonth(new Date(), '+r')).toBe('')
    // 时间格式字符串 =》 可以理解为数字字符串等
    expect(setDateByMonth('2019/03/31', '-1')).toBe('')
    // 字母
    expect(setDateByMonth('aaaaaaaa', '--')).toBe('')
    // 全角符号
    expect(setDateByMonth(new Date('2017/02/28'), '－６')).toBe('')
  })
})

describe('Utils:setDateByYear', () => {
  it('test new date', () => {
    // 加2年
    expect(setDateByYear(new Date('2019/11/08'), '+2')).toBe('2021/11/09')
    // 加3年
    expect(setDateByYear(new Date('2016/02/29'), '+3')).toBe('2019/03/03')
    // 加8年
    expect(setDateByYear(new Date('2019/02/28'), '+8')).toBe('2027/03/06')
    // 减5年
    expect(setDateByYear(new Date('2019/11/08'), '-5')).toBe('2014/11/04')
    // 减1年
    expect(setDateByYear(new Date('2016/02/29'), '-1')).toBe('2015/02/28')
    // 减7年
    expect(setDateByYear(new Date('2019/02/28'), '-7')).toBe('2012/02/23')
    // 全角数字入参
    expect(setDateByYear(new Date(), '+４')).toBe('')
    expect(setDateByYear(new Date('2019/02/28'), '-８')).toBe('')
    // 全角符号入参
    expect(setDateByYear(new Date(), '＋４')).toBe('')
    expect(setDateByYear(new Date(), '－６')).toBe('')
    expect(setDateByYear(new Date(), '＋2')).toBe('')
    // ++ 符号
    expect(setDateByYear(new Date(), '++')).toBe('')
    // t+ 符号
    expect(setDateByYear(new Date(), 't+')).toBe('')
    // 时间为字符串格式入参
    expect(setDateByYear('2016/02/29', '-1')).toBe('')
    // 时间为字符串入参
    expect(setDateByYear('rrrrr', '-1')).toBe('')
  })
})

