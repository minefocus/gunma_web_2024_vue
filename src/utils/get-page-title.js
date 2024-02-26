import defaultSettings from '@/settings'

const title = defaultSettings.title || '広島銀行アプリ'
// const title =  'Vue Admin Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
