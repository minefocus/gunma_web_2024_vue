const constants = {
  // 都道府県
  prefecturesCodeList: [
    {
      label: "北海道・東北",
      options: [
        { value: "1", label: "北海道" },
        { value: "2", label: "青森県" },
        { value: "3", label: "岩手県" },
        { value: "4", label: "宮城県" },
        { value: "5", label: "秋田県" },
        { value: "6", label: "山形県" },
        { value: "7", label: "福島県" }
      ]
    },
    {
      label: "関東",
      options: [
        { value: "8", label: "茨城県" },
        { value: "9", label: "栃木県" },
        { value: "10", label: "群馬県" },
        { value: "11", label: "埼玉県" },
        { value: "12", label: "千葉県" },
        { value: "13", label: "東京都" },
        { value: "14", label: "神奈川県" }
      ]
    },
    {
      label: "甲信・北陸",
      options: [
        { value: "15", label: "新潟県" },
        { value: "16", label: "富山県" },
        { value: "17", label: "石川県" },
        { value: "18", label: "福井県" },
        { value: "19", label: "山梨県" },
        { value: "20", label: "長野県" }
      ]
    },
    {
      label: "東海",
      options: [
        { value: "21", label: "岐阜県" },
        { value: "22", label: "静岡県" },
        { value: "23", label: "愛知県" },
        { value: "24", label: "三重県" }
      ]
    },
    {
      label: "近畿",
      options: [
        { value: "25", label: "滋賀県" },
        { value: "26", label: "京都府" },
        { value: "27", label: "大阪府" },
        { value: "28", label: "兵庫県" },
        { value: "29", label: "奈良県" },
        { value: "30", label: "和歌山県" }
      ]
    },
    {
      label: "中国",
      options: [
        { value: "31", label: "鳥取県" },
        { value: "32", label: "島根県" },
        { value: "33", label: "岡山県" },
        { value: "34", label: "広島県" },
        { value: "35", label: "山口県" }
      ]
    },
    {
      label: "四国",
      options: [
        { value: "36", label: "徳島県" },
        { value: "37", label: "香川県" },
        { value: "38", label: "愛媛県" },
        { value: "39", label: "高知県" }
      ]
    },
    {
      label: "九州・沖縄",
      options: [
        { value: "40", label: "福岡県" },
        { value: "41", label: "佐賀県" },
        { value: "42", label: "長崎県" },
        { value: "43", label: "熊本県" },
        { value: "44", label: "大分県" },
        { value: "45", label: "宮崎県" },
        { value: "46", label: "鹿児島県" },
        { value: "47", label: "沖縄県" }
      ]
    }
  ]
};

const country = [
  { store_number: "100", store_nm: "日本"},
  { store_number: "201", store_nm: "韓国"},
  { store_number: "202", store_nm: "台湾"},
  { store_number: "203", store_nm: "香港"},
  { store_number: "204", store_nm: "ベトナム"},
  { store_number: "205", store_nm: "タイ"},
  { store_number: "206", store_nm: "シンガポール"},
  { store_number: "207", store_nm: "マレーシア"},
  { store_number: "208", store_nm: "フィリピン"},
  { store_number: "209", store_nm: "インドネシア"},
  { store_number: "210", store_nm: "カンボジア王国"},
  { store_number: "211", store_nm: "ラオス"},
  { store_number: "212", store_nm: "ミャンマー"},
  { store_number: "213", store_nm: "インド"},
  { store_number: "214", store_nm: "パキスタン"},
  { store_number: "215", store_nm: "スリランカ"},
  { store_number: "216", store_nm: "モルジブ"},
  { store_number: "217", store_nm: "バングラディシュ"},
  { store_number: "218", store_nm: "東ティモール"},
  { store_number: "219", store_nm: "マカオ"},
  { store_number: "220", store_nm: "アフガニスタン"},
  { store_number: "221", store_nm: "ネパール"},
  { store_number: "222", store_nm: "ブータン"},
  { store_number: "223", store_nm: "中国"},
  { store_number: "224", store_nm: "北朝鮮"},
  { store_number: "225", store_nm: "モンゴル"},
  { store_number: "226", store_nm: "ブルネイ"},
  { store_number: "299", store_nm: "その他のアジア諸国"},
  { store_number: "301", store_nm: "バーレーン"},
  { store_number: "302", store_nm: "イラン"},
  { store_number: "303", store_nm: "イラク"},
  { store_number: "304", store_nm: "イエメン民主人民共和国"},
  { store_number: "305", store_nm: "サウジアラビア"},
  { store_number: "306", store_nm: "クウェート"},
  { store_number: "307", store_nm: "カタール"},
  { store_number: "308", store_nm: "オマーン"},
  { store_number: "309", store_nm: "イエメン"},
  { store_number: "310", store_nm: "イスラエル"},
  { store_number: "311", store_nm: "ヨルダン"},
  { store_number: "312", store_nm: "シリア"},
  { store_number: "313", store_nm: "レバノン"},
  { store_number: "314", store_nm: "アラブ首長国連邦"},
  { store_number: "315", store_nm: "リビア"},
  { store_number: "316", store_nm: "エジプト"},
  { store_number: "317", store_nm: "スーダン"},
  { store_number: "318", store_nm: "ソマリア"},
  { store_number: "319", store_nm: "ドバイ"},
  { store_number: "399", store_nm: "その他の中近東諸国"},
  { store_number: "401", store_nm: "モロッコ"},
  { store_number: "402", store_nm: "アルジェリア"},
  { store_number: "403", store_nm: "チュニジア"},
  { store_number: "404", store_nm: "モーリタニア"},
  { store_number: "405", store_nm: "セネガル"},
  { store_number: "406", store_nm: "ガンビア"},
  { store_number: "407", store_nm: "ギニアビサオ"},
  { store_number: "408", store_nm: "シエラレオネ"},
  { store_number: "409", store_nm: "リベリア"},
  { store_number: "410", store_nm: "コートジボアール"},
  { store_number: "411", store_nm: "ガーナ"},
  { store_number: "412", store_nm: "トーゴ"},
  { store_number: "413", store_nm: "マリ"},
  { store_number: "414", store_nm: "ボルタ"},
  { store_number: "415", store_nm: "カナリー諸島"},
  { store_number: "416", store_nm: "ナイジェリア"},
  { store_number: "417", store_nm: "ニジェール"},
  { store_number: "418", store_nm: "ルワンダ"},
  { store_number: "419", store_nm: "カメルーン"},
  { store_number: "420", store_nm: "チャド共和国"},
  { store_number: "421", store_nm: "中央アフリカ共和国"},
  { store_number: "422", store_nm: "赤道ギニア"},
  { store_number: "423", store_nm: "ガボン"},
  { store_number: "424", store_nm: "コンゴ民主共和国（旧ザイール）"},
  { store_number: "425", store_nm: "コンゴ共和国"},
  { store_number: "426", store_nm: "ブルンジ"},
  { store_number: "427", store_nm: "アンゴラ"},
  { store_number: "428", store_nm: "ケニア"},
  { store_number: "429", store_nm: "ウガンダ"},
  { store_number: "430", store_nm: "タンザニア"},
  { store_number: "431", store_nm: "モザンビーク"},
  { store_number: "432", store_nm: "マダガスカル"},
  { store_number: "433", store_nm: "モーリシャス"},
  { store_number: "434", store_nm: "南アフリカ共和国"},
  { store_number: "435", store_nm: "レソト"},
  { store_number: "436", store_nm: "マラウイ"},
  { store_number: "437", store_nm: "ザンビア"},
  { store_number: "438", store_nm: "スワジランド"},
  { store_number: "439", store_nm: "エチオピア"},
  { store_number: "440", store_nm: "ジンバブエ共和国"},
  { store_number: "441", store_nm: "ボツワナ"},
  { store_number: "442", store_nm: "エリトリア"},
  { store_number: "443", store_nm: "カーボベルデ"},
  { store_number: "444", store_nm: "ギニア"},
  { store_number: "445", store_nm: "コモロ"},
  { store_number: "447", store_nm: "サントメ・プリンシペ"},
  { store_number: "448", store_nm: "ジブチ"},
  { store_number: "449", store_nm: "セイシェル"},
  { store_number: "450", store_nm: "セントヘレナ"},
  { store_number: "451", store_nm: "ナミビア"},
  { store_number: "452", store_nm: "ブルキナファソ"},
  { store_number: "453", store_nm: "ベナン"},
  { store_number: "499", store_nm: "その他のアフリカ諸国"},
  { store_number: "501", store_nm: "オーストリア"},
  { store_number: "502", store_nm: "ベルギー"},
  { store_number: "503", store_nm: "デンマーク"},
  { store_number: "504", store_nm: "フィンランド"},
  { store_number: "505", store_nm: "ノルウェー"},
  { store_number: "506", store_nm: "フランス"},
  { store_number: "507", store_nm: "ドイツ"},
  { store_number: "508", store_nm: "イタリア"},
  { store_number: "509", store_nm: "ルクセンブルク"},
  { store_number: "510", store_nm: "オランダ"},
  { store_number: "511", store_nm: "スペイン"},
  { store_number: "512", store_nm: "スウェーデン"},
  { store_number: "513", store_nm: "スイス"},
  { store_number: "514", store_nm: "英国"},
  { store_number: "515", store_nm: "アンドラ"},
  { store_number: "516", store_nm: "キプロス"},
  { store_number: "517", store_nm: "ジブラルタル"},
  { store_number: "518", store_nm: "ギリシア"},
  { store_number: "519", store_nm: "トルコ"},
  { store_number: "520", store_nm: "アイスランド"},
  { store_number: "521", store_nm: "アイルランド"},
  { store_number: "522", store_nm: "リヒテンシュタイン"},
  { store_number: "523", store_nm: "マルタ"},
  { store_number: "524", store_nm: "モナコ"},
  { store_number: "525", store_nm: "ポルトガル"},
  { store_number: "526", store_nm: "バチカン"},
  { store_number: "527", store_nm: "旧ユーゴスラビア"},
  { store_number: "528", store_nm: "グリーンランド"},
  { store_number: "529", store_nm: "クロアチア"},
  { store_number: "530", store_nm: "サンマリノ"},
  { store_number: "531", store_nm: "スロベニア"},
  { store_number: "532", store_nm: "セルビア"},
  { store_number: "533", store_nm: "モンテネグロ"},
  { store_number: "534", store_nm: "フェロー諸島"},
  { store_number: "535", store_nm: "ボスニア・ヘルツェゴビナ"},
  { store_number: "536", store_nm: "英国ガーンジィ島"},
  { store_number: "537", store_nm: "英国ジャージィー島"},
  { store_number: "538", store_nm: "英国マン島"},
  { store_number: "599", store_nm: "その他の西欧諸国"},
  { store_number: "601", store_nm: "アルバニア"},
  { store_number: "602", store_nm: "ブルガリア"},
  { store_number: "603", store_nm: "チェコ"},
  { store_number: "605", store_nm: "ハンガリー"},
  { store_number: "606", store_nm: "ポーランド"},
  { store_number: "607", store_nm: "ルーマニア"},
  { store_number: "608", store_nm: "ロシア"},
  { store_number: "609", store_nm: "エストニア"},
  { store_number: "610", store_nm: "ラトビア"},
  { store_number: "611", store_nm: "リトアニア"},
  { store_number: "612", store_nm: "ウクライナ"},
  { store_number: "613", store_nm: "スロバキア"},
  { store_number: "614", store_nm: "ベラルーシ"},
  { store_number: "615", store_nm: "モルドバ"},
  { store_number: "616", store_nm: "アゼルバイジャン"},
  { store_number: "617", store_nm: "アルメニア"},
  { store_number: "618", store_nm: "ウズベキスタン"},
  { store_number: "619", store_nm: "カザフスタン"},
  { store_number: "620", store_nm: "キルギス"},
  { store_number: "621", store_nm: "グルジア"},
  { store_number: "622", store_nm: "タジキスタン"},
  { store_number: "623", store_nm: "トルクメニスタン"},
  { store_number: "699", store_nm: "その他の東欧諸国"},
  { store_number: "701", store_nm: "カナダ"},
  { store_number: "702", store_nm: "米国"},
  { store_number: "801", store_nm: "パナマ"},
  { store_number: "802", store_nm: "バミューダ諸島"},
  { store_number: "803", store_nm: "バハマ"},
  { store_number: "804", store_nm: "ジャマイカ"},
  { store_number: "805", store_nm: "バルバドス"},
  { store_number: "806", store_nm: "トリニダード・トバゴ"},
  { store_number: "807", store_nm: "キューバ"},
  { store_number: "808", store_nm: "ハイチ"},
  { store_number: "809", store_nm: "ドミニカ共和国"},
  { store_number: "810", store_nm: "プエルトリコ"},
  { store_number: "811", store_nm: "バージン諸島"},
  { store_number: "812", store_nm: "蘭領アンチル"},
  { store_number: "813", store_nm: "ケイマン諸島"},
  { store_number: "814", store_nm: "アルバ"},
  { store_number: "815", store_nm: "グレナダ"},
  { store_number: "816", store_nm: "セントビンセント"},
  { store_number: "817", store_nm: "セントルシア"},
  { store_number: "818", store_nm: "タークス及びカイコス諸島"},
  { store_number: "819", store_nm: "英領西インド諸島"},
  { store_number: "859", store_nm: "その他のカリブ海諸国"},
  { store_number: "861", store_nm: "アルゼンチン"},
  { store_number: "862", store_nm: "ボリビア"},
  { store_number: "863", store_nm: "ブラジル"},
  { store_number: "864", store_nm: "ホンジュラス"},
  { store_number: "865", store_nm: "ガイアナ"},
  { store_number: "866", store_nm: "チリ"},
  { store_number: "867", store_nm: "コロンビア"},
  { store_number: "868", store_nm: "コスタリカ"},
  { store_number: "869", store_nm: "エクアドル"},
  { store_number: "870", store_nm: "エルサルバドル"},
  { store_number: "871", store_nm: "仏領ギアナ"},
  { store_number: "872", store_nm: "グアテマラ"},
  { store_number: "873", store_nm: "メキシコ"},
  { store_number: "874", store_nm: "ニカラグア"},
  { store_number: "875", store_nm: "パラグアイ"},
  { store_number: "876", store_nm: "ペルー"},
  { store_number: "877", store_nm: "ウルグアイ"},
  { store_number: "878", store_nm: "ベネズエラ"},
  { store_number: "899", store_nm: "その他のラテンアメリカ諸国"},
  { store_number: "901", store_nm: "オーストラリア"},
  { store_number: "902", store_nm: "ニュージーランド"},
  { store_number: "903", store_nm: "パプアニューギニア"},
  { store_number: "904", store_nm: "西サモア"},
  { store_number: "905", store_nm: "フィジー"},
  { store_number: "906", store_nm: "ソロモン諸島"},
  { store_number: "907", store_nm: "トンガ"},
  { store_number: "908", store_nm: "ナウル"},
  { store_number: "909", store_nm: "ニューカレドニア"},
  { store_number: "910", store_nm: "米領オセアニア"},
  { store_number: "911", store_nm: "マーシャル"},
  { store_number: "912", store_nm: "グアム"},
  { store_number: "913", store_nm: "キリバス"},
  { store_number: "914", store_nm: "ツバル"},
  { store_number: "915", store_nm: "バヌアツ"},
  { store_number: "916", store_nm: "パラオ"},
  { store_number: "917", store_nm: "マリアナ諸島"},
  { store_number: "918", store_nm: "ミクロネシア"},
  { store_number: "919", store_nm: "ワリス・フテュナ諸島"},
  { store_number: "920", store_nm: "仏領ポリネシア"},
  { store_number: "999", store_nm: "その他の大洋州諸国"},
  { store_number: "660", store_nm: "アンギラ"},
  { store_number: "248", store_nm: "オーランド諸島"},
  { store_number: "016", store_nm: "米領サモア"},
  { store_number: "010", store_nm: "南極"},
  { store_number: "260", store_nm: "フランス領極南諸島"},
  { store_number: "028", store_nm: "アンティグア・バーブーダ"},
  { store_number: "535", store_nm: "オランダカリブ領域"},
  { store_number: "652", store_nm: "サンバルテルミー"},
  { store_number: "084", store_nm: "ベリーズ"},
  { store_number: "074", store_nm: "ブーベ島"},
  { store_number: "166", store_nm: "ココス諸島"},
  { store_number: "184", store_nm: "クック諸島"},
  { store_number: "531", store_nm: "キュラソー"},
  { store_number: "162", store_nm: "クリスマス島"},
  { store_number: "212", store_nm: "ドミニカ国"},
  { store_number: "732", store_nm: "西サハラ"},
  { store_number: "238", store_nm: "フォークランド（マルビナス）諸島"},
  { store_number: "831", store_nm: "ガーンジー島"},
  { store_number: "312", store_nm: "グアドループ島"},
  { store_number: "334", store_nm: "ハード島・マクドナルド諸島"},
  { store_number: "832", store_nm: "ジャージー島"},
  { store_number: "659", store_nm: "セントキッツ・ネービス"},
  { store_number: "663", store_nm: "サンマルタン"},
  { store_number: "807", store_nm: "北マケドニア共和国"},
  { store_number: "580", store_nm: "北マリアナ諸島"},
  { store_number: "500", store_nm: "モントセラト"},
  { store_number: "474", store_nm: "マルチニーク島"},
  { store_number: "175", store_nm: "マイヨット島"},
  { store_number: "574", store_nm: "ノーフォーク島"},
  { store_number: "570", store_nm: "ニウエ"},
  { store_number: "612", store_nm: "ピトケアン諸島"},
  { store_number: "275", store_nm: "パレスチナ"},
  { store_number: "638", store_nm: "レユニオン"},
  { store_number: "239", store_nm: "南ジョージア島・南サンドイッチ諸島"},
  { store_number: "744", store_nm: "スバールバル諸島・ヤンマイエン島"},
  { store_number: "666", store_nm: "サンピエール島・ミクロン島"},
  { store_number: "728", store_nm: "南スーダン共和国"},
  { store_number: "740", store_nm: "スリナム共和国"},
  { store_number: "534", store_nm: "シント・マールテン"},
  { store_number: "581", store_nm: "米領小離島"},
  { store_number: "850", store_nm: "米領バージン諸島"},
  
  
];

export  {
  constants,
  country
};
