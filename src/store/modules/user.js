import {encrypt} from '../../utils/jse'
const state = {
    initApiflg:'',
    tele_flg: '',
    contractor_flg: '',
    kana_address_other:'',
    seq_no: '', //管理番号
    cord_type:'',
    kana_last_name:'',//お名前_セイ
    kana_first_name:'',//お名前_メイ
    customer_id: '', //顧客ID
    application_at: '', //申込日時
    application_type: '', //申込種類
    mail_address: '', //メールアドレス
    mail_confirm_status: '', //メールアドレス確認状況
    application_status: '', //申込ステータス
    application_id_1: '', //連携ID1
    id_document_type_1: '', //連携ID1本人確認書類コード
    name_first:'',
    name_last:'',
    birthday: '', //生年月日
    address: '', //住所
    sex: '', //性别
    zip_code: '', //郵便番号
    // account_address_pref: '', //都道府県
    // account_address_city: '', //市区町村
    account_store_number: '',//支店
    // account_reason:'',//理由
    address_pref:'',//住所（都道府県）
    address_city:'',//住所（市区町村）
    address_number:'',
    address_other: '', //住所（その他）
    tele_number01: '', //自宅電話番号01 -
    tele_number02: '', //自宅電話番号02 -
    tele_number03: '', //自宅電話番号03 -
    phone_number01: '', //携帯電話番号01 -
    phone_number02: '', //携帯電話番号02 -
    phone_number03: '', //携帯電話番号03 -
    job_kbn: '', //職業 -
    job_kbn_other: '', //その他職業 -
    work_name: '', //勤務先名 -
    work_tele_number01: '', //勤務先電話番号01-
    work_tele_number02: '', //勤務先電話番号02-
    work_tele_number03: '', //勤務先電話番号03-
    store_number: '', //店番
    security_password: '', //キャッシュカード暗証番号
    security_password02: '',
    // contractor_number: '', //契約者番号
    creditlimit: '', //1日あたりの振込限度額
    online_password: '', //インターネットバンキング暗証番号
    online_password02: '', //インターネットバンキング暗証番号
    questionnaire: '', //アンケート
    questionnaire_other: '', //その他アンケート
    account_purpose: '', //取引目的
    account_purpose_other: '', //その他取引目的
    account_reason:'',
    account_reason_other:'',
    output_result: '', //出力済フラグ
    created_id: '', //作成者ID
    created_at: '', //作成日時
    updated_id: '', //更新者ID
    updated_at: '', //更新日時
 
    // balance_password:'', //かんたん残高照会パスワード
    // balance_password02:'' //かんたん残高照会パスワード02
    introduce_flg_02:'',
    introduce_flg:'',//紹介コードflg
    introduce_cd:'', //紹介コード
    introduce_cd_02:'', //紹介コード
    introduce_list:'',
    work_address:'',
    work_zip_code:'',
    introduce_nm:'',
    account_store_nm:'',
    stateCopy:'',
    tokushima_flg:'',
    introduce_flg:'',
}
const getters={
    getSeqNo(state){
        return state.seq_no
    },
    getApplication(state){
        return state.application_id_1
    },
    getAllVlues(state){
    let list = {}
     for(let key in state){
        list[key] = state[key]
     }
        return list
    }
}
const mutations = {

    setState(state, opt) {
        for (let [key, val] of Object.entries(opt)) {
            console.log(key,"-",val);
            state[key] = encrypt(val);
        }
    },
    setSeqNo(state,value){
        state.seq_no=value
    },
    setApplication(state,value){
        state.application_id_1=value
    },
    initial(state){
        for(let key in state){
            state[key]=''
        }
    }
    
}

const actions = {
    pushToken(context,token){
        context.commit('setSeqNo',token)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}