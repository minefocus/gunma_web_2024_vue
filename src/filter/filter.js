
import { INSIGHT } from '@/filter/json'
import { TimeFormat } from '@/utils/date-time'
import { isEmpty } from '@/utils/validate'
// 日期格式

export default{}
const dateFormat = (date, format) => {
  if (format !== '' && format !== null) {
    return TimeFormat(date.replace('T', ' ').substring(0, 19), format)
  } else {
    return date
  }

}


const Job = (value) => {
  const status = {}
  INSIGHT.applyStatusData.forEach(data => {
    status[data.id] = data.title
  })

  return status[value]
}
const Questions= (value) => {
  const status = {}
  INSIGHT.Page02Data.forEach(data => {
    status[data.id] = data.title
  })
  return status[value]
}
const Purpose= (value) => {
  const status = {}
  INSIGHT.Page02Data02.forEach(data => {
    status[data.id] = data.title
  })
  return status[value]
}
const Sex= (value) => {
  const status = {}
  INSIGHT.Sex.forEach(data => {
    status[data.id] = data.title
  })
  return status[value]
}
const NOVALUE= (value) => {
  if(value!=undefined  && isEmpty(value) ){
    const status = {}
    INSIGHT.NOVALUE.forEach(data => {
      status[data.id] = data.title
    })
    return status[value]
  }else{
    return value
  }
 
}
const STORENAME= (value) => {
  const status = {}
  INSIGHT.STORENAME.forEach(data => {
    status[data.id] = data.title
  })
  return status[value]
}

const Jobs = (value)=>{
  const status = {}
  INSIGHT.JobList.forEach(data => {
    status[data.id] = data.title
  })
  return status[value]
}

export {
  Job,
  Questions,
  Purpose,
  Sex,
  NOVALUE,
  STORENAME,
  Jobs
}
