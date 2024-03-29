export const REQ_METHOD = {
  METHOD_GET: 'get',
  METHOD_POST: 'post',
  METHOD_PUT: 'put'
}

// code
export const HTTP_CODE = {
  HTTP_200_OK: 200,
  HTTP_201_CREATED: 201,
  HTTP_300_MULTIPLE_CHOICES: 300,
  HTTP_301_MOVED_PERMANENTLY: 301,
  HTTP_302_FOUND: 302,
  HTTP_303_SEE_OTHER: 303,
  HTTP_400_BAD_REQUEST: 400,
  HTTP_401_UNAUTHORIZED: 401,
  HTTP_402_PAYMENT_REQUIRED: 402,
  HTTP_403_FORBIDDEN: 403,
  HTTP_404_NOT_FOUND: 404,
  HTTP_500_INTERNAL_SERVER_ERROR: 500
}

// api请求url
const API = {

  //  API 定义属性
  MAILE_APPLY: '', //管理番号を作成して、送信
  AGREE_INIT:'',//管理番号をチェック
  TAKE_PHOTO:'',//口座開設web：「eKYC説明」画面で撮影ボタンを押下
  EKYC_BACK_INIT:'',
  CUSTOMER_INPUT_INIT:'',//口座開設web：「顧客情報入力」画面初期化
  ACCOUNT_APPLICATION:'',//口座開設web：「申込内容確認」画面で「この内容で申込む」ボタンを押下
  GET_DOCUMENTS:'', //ドキュメント情報取得API
  CUSTOMER_INPUT_INIT: '',//顧客情報入力画面初期化API
  CHECK_INPUT:'',
  GET_ACCOUNT_STORE:'',
  SALES_STORE_SEARCH:'',
  GET_ADDRESS:'',
  UPT_AGREEN_AT:'',
  LOCK_INFO:'',
  GET_ACCOUNT:'',
  TEST:'',
  CHECK_AGE:'', //年齢チェック
  

}

const STUB = {

  // API 具体地址
  MAILE_APPLY: 'v1/visa/mail_apply',//管理番号を作成して、送信
  AGREE_INIT: 'v1/visa/agree_init',//管理番号をチェック
  TAKE_PHOTO:'v1/visa/take_photo',//口座開設web：「eKYC説明」画面で撮影ボタンを押下
  EKYC_BACK_INIT:'v1/visa/ekyc_back_init',
  CUSTOMER_INPUT_INIT:'v1/visa/customer_input_init',//口座開設web：「顧客情報入力」画面初期化
  ACCOUNT_APPLICATION:'v1/visa/account_application',//口座開設web：「申込内容確認」画面で「この内容で申込む」ボタンを押下
  GET_DOCUMENTS:'v1/visa/get_documents',//ドキュメント情報取得API
  GET_ACCOUNT_STORE:'v1/visa/get_accout_store',
  CHECK_INPUT:'v1/visa/check_input',
  SALES_STORE_SEARCH:'v1/visa/sales_store_search',
  GET_ADDRESS:'v1/visa/select_address',
  UPT_AGREEN_AT:'v1/visa/upt_agreen_at',
  LOCK_INFO:'v1/visa/check_lock_info',
  GET_ACCOUNT:'v1/visa/get_account',
  AUTHENTICATION_INIT:'v1/visa/authentication_init', //管理番号を取得する	開設口座案内WEB：「ユーザー認証」画面初期化
  CHECK_LOCK_INFO:'v1/visa/check_lock_info',	    //ロック情報をチェックする	開設口座案内WEB：「ユーザー認証」画面で次へボタンを押下
  GET_ACOUNT:'v1/visa/get_account',	              //口座情報を取得する	開設口座案内WEB：「案内」画面初期化
  GET_CODE:'v1/visa/get_code',
  CHECK_AGE:'v1/visa/check_age', //年齢チェック
  TEST:'v1/visa/test',

}

export const API_PATH = 0 ? API : STUB
