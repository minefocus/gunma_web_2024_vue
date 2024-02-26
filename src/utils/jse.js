import JSEncrypt from 'jsencrypt'

// var str = this.encrypt(JSON.stringify('123123あいうれ'));
// var str2 = JSON.parse(this.decrypt(str));
export function encrypt(msg){
var encryptor = new JSEncrypt()  // 创建加密对象实例
  //之前ssl生成的公钥，复制的时候要小心不要有空格
  var pubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbJaI4ojhwwQlCSbp4xCRZJ5KvqsQ/BrUZ6tcMwSUt0NjBqDhyc68WjY4wM+7P4Z4SZ9tQNqgQxm1r5NyOpfm6rNj4WjuUq/BjJ5egfdF8JiKAO4CK9Bg0KFGpZ+Mqquw5VnK5N/hyaGrIrRRTrSb6RABqOkM0EF5rsBwzwbYH8wIDAQAB'
  encryptor.setPublicKey(pubKey)//设置公钥
  let result = ''
  
  let lt = msg.match(/.{1,40}/g);
  if(lt != null){
    lt.forEach((entry,index) => {
      var t = encryptor.encrypt(entry);
      if(index!=0){
        result= result+'@@@'+t
      }else{
        result += t ;
      }
     
    });
  
  }else{
    result = encryptor.encrypt(msg);
  }

  return result  // 对内容进行加密
}
export function decrypt (msg) {
  if(msg==='' || msg===null){
    return ''
  }else if(msg === true){
    return true
  }else if(msg === false){
    return false
  }
    var decrypt = new JSEncrypt()//创建解密对象实例
    //之前ssl生成的秘钥
    var priKey  = 'MIICXAIBAAKBgQCbJaI4ojhwwQlCSbp4xCRZJ5KvqsQ/BrUZ6tcMwSUt0NjBqDhyc68WjY4wM+7P4Z4SZ9tQNqgQxm1r5NyOpfm6rNj4WjuUq/BjJ5egfdF8JiKAO4CK9Bg0KFGpZ+Mqquw5VnK5N/hyaGrIrRRTrSb6RABqOkM0EF5rsBwzwbYH8wIDAQABAoGBAIyxMQ3YlgQyGZpiT9aKUEgFKfFhk3twMrThEMlBMdz9YkMjsKShoap7DfFKdwtPF1Crm+d+2SP1PW81aIl3nCEye+TZPORU4Nl12b1Fy91BxraoO0ulLJOUb37Qzm52ath/uQawPlNJQpakj90e2uiSj+fuYgXfQB4gczdF1AF5AkEAyPnn1cdRoRskOr+Rlh9Soj2PellFkO0aSvCI5Ih0NtP6cglJUGFu7+xM5uSZJ03tr4edEF1g2WplupMWWB+g7wJBAMWfoomOLGcrCpyW++pMDnuYBgir2kU1aPR8Dne1xtk6xDdNrplxYGK2JUhsCQLlGYfYMHJEvpAxK9DAk0qwQT0CQBDkD/wDmHS110GowA+h6kwAaIKb5iDcDI2n0ZmDbmD9R9s1tJew2KYJch0lsUmAXy2VdDnf3zfmnU4k9ofJgLkCQC4ALZ5lSLKvEyZGAteT4p8kUOs9zW3ks8yM//Ufi+zOwBO7clPnTy9LBLyp4SMaXun/Ca/fjpgTygYqfV6aTmUCQFWhWzWFE4xdJtXn+uFy1nUxc0sflDjHywlQ8rnmaJ3YIP1VSODZgPaEOFTlDlcri0QzSEE8D44fztis3ZP1rg0='
    decrypt.setPrivateKey(priKey)//设置秘钥
    let lt = msg.split('@@@')
    let unresult =''
    lt.forEach((res)=>{
      unresult +=decrypt.decrypt(res)
    })
    return unresult
}