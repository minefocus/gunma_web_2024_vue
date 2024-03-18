import request from '@/utils/request'
import { REQ_METHOD, API_PATH } from '@/api/constant_api'





export function MAILE_APPLY_POST(data) {
  return request({
    url: API_PATH.MAILE_APPLY,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function AGREE_INIT_POST(data) {
  return request({
    url: API_PATH.AGREE_INIT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function TAKE_PHOTO_POST(data) {
  return request({
    url: API_PATH.TAKE_PHOTO,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function CUSTOMER_INPUT_INIT_POST(data) {
  return request({
    url: API_PATH.CUSTOMER_INPUT_INIT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function ACCOUNT_APPLICATION_POST(data) {
  return request({
    url: API_PATH.ACCOUNT_APPLICATION,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}



export function GET_DOCUMENTS(data) {
  return request({
    url: API_PATH.GET_DOCUMENTS,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function GET_ACCOUNT_STORE(data) {
  return request({
    url: API_PATH.GET_ACCOUNT_STORE,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function GET_ADDRESS(data) {
  return request({
    url: API_PATH.GET_ADDRESS,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function UPT_AGREEN_AT(data) {
  return request({
    url: API_PATH.UPT_AGREEN_AT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function LOCK_INFO(data) {
  return request({
    url: API_PATH.LOCK_INFO,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}
export function GET_ACCOUNT(data) {
  return request({
    url: API_PATH.GET_ACCOUNT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function Test(params) {
  return request({
    url: API_PATH.TEST,
    method: REQ_METHOD.METHOD_GET,
    params
  })
}

// 案内
export function AUTHENTICATION_INIT(data) {
  return request({
    url: API_PATH.AUTHENTICATION_INIT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}
export function CHECK_LOCK_INFO(data) {
  return request({
    url: API_PATH.CHECK_LOCK_INFO,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}
export function GET_ACOUNT(data) {
  return request({
    url: API_PATH.GET_ACOUNT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}
export function GET_CODE(params) {
  return request({
    url: API_PATH.GET_CODE,
    method: REQ_METHOD.METHOD_GET,
    params
  })
}
export function CHECK_AGE(data) {
  return request({
    url: API_PATH.CHECK_AGE,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function EKYC_BACK_INIT(data) {
  return request({
    url: API_PATH.EKYC_BACK_INIT,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}

export function SALES_STORE_SEARCH(data) {
  return request({
    url: API_PATH.SALES_STORE_SEARCH,
    method: REQ_METHOD.METHOD_POST,
    data
  })
}








