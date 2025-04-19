// meta
const metaData = {
  default:{
    title:"START",
    description:"株式会社STARTは、仕事に最高のスタートを提供する企業です。人材紹介サービス、Web制作スクール運営、Webメディア管理を通じて、新たなキャリア形成をサポートします。"
  },
  message:{
    title:"メッセージ - START",
    description:"株式会社STARTは、仕事をきっかけに人生の新しいスタートを応援します。人材紹介SNS「ゴールート」とWebデザインを学べるスクール「Webの学校」を通じて、理想のキャリア形成をサポートします。" 
  },
  company:{
    title:"会社概要 - START",
    description:"株式会社STARTは、革新的な人材サービスや学びの機会を提供する企業です。私たちの使命は、仕事を通じて新しい可能性を広げ、幸せにつながるキャリア形成を共に目指すことです。" 
  },
}
// nav
const navData = [
  {title:"ホーム",link:"index.html"},
  {title:"メッセージ",link:"message.html"},
  {title:"会社概要",link:"company.html"},
];

// topic
const topicData = [
{time:"2030.02.10", datetime:"2030-02-10", article:"コーポレートサイトをリニューアルしました。"},
{time:"2030.02.08", datetime:"2030-02-08", article:"採用を強化中です！一緒に働きませんか？"},
{time:"2030.02.02", datetime:"2030-02-02", article:"人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！"},
];


// table
// src/data/data.js
const tableData = [
  {
    head: "社名",
    data: "株式会社START"
  },
  {
    head: "設立",
    data: "2025.02.10"
  },
  {
    head: "代表取締役",
    data: "ショーン・デイビット・ジュニア"
  },
  {
    head: "資本金",
    data: "10,000,000円"
  },
  {
    head: "所在地",
    data: "〒555-5555 東京都千代田区 スタートビルディング 606"
  }
];
  



// card
const cardData = [
 {
  pcIcon:"desktop-pc.png" ,
  spIcon:"desktop-sp.png",
  alt:"人材紹介サービスの象徴としての赤いブリーフケースのアイコン",
  caption:"人材紹介業",
  text:"新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。"
},
 {
  pcIcon:"location-pc.png" ,
  spIcon:"location-sp.png",
  alt:"オンライン学習を象徴する赤いビルのアイコン",
  caption:"スクール事業",
  text:"オンラインでWeb制作を学べるスクールを運営しています。"
},
 {
  pcIcon:"work-pc.png" ,
  spIcon:"work-sp.png",
  alt:"ウェブメディアの運営を表す赤いコンピュータモニターのアイコン",
  caption:"Webメディア運営",
  text:"人事系メディアやWebデザイン関連のメディアなどを複数運営しています。"
},
]

module.exports = { metaData, navData, topicData, tableData, cardData };