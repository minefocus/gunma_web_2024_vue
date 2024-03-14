export const MESSAGE = {
    MSGTypeSuccess: 'success',
    MSGTypeWarning: 'warning',
    MSGTypeInfo: 'info',
    MSGTypeError: 'error',
    errorMsg:'お手数をおかけいたしますが、もう一度操作をやり直してください。<br>繰り返しエラーが発生する場合は、下記の連絡先にお問い合わせください。',
    timeOut:'長時間操作されなかったため、操作は無効になりました。<br>最初からやり直してください。',
  
    HttpCode400: '(400)不正なリクエストです。<br>繰り返し発生する場合は、操作内容を管理者にご連絡ください。',
    HttpCode403: '(403)権限がない、または長時間の放置により失効しています。',
    HttpCode404: '(404)対象が見つかりません。<br>URLを直接入力したり、履歴から特定の画面を開くことはできません。',
    HttpCode500: '(500)サーバーがメンテナンス中、またはアクセスの集中により応答できない状態です。<br>しばらく待っても改善しない場合は、管理者にご連絡ください。',
    HttpCode502: '(502)ネットワークで障害が発生しています。<br>管理者にご連絡ください。',
    HttpCode503: '(503)サーバーがメンテナンス中、またはアクセスの集中により応答できない状態です。<br>しばらく待っても改善しない場合は、管理者にご連絡ください。',
    HttpCode504: '(504)アクセスの集中により応答できない状態です。<br>しばらく待っても改善しない場合は、管理者にご連絡ください。',
    HttpErrorCode:'お手数をおかけいたしますが、もう一度操作をやり直してください。',



    MsgErrCheck000: '入力してください',
    MsgErrCheck001: '全角10文字以内で入力してください',
    MsgErrCheck002: '全角カタカナ20文字以内で入力してください',
    MsgErrCheck003: '入力してください',
    MsgErrCheck004: '選択してください',
    MsgErrCheck005: '半角数字7桁で入力してください',
    MsgErrCheck006: '全角30文字以内で入力してください',
    MsgErrCheck007: '半角数字11桁で入力してください',
    MsgErrCheck008: '全角20文字以内で入力してください',
    MsgErrCheck009: '全角60文字以内で入力してください',
    MsgErrCheck010: '半角数字10-11桁で入力してください',
    MsgErrCheck011: '半角数字4桁で入力してください',
    MsgErrCheck012: '入力内容が一致していません',
    MsgErrCheck013: '半角数字6桁で入力してください',
    MsgErrCheck014: '該当する項目をすべてチェックしてください。',
    MsgErrCheck015: '半角数字10桁で入力してください。',
    MsgErrCheck016: '使用できない文字が含まれています',
    MsgErrCheck017: '内容をご確認のうえ、よろしければチェックボックスにチェックを入れてください。',
    MsgErrCheck018: '全角カナ１５文字以下',
    MsgErrCheck019: '半角英数６文字で入力してください',
    MsgErrCheck020: '全角１５文字以下で入力してください',
    MsgErrCheck021: '半角数字４桁で入力してください',
    MsgErrCheck022: '紹介コードの入力に誤りがあります。',
    MsgErrCheck023: '0～100の範囲で入力してください',

    MsgErrCheck024: 'メールアドレスを入力してください',
    MsgErrCheck025: 'メールアドレスに使用できない文字が含まれています',
    MsgErrCheck026: 'お名前（漢字）の姓を入力してください',
    MsgErrCheck027: 'お名前（漢字）の姓は全角10文字まで入力してください',
    MsgErrCheck028: 'お名前（漢字）の名を入力してください',
    MsgErrCheck029: 'お名前（漢字）の名は全角10文字までで入力してください',
    MsgErrCheck030: 'お名前（フリガナ）のセイを入力してください',
    MsgErrCheck031: 'お名前（フリガナ）のセイは20文字まで入力してください',
    MsgErrCheck032: 'お名前（フリガナ）のメイを入力してください',
    MsgErrCheck033: '生年月日を入力してください', 
    MsgErrCheck034: '性別を選択してください', 
    MsgErrCheck035: '郵便番号を入力してください', 
    MsgErrCheck036: '郵便番号は半角数字7文字で入力してください', 
    MsgErrCheck037: '都道府県を選択してください', 
    MsgErrCheck038: '市区町村を入力してください', 
    MsgErrCheck039: '市区町村は全角20文字まで入力してください', 
    MsgErrCheck040: 'マンション・部屋番号は全角20文字までで入力してください',
    MsgErrCheck041: 'マンション・部屋番号（フリガナ）は全角20文字までで入力してください',

    MsgErrCheck042: 'お持ちの電話を選択してください',
    MsgErrCheck043: '自宅（固定電話）の電話番号を入力してください', 
    MsgErrCheck044: '自宅（固定電話）の電話番号は半角数字10-11桁で入力してください', 
    MsgErrCheck045: '携帯の電話番号を入力してください',
    MsgErrCheck046: '携帯の電話番号は半角数字11桁で入力してください',
    MsgErrCheck047: 'ご職業を選択してください',
    MsgErrCheck048: 'ご職業を入力してください',
    MsgErrCheck049: 'ご職業を全角20文字までで入力してください',
    MsgErrCheck050: 'お勤め先（学校名）は全角60文字までで入力してください',
    MsgErrCheck051: 'お勤め先電話番号を入力してください',
    MsgErrCheck052: 'お勤め先電話番号は半角数字10-11文字で入力してください',
    MsgErrCheck053: 'お勤め先住所は全角60文字までで入力してください',
    

    MsgErrCheck054: 'お取引の目的を選択してください',
    MsgErrCheck055: 'お取引の目的を入力してください',
    MsgErrCheck056: 'お取引の目的は全角20文字までで入力してください',
    MsgErrCheck057: '紹介コードをお持ちかどうか選択してください',
    MsgErrCheck058: '紹介コードを入力してください',
    MsgErrCheck059: '紹介コードは半角数字4桁で入力してください',
    MsgErrCheck060: '口座開設する店舗を選択してください',
    MsgErrCheck061: '決済口座のキャッシュカード暗証番号を入力してください',  

    MsgErrCheck062: '決済口座のキャッシュカード暗証番号を半角４文字で入力してください',   
    MsgErrCheck063: '決済口座のキャッシュカード暗証番号（確認）を入力してください',   
    MsgErrCheck064: '決済口座のキャッシュカード暗証番号（確認）を半角4文字で入力してください', 
    MsgErrCheck065: '暗証番号と確認用暗証番号が一致しません', 
    MsgErrCheck066: '1日あたりの振込限度額を入力してください', 
    MsgErrCheck067: '1日あたりの振込限度額は0～1000000の範囲で入力してください', 

    MsgErrCheck068: 'デビットカード暗証番号を入力してください', 
    MsgErrCheck069: 'デビットカード暗証番号を半角4文字で入力してください',
    MsgErrCheck070: 'デビットカード暗証番号（確認）を入力してください',
    MsgErrCheck071: 'デビットカード暗証番号（確認）を半角4文字で入力してください',
    MsgErrCheck072: '暗証番号と確認用暗証番号が一致しません',	
    MsgErrCheck073: '暗証番号には、推測されにくい番号を指定してください。',
    MsgErrCheck074: '当行で口座開設する理由を選択してください',
    MsgErrCheck075: '当行で口座開設する理由を入力してください',
    MsgErrCheck076: '当行で口座開設する理由は全角50文字までで入力してください',
    MsgErrCheck077: 'お名前（漢字）の姓と名の間にスペースを入れ合計で10文字までに収めて入力してください',
    MsgErrCheck078: 'お名前（フリガナ）のメイは20文字まで入力してください',
    MsgErrCheck079: 'お名前（フリガナ）でセイとメイの間にスペースを入れ、合計で20文字までに収めて入力してください',
    MsgErrCheck080: 'お名前（フリガナ）でセイとメイの間にスペースを入れ、半角カナに変換した際、20文字以内に収まるように入力してください',
    MsgErrCheck081: 'お名前（英文表記）を入力してください',
    MsgErrCheck082: 'お名前（英文表記）は英字18文字まで入力してください',
    MsgErrCheck083: 'お名前（英文）は名と姓の間にスペースを入れてください',
    MsgErrCheck084: 'マンション・部屋番号は全角80文字まで入力してください',
    MsgErrCheck085: '中学生はデビットカードをお申込みいただけません。',
    MsgErrCheck086: '自宅住所（漢字）は合わせて全角80文字までで入力してください',
    MsgErrCheck087: '自宅住所（漢字）は合わせて全角80文字まで入力してください',
    MsgErrCheck088: '4月1日時点で年齢が15歳未満の方はお申し込みいただけません',
    MsgErrCheck089: '決済口座の店舗を選択してください',
    MsgErrCheck090: '決済口座の口座番号を入力してください',
    MsgErrCheck091: '決済口座の口座番号を半角7文字までに入力してください',
    MsgErrCheck092: 'ご入力の暗証番号は登録できません。他人に類推されやすい番号は避けてご入力ください',

    

    
    

    
}
// MSGQuestionxxxxx    問い合わせようなダイアログ ※いいえ/はい　がある場合
// MSGErrorCheckxxxxx   入力チェックなどに対するダイアログ
// MSGInfoxxxxx         単純な表示用ダイアログ　※API返信内容が対象範囲外
// MSGWarnningxxxxx     操作不正などの提示内容

// 使用方法
// import { popMessageFromApi } from '@/utils/message'
// 将api返回体传入 调用
// 有回调 popMessageFromApi(response, callback)
// 无回调 popMessageFromApi(response)

import { Message,MessageBox  } from 'element-ui'
import LogUtil from '@/utils/log-util'
import { startLoading, endLoading } from '@/utils/loading'

export function popMessageFromApi(response, callback) {
    try {
        LogUtil.info('utils/message  popMessageFromApi start')
        if (Object.keys(response.message).length === 0) {
            return
        }
        if (response.message.message_id === null || response.message.message_id === '' || response.message.description === null || response.message.description === '') {
            return
        }

        callback = callback || null
        endLoading()
        Message({
            type: response.message.open_message_type,
            message: response.message.description,
            onClose: () => {
                if (callback !== null) {
                    callback()
                }
            }
        })
    } catch (err) {
        LogUtil.error('utils/message  popMessageFromApi', err)
    }
    LogUtil.info('utils/message  popMessageFromApi end')
}

// 使用方法
// import { showMessage } from '@/utils/message'
// 调用message将message类型传入messageType,
// message内容传入messageText即可调用

export function showMessage(messageType, messageText) {
    try {
        LogUtil.info('utils/message  showMessage start')
        if (messageType === '' || messageType === null || messageText === '' || messageText === null) {
            return
        }
        Message({
            type: messageType,
            message: messageText,
            duration: 3000
        })
    } catch (err) {
        LogUtil.error('utils/message  showMessage', err)
    }
    LogUtil.info('utils/message  showMessage end')
}

export function ErrMessage(response,callback) {
    try {
        if (Object.keys(response.message).length === 0) {
            return
        }
        if (response.message.message_id === null || response.message.message_id === '' || response.message.description === null || response.message.description === '') {
            return
        }

        callback = callback || null
        endLoading()
        MessageBox.alert('<strong>'+response.message.description+'</strong>','', {
            confirmButtonText: '確定',
            dangerouslyUseHTMLString: true,
            customClass: 'msgbox',   // 自定义一个class名
            callback: action => {
                
                if (callback !== null) {
                    callback()
                }
            }
          });
    } catch (err) {
        LogUtil.error('utils/message  showMessage', err)
    }
    LogUtil.info('utils/message  showMessage end')
}