// 20261110 HARD 數學進階挑戰題庫
window.math1Questions = [
  // ====== 選擇題 ======
  {
    id: "m1_mc_1",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "玩具特賣會時，玩具原價和特惠價的關係如下表（原價100對應75、200對應150、260對應195、440對應330），下列敘述哪一個是正確的？",
    options: [
      "玩具原價和特惠價的比值是 0.75",
      "玩具特惠價和原價的比值是 4/3",
      "原價是 2000 元的玩具，特惠價是 1800 元",
      "特惠價是 375 元的玩具，原價是 500 元"
    ],
    answer: 3,
    explanation: "特惠價÷原價＝3/4；特惠價為375元時，原價＝375 ÷ (3/4) ＝ 500元。"
  },
  {
    id: "m1_mc_2",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲數可以整除乙數，則甲數和乙數的最大公因數是哪一個？",
    options: ["甲數", "乙數", "1", "無法確定"],
    answer: 0,
    explanation: "甲數可以整除乙數，表示甲數是乙數的因數，因此兩數的最大公因數就是甲數。"
  },
  {
    id: "m1_mc_3",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "翰林國小六年級舉辦戶外教育，男生有 120 人參加，女生有 108 人參加，學校想要將男、女生混合分組，每組男生人數一樣多，每組女生人數也一樣多，且剛好分完，每一組最少有幾人？",
    options: ["12 人", "19 人", "25 人", "38 人"],
    answer: 1,
    explanation: "最多可分成 (120, 108) = 12 組。每組男生 120÷12=10 人，女生 108÷12=9 人，每組最少有 10+9=19 人。"
  },
  {
    id: "m1_mc_4",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個比和 44：36 是相等的比值？",
    options: ["4/3：1/3", "1.21：0.99", "24：16", "6：3.5"],
    answer: 1,
    explanation: "44÷36 ＝ 11/9；而 1.21÷0.99 ＝ 121/99 ＝ 11/9，比值相等。"
  },

  // ====== 是非判斷與單選化試題 ======
  {
    id: "m1_tf_1",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "在分數運算中，(3/4) × (2/5) 的計算結果會小於 (3/4) ÷ (2/5)。",
    answer: "O",
    explanation: "正確。正分數乘以小於 1 的數積會變小；除以小於 1 的數商會變大，故乘積小於商。"
  },
  {
    id: "m1_mc_5",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "五條想將一張長 78 公分、寬 108 公分的長方形壁報紙，剪成大小相同且邊長為整數公分的最大正方形，且沒有剩餘，此正方形的邊長最大是幾公分？",
    options: ["3 公分", "6 公分", "12 公分", "18 公分"],
    answer: 1,
    explanation: "(78, 108) 的最大公因數為 6 公分。"
  },
  {
    id: "m1_mc_6",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "若三位數「6□5」是 3 的倍數，則 □ 裡面的數字可能為下列哪一組？",
    options: ["0, 3, 6", "1, 4, 7", "2, 5, 8", "3, 6, 9"],
    answer: 1,
    explanation: "各數字和需為 3 的倍數：6 + □ + 5 = 11 + □。因此 □ 可以是 1、4 或 7。"
  },
  {
    id: "m1_mc_7",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "將 1.2：(2/3) 化為最簡整數比，結果應為下列何者？",
    options: ["6：5", "9：5", "5：9", "12：8"],
    answer: 1,
    explanation: "1.2 ÷ (2/3) ＝ (6/5) × (3/2) ＝ 9/5，故最簡整數比為 9：5。"
  },
  {
    id: "m1_mc_8",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "在比例式「4：7 ＝ ( )：5.6」中，括號裡的數應填入多少？",
    options: ["2.8", "3.2", "3.6", "4.2"],
    answer: 1,
    explanation: "5.6 ÷ 7 = 0.8；4 × 0.8 = 3.2。"
  },
  {
    id: "m1_mc_9",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "將 121 做質因數分解，其結果為何？",
    options: ["1 × 121", "11 × 11", "3 × 37", "7 × 17"],
    answer: 1,
    explanation: "121 為 11 的平方數，質因數分解為 11 × 11。"
  },
  {
    id: "m1_mc_10",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "一包麵粉重 3.9 公斤，烘焙師傅做了 2.4 盒餅乾後，還剩下 0.06 公斤麵粉，平均一盒餅乾用掉多少公斤麵粉？",
    options: ["1.4 公斤", "1.5 公斤", "1.6 公斤", "1.8 公斤"],
    answer: 2,
    explanation: "(3.9 - 0.06) ÷ 2.4 = 3.84 ÷ 2.4 = 1.6 公斤。"
  },
  {
    id: "m1_mc_11",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "阿澤將 30 公尺長的緞帶，每 4.8 公尺剪成一段，每段可做成 4 朵緞帶花，用完全部緞帶共可做出幾朵花？",
    options: ["20 朵", "24 朵", "25 朵", "28 朵"],
    answer: 2,
    explanation: "30 ÷ 4.8 = 6.25；6.25 × 4 = 25 朵。"
  },
  {
    id: "m1_mc_12",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "某數除以 6.91，誤將除號看成加號，算出的結果為 62.19。請問原本算式的正確答案是多少？",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "某數 = 62.19 - 6.91 = 55.28；正確答案 = 55.28 ÷ 6.91 = 8。"
  },
  {
    id: "m1_mc_13",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "平行四邊形面積為 11 平方公分，若底為 2 又 (1/2) 公分，則高為多少公分？",
    options: ["4 又 (1/5) 公分", "4 又 (2/5) 公分", "4 又 (1/2) 公分", "5 公分"],
    answer: 1,
    explanation: "11 ÷ (5/2) = 11 × (2/5) = 22/5 = 4 又 (2/5) 公分。"
  },
  {
    id: "m1_mc_14",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "長方形土地周長為 48 公尺，長與寬的比為 5：3，請問這塊土地的面積是多少平方公尺？",
    options: ["120 平方公尺", "135 平方公尺", "150 平方公尺", "270 平方公尺"],
    answer: 1,
    explanation: "長與寬的和 = 48 ÷ 2 = 24；長 = 24 × (5/8) = 15；寬 = 24 × (3/8) = 9；面積 = 15 × 9 = 135 平方公尺。"
  },
  {
    id: "m1_mc_15",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲正方體邊長 6 公分，乙正方體邊長 10 公分，甲正方體體積對乙正方體體積的最簡整數比為何？",
    options: ["3：5", "9：25", "27：125", "18：30"],
    answer: 2,
    explanation: "體積比為邊長的三次方比：6³：10³ ＝ 216：1000 ＝ 27：125。"
  },
  {
    id: "m1_mc_16",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "威力每 3 天到圖書館一次，夢夢每 4 天到圖書館一次。5 月 20 日星期四兩人同時去圖書館，下次兩人同時去的日期是幾月幾日星期幾？",
    options: ["6 月 1 日星期二", "6 月 1 日星期三", "6 月 2 日星期二", "5 月 31 日星期一"],
    answer: 0,
    explanation: "[3, 4] = 12 天。5 月有 31 天，20 + 12 = 32（即 6 月 1 日）；12 ÷ 7 = 1 餘 5 天，星期四往後推 5 天為星期二。"
  },
  {
    id: "m1_mc_17",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "A 公車每 12 分鐘發一班，B 公車每 16 分鐘發一班。兩車於上午 5 時 30 分同時發出第一班車，下一次同時發車是何時？",
    options: ["上午 6 時 06 分", "上午 6 時 18 分", "上午 6 時 30 分", "上午 6 時 48 分"],
    answer: 1,
    explanation: "[12, 16] = 48 分鐘。5 時 30 分 + 48 分鐘 = 6 時 18 分。"
  },
  {
    id: "m1_mc_18",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列各組數中，哪一組是彼此「互質」的？",
    options: ["44 和 45", "78 和 130", "51 和 119", "35 和 77"],
    answer: 0,
    explanation: "44 = 2² × 11，45 = 3² × 5，兩數無大於 1 的公因數，故彼此互質。"
  }
];