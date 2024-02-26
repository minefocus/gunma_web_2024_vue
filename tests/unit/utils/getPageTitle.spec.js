import getPageTitle from '@/utils/get-page-title'

describe('Utils:getPageTitle', () => {
  it('get-page-title-test', () => {
    // 函数参数存在
    expect(getPageTitle('vue-admin')).toBe('vue-admin - Vue Admin Template')
    // 函数参数不存在
    expect(getPageTitle()).toBe('Vue Admin Template')
  })
})
