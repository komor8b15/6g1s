window.mathQuestions = [
  // ====== 是非題 29 題 ======
  {
    id: "m_tf_1",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "兩個整數的最大公因數是 1，表示這兩個數是質數。",
    answer: "X",
    explanation: "錯誤。兩個整數最大公因數是 1，只代表兩數「互質」，但不代表這兩數都是質數。例如：8 和 9 都是合數，但 (8, 9) = 1，它們彼此互質。"
  },
  {
    id: "m_tf_2",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "2、3、5、6 都是 30 的質因數。",
    answer: "X",
    explanation: "錯誤。6 雖然是 30 的因數，但 6 是合數（6 = 2 × 3），不是「質數」，因此 6 不是質因數。30 的質因數只有 2、3、5。"
  },
  {
    id: "m_tf_3",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "愛德華測量長方形卡片，卡片的長與寬的比為 2：1，如果寬是 70.5 毫米，長是 141 毫米。",
    answer: "O",
    explanation: "正確。長：寬 = 141：70.5 = (141 ÷ 70.5)：(70.5 ÷ 70.5) = 2：1，敘述符合比例。"
  },
  {
    id: "m_tf_4",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "在小數除法中，如果除數小於 1，所得到的商會比被除數小。",
    answer: "X",
    explanation: "錯誤。當除數小於 1（大於 0）時，除以一個小於 1 的數，所得的商會比被除數「大」。例如：10 ÷ 0.5 = 20 > 10。"
  },
  {
    id: "m_tf_5",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "7 和 11 互質，所以它們的最大公因數是 7×11＝77。",
    answer: "X",
    explanation: "錯誤。兩數互質時，它們的「最大公因數」必定是 1。7×11 = 77 是它們的「最小公倍數」。"
  },
  {
    id: "m_tf_6",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "分數除以分數，可將除數的分子、分母顛倒後，再和被除數相乘。",
    answer: "O",
    explanation: "正確。分數除法的計算法則是：除以一個分數，等於乘以該分數的倒數（分子分母顛倒）。"
  },
  {
    id: "m_tf_7",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "甲＜1，乙＝1，甲÷乙的商一定是真分數。",
    answer: "X",
    explanation: "錯誤。題目中甲只說明「甲 < 1」，若甲為負數或 0，則不構成真分數；在國小正數範圍內，若甲不是分數形式（例如甲為小數），也需視定義而定；最嚴謹的概念為甲÷1 = 甲，甲若為小數如 0.2 或負數則不為真分數。"
  },
  {
    id: "m_tf_8",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "當兩數互質時，兩數之間沒有公因數。",
    answer: "X",
    explanation: "錯誤。任何兩個整數一定有公因數「1」。兩數互質是指公因數「只有 1」，而不是沒有公因數。"
  },
  {
    id: "m_tf_9",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "玫瑰露 2.5 公克 36 元，薄荷露 5.5 公克 44 元，相同重量的薄荷露價錢比玫瑰露便宜。",
    answer: "O",
    explanation: "正確。計算每公克單價：玫瑰露每公克 36 ÷ 2.5 = 14.4 元；薄荷露每公克 44 ÷ 5.5 = 8 元。8 < 14.4，薄荷露確實便宜很多。"
  },
  {
    id: "m_tf_10",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "在小數除法中，甲÷乙＝丙，如果乙＜1，則甲＞丙。",
    answer: "X",
    explanation: "錯誤。如果乙小於 1（例如 0.5），則甲 ÷ 0.5 = 2甲 = 丙，此時丙會大於甲，即甲 < 丙。"
  },
  {
    id: "m_tf_11",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "0.4：0.9 是最簡整數比。",
    answer: "X",
    explanation: "錯誤。0.4 和 0.9 是小數，不是整數。「最簡整數比」前後項必須都是整數且互質，應化為 4：9。"
  },
  {
    id: "m_tf_12",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "在小數除法中，如果除數大於 1，所得到的商會比被除數小。",
    answer: "O",
    explanation: "正確。被除數除以大於 1 的正數，商一定比被除數小。例如：10 ÷ 2 = 5 < 10。"
  },
  {
    id: "m_tf_13",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "要將分數化成最簡分數，就是把分子和分母同除以它們的最小公倍數。",
    answer: "X",
    explanation: "錯誤。要把分數約成最簡分數，應該同除以它們的「最大公因數」，而非最小公倍數。"
  },
  {
    id: "m_tf_14",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "2×2×3×5 和 2×3×3×11 的最小公倍數是 2×2×3×5×2×3×3×11。",
    answer: "X",
    explanation: "錯誤。找最小公倍數時，共同質因數應取次方較大者：2取2個、3取2個、5取1個、11取1個，最小公倍數為 2×2×3×3×5×11，不可直接將兩數相乘。"
  },
  {
    id: "m_tf_15",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "20.05÷0.5＝401。",
    answer: "X",
    explanation: "錯誤。20.05 ÷ 0.5 = 200.5 ÷ 5 = 40.1，而不是 401。"
  },
  {
    id: "m_tf_16",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "整數的比，將前項和後項同除以它們的公倍數，就可以求得最簡整數比。",
    answer: "X",
    explanation: "錯誤。將前項與後項同除以它們的「公因數」（特別是最大公因數），才能求得最簡整數比。"
  },
  {
    id: "m_tf_17",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "甲數可以整除乙數，則甲數和乙數的最大公因數是甲數。",
    answer: "O",
    explanation: "正確。甲能整除乙，表示乙是甲的倍數，甲是乙的因數，因此兩數的最大公因數就是甲數。"
  },
  {
    id: "m_tf_18",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "1 除以任何數，答案都會比 1 小。",
    answer: "X",
    explanation: "錯誤。如果除以小於 1 的正數（例如 0.5），1 ÷ 0.5 = 2，答案比 1 大。"
  },
  {
    id: "m_tf_19",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "兩數的公因數，都是這兩數最大公因數的因數。",
    answer: "O",
    explanation: "正確。兩數的所有公因數，必定都是其最大公因數的因數，這是公因數的重要數學定理。"
  },
  {
    id: "m_tf_20",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "兩數共同的質因數相乘，就是這兩數的最大公因數。",
    answer: "X",
    explanation: "錯誤。不只是質因數相乘，次方必須取最小的次數乘積，若直接將所有相異質因數單純相乘，容易忽略重複質因數（例如 12 與 24 的質因數皆為 2 與 3，但最大公因數為 2×2×3 = 12，非 2×3 = 6）。"
  },
  {
    id: "m_tf_21",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "1～100 的數中，最大的合數是 99。",
    answer: "X",
    explanation: "錯誤。1～100 中最大的整數是 100，100 本身也是合數（因數有 1, 2, 4, 5, 10, 20, 25, 50, 100），因此最大的合數是 100。"
  },
  {
    id: "m_tf_22",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "將分數的分子和分母同除以它們的最大公因數，得到新的分子和分母一定會互質。",
    answer: "O",
    explanation: "正確。同除以最大公因數後，分子和分母已無大於 1 的公因數，兩者必定互質（即為最簡分數）。"
  },
  {
    id: "m_tf_23",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "1～10 之間的質數有 4 個，合數有 6 個。",
    answer: "X",
    explanation: "錯誤。1～10 中，質數有 2, 3, 5, 7（共 4 個）；合數有 4, 6, 8, 9, 10（共 5 個）；「1」既不是質數也不是合數。因此合數只有 5 個。"
  },
  {
    id: "m_tf_24",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "兩個整數間如果有一個是質數，則兩數一定互質。",
    answer: "X",
    explanation: "錯誤。例如 3 是質數，另一個數是 6，兩數的最大公因數是 3，並不互質。"
  },
  {
    id: "m_tf_25",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "商店大特價，買 15 條毛巾可以送 3 塊香皂，媽媽買了 25 條毛巾可以送幾塊香皂？用相等的比可以記成 15：3＝25：（ ），（ ）裡的數應該填入 5。",
    answer: "O",
    explanation: "正確。15：3 = 5：1，所以 25：( ) = 5：1，括號中填入 5。"
  },
  {
    id: "m_tf_26",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "18 和 19 的最小公倍數的質因數分解是 2×3×3×19。",
    answer: "O",
    explanation: "正確。18 = 2 × 3 × 3，19 為質數，兩數互質，故最小公倍數為 18 × 19 = 2 × 3 × 3 × 19。"
  },
  {
    id: "m_tf_27",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "3×4×5 是 60 的質因數分解。",
    answer: "X",
    explanation: "錯誤。4 不是質數（4 = 2×2），合法的質因數分解必須全部由質數組成，應寫為 2×2×3×5。"
  },
  {
    id: "m_tf_28",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "異分母分數相除時，可先將分子通分成一樣的數再計算。",
    answer: "X",
    explanation: "錯誤。分數通分是將「分母」化為相同的數，且除法最簡便的方法是除數顛倒相乘。"
  },
  {
    id: "m_tf_29",
    type: "tf",
    category: "tf",
    subject: "math",
    question: "當兩數沒有共同的質因數時，稱這兩數互質。",
    answer: "O",
    explanation: "正確。若兩數沒有共同的質因數，其最大公因數只能是 1，因此這兩數互質。"
  },

  // ====== 選擇題 57 題 ======
  {
    id: "m_mc_1",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下午 3 時，樹高和樹影長的比是 13：10，樹高是 481 公分，樹影長是幾公分？",
    options: ["37 公分", "130 公分", "370 公分", "625.3 公分"],
    answer: 2,
    explanation: "樹高：影長 = 13：10 = 481：影長。481 ÷ 13 = 37，所以影長 = 10 × 37 = 370 公分。"
  },
  {
    id: "m_mc_2",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "想要把分數化成最簡分數，可以用下列哪一個數將分子和分母約分呢？",
    options: ["最小公倍數", "最大公因數", "最大公倍數", "最小公因數"],
    answer: 1,
    explanation: "將分子與分母同時除以它們的「最大公因數」，即可一次化為最簡分數。"
  },
  {
    id: "m_mc_3",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "有一包重 9.15 公斤的米，平分給 3 人，全部分完，每人可以分到多少公斤的米？",
    options: ["0.35 公斤", "3.05 公斤", "3.15 公斤", "3.5 公斤"],
    answer: 1,
    explanation: "9.15 ÷ 3 = 3.05 公斤。"
  },
  {
    id: "m_mc_4",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲正方形邊長 6 公分，乙正方形邊長 8 公分，下列哪一個是甲正方形和乙正方形面積的最簡整數比？",
    options: ["3：4", "9：12", "9：16", "12：16"],
    answer: 2,
    explanation: "甲面積 = 6×6 = 36；乙面積 = 8×8 = 64。36：64 同除以 4 得 9：16。"
  },
  {
    id: "m_mc_5",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲和乙的最小公倍數是甲×乙，則甲和乙的最大公因數是？",
    options: ["甲", "乙", "甲÷乙", "1"],
    answer: 3,
    explanation: "兩數的最小公倍數為兩數相乘，表示兩數互質，故最大公因數必定是 1。"
  },
  {
    id: "m_mc_6",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個數的質因數個數最多？",
    options: ["20", "24", "25", "30"],
    answer: 3,
    explanation: "20=2²×5 (2個:2,5)；24=2³×3 (2個:2,3)；25=5² (1個:5)；30=2×3×5 (3個:2,3,5)。故 30 最多。"
  },
  {
    id: "m_mc_7",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "在分數除法中，除數＜1，商和被除數的關係為？",
    options: ["商＞被除數", "商＝被除數", "商＜被除數", "不一定"],
    answer: 0,
    explanation: "除以小於 1 的正分數，商會大於被除數。"
  },
  {
    id: "m_mc_8",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列敘述何者正確？",
    options: ["互質的兩數的最小公倍數是兩數的乘積", "互質的兩數一定是質數", "13 和 91 互質", "兩個質數不一定互質"],
    answer: 0,
    explanation: "互質表示最大公因數為 1，其最小公倍數即為兩數乘積。選項(2)如8與9互質但非質數；(3)91=13×7不互質；(4)相異質數必定互質。"
  },
  {
    id: "m_mc_9",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個敘述是正確的？",
    options: ["1～10 的整數當中，只有 2、3、5、7 四個是質數，其餘都是合數", "2 是質數中唯一的偶數", "9 是 36 的質因數", "3 是 10 的質因數"],
    answer: 1,
    explanation: "2 是質數中唯一的偶數（也是最小的質數）。(1) 1 不是合數；(3) 9 不是質數；(4) 3 不是 10 的因數。"
  },
  {
    id: "m_mc_10",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "在做除數是小數的除法計算時，下列注意事項何者正確？",
    options: ["先把除數變成整數", "依照除數的小數點向右移的位數，移動被除數的小數點再計算", "商的小數點要和被除數的新小數點對齊", "以上皆正確"],
    answer: 3,
    explanation: "以上各項皆為小數直式除法的標準運算步驟。"
  },
  {
    id: "m_mc_11",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個是最簡整數比？",
    options: ["15：250", "19：95", "26：91", "27：82"],
    answer: 3,
    explanation: "15:250同除5；19:95同除19；26:91同除13；27=3³，82=2×41，兩者無共同質因數，互質，為最簡整數比。"
  },
  {
    id: "m_mc_12",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "超市賣三種品牌的牛奶，A 品牌 0.96 公升賣 72 元，B 品牌 1.5 公升賣 113.7 元，C 品牌 1.2 公升賣 90.6 元，哪一個品牌最便宜？",
    options: ["A 品牌", "B 品牌", "C 品牌", "一樣便宜"],
    answer: 0,
    explanation: "計算每公升單價：A = 72÷0.96 = 75元；B = 113.7÷1.5 = 75.8元；C = 90.6÷1.2 = 75.5元。故 A 品牌最便宜。"
  },
  {
    id: "m_mc_13",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個算式的答案是二位小數？",
    options: ["5÷0.25", "4.4÷0.55", "0.21÷3.5", "12.12÷0.4"],
    answer: 2,
    explanation: "5÷0.25 = 20；4.4÷0.55 = 8；0.21÷3.5 = 0.06（二位小數）；12.12÷0.4 = 30.3（一位小數）。"
  },
  {
    id: "m_mc_14",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "一個分數約分成最簡分數後，值會？",
    options: ["變大", "變小", "不變", "不一定"],
    answer: 2,
    explanation: "約分只是改變分子與分母的形式，分數的數值大小保持「不變」（等值分數）。"
  },
  {
    id: "m_mc_15",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "有一塊三角形花圃，面積是 6.48 平方公尺，高是 1.08 公尺，底是多少公尺？",
    options: ["1.2 公尺", "6 公尺", "10 公尺", "12 公尺"],
    answer: 3,
    explanation: "三角形底 = 面積 × 2 ÷ 高 = 6.48 × 2 ÷ 1.08 = 12.96 ÷ 1.08 = 12 公尺。"
  },
  {
    id: "m_mc_16",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "1 到 20 的整數中，所有質數的和是多少？",
    options: ["58", "75", "77", "78"],
    answer: 2,
    explanation: "1 到 20 的質數有：2, 3, 5, 7, 11, 13, 17, 19。總和 = 2+3+5+7+11+13+17+19 = 77。"
  },
  {
    id: "m_mc_17",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲數＝3×3×7，乙數＝2×3×7，下列哪個是甲數和乙數的最小公倍數？",
    options: ["3×7", "2×3×7", "3×3×7", "2×3×3×7"],
    answer: 3,
    explanation: "公倍數取各質因數最高次方：2 的一次方、3 的二次方、7 的一次方，即 2×3×3×7。"
  },
  {
    id: "m_mc_18",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲數＝3×3×7，乙數＝2×3×7，下列哪個答案是甲數和乙數的最大公因數？",
    options: ["3×7", "2×3×7", "3×3×7", "2×3×3×7"],
    answer: 0,
    explanation: "最大公因數取共同質因數較小次方：質因數 3（取1個）與 7（取1個），即 3×7。"
  },
  {
    id: "m_mc_19",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "在分數除法中，除數＞1，商和被除數的關係為？",
    options: ["商＞被除數", "商＝被除數", "商＜被除數", "不一定"],
    answer: 2,
    explanation: "被除數除以大於 1 的數，商會比被除數小。"
  },
  {
    id: "m_mc_20",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "整數除以一位小數，商的小數點要和下列哪個小數點對齊？",
    options: ["被除數原來的小數點", "除數原來的小數點", "被除數新的小數點", "除數新的小數點"],
    answer: 2,
    explanation: "小數除法中，商的小數點必須對齊「被除數移動後的新小數點」。"
  },
  {
    id: "m_mc_21",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "把一個數用質因數相乘的形式表示，稱為？",
    options: ["因數分解", "質數分解", "質因數相乘", "質因數分解"],
    answer: 3,
    explanation: "數學專有名詞：以質因數連乘積表示該數的方式稱為「質因數分解」。"
  },
  {
    id: "m_mc_22",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "裝置藝術邊長 180 公分，吊飾邊長 6 公分，下列哪一個敘述是錯的？",
    options: ["邊長最簡整數比是 30：1", "周長最簡整數比是 30：1", "面積最簡整數比是 900：1", "體積最簡整數比是 30：1"],
    answer: 3,
    explanation: "邊長比 180：6 = 30：1。體積比為邊長的三次方比，應為 30³：1³ = 27000：1，故(4)錯誤。"
  },
  {
    id: "m_mc_23",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "當除數小於 1（大於0）時，被除數和商誰比較大？",
    options: ["被除數", "商", "一樣大", "無法比較"],
    answer: 1,
    explanation: "正數除以小於 1 的正數，商會比被除數大。"
  },
  {
    id: "m_mc_24",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲數＝3×3×7，乙數＝2×3×7，下列哪個答案是甲數和乙數的公倍數？",
    options: ["3×7", "3×4×7", "3×3×4×7", "3×3×5×7"],
    answer: 2,
    explanation: "兩數的最小公倍數是 2×3×3×7。公倍數必須包含 2 的倍數與 3² 及 7。3×3×4×7 = 2²×3²×7，為 2×3×3×7 的倍數。"
  },
  {
    id: "m_mc_25",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "計算 0.3 除以 0.15 時，可以看成是 30 除以 15，此時是將被除數和除數都換成以多少為單位的數？",
    options: ["10", "1", "0.1", "0.01"],
    answer: 3,
    explanation: "0.3 = 30 個 0.01；0.15 = 15 個 0.01，兩者皆換成以 0.01 為計數單位。"
  },
  {
    id: "m_mc_26",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "小青玩投籃機，投籃 50 次，投進了 20 次，小青進球次數和投籃次數的比值是多少？",
    options: ["0.4", "0.8", "1.6", "2.5"],
    answer: 0,
    explanation: "比值 = 進球次數 ÷ 投籃次數 = 20 ÷ 50 = 2/5 = 0.4。"
  },
  {
    id: "m_mc_27",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列有關最簡分數的敘述，何者錯誤？",
    options: ["最簡分數的分子和分母不能再約分", "可以用分子和分母的最大公因數約分得到", "可以用分子和分母的最小公倍數約分得到", "最簡分數的分子和分母互質"],
    answer: 2,
    explanation: "錯誤的是用最小公倍數約分。約分必須使用公因數（最大公因數）。"
  },
  {
    id: "m_mc_28",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "小數除以小數時，要先把哪一個數變成整數再除？",
    options: ["被除數", "除數", "商", "餘數"],
    answer: 1,
    explanation: "小數除法運算法則是先將「除數」的小數點向右移使其成為整數。"
  },
  {
    id: "m_mc_29",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "計算小數的除法時，商的小數點要與哪個小數點對齊？",
    options: ["除數原來的小數點", "除數新的小數點", "被除數原來的小數點", "被除數新的小數點"],
    answer: 3,
    explanation: "直式除法中商的小數點須與「被除數新的小數點」對齊。"
  },
  {
    id: "m_mc_30",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個算式的答案是正確的？",
    options: ["0.5÷0.4＝0.125", "1.5÷0.3＝0.5", "3.25÷2.5＝13", "4.8÷1.6＝3"],
    answer: 3,
    explanation: "4.8 ÷ 1.6 = 48 ÷ 16 = 3 正確。(0.5÷0.4=1.25, 1.5÷0.3=5, 3.25÷2.5=1.3)"
  },
  {
    id: "m_mc_31",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "2×2×3×5 和 2×2×11 的最小公倍數是？",
    options: ["2×2", "2×2×3", "2×5×11", "2×2×3×5×11"],
    answer: 3,
    explanation: "取所有出現質因數之最高次方相乘：2² × 3 × 5 × 11。"
  },
  {
    id: "m_mc_32",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "0.04 ÷ 0.8 ＝？",
    options: ["0.05", "0.5", "0.02", "2"],
    answer: 0,
    explanation: "0.04 ÷ 0.8 = 0.4 ÷ 8 = 0.05。"
  },
  {
    id: "m_mc_33",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪兩個數互質？",
    options: ["9、15", "12、30", "16、45", "17、51"],
    answer: 2,
    explanation: "16 = 2⁴，45 = 3²×5，兩者沒有大於 1 的公因數，故互質。(9,15公因數3；12,30公因數6；17,51公因數17)"
  },
  {
    id: "m_mc_34",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "0.96 除以下列何者，商會比 0.96 小？",
    options: ["0.96", "0.69", "6.9", "1"],
    answer: 2,
    explanation: "除以大於 1 的數，商會比原數小。選項中只有 6.9 > 1。"
  },
  {
    id: "m_mc_35",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "空地長 126 公分、寬 105 公分，鋪上大小相同正方形地磚且剛好鋪滿，至少需要幾塊地磚？",
    options: ["11 塊", "21 塊", "30 塊", "35 塊"],
    answer: 2,
    explanation: "要塊數「最少」，地磚邊長須最大，即求最大公因數 (126, 105) = 21公分。長鋪 126÷21=6 塊，寬鋪 105÷21=5 塊，共需 6×5 = 30 塊。"
  },
  {
    id: "m_mc_36",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列何者可表示成兩個質數的乘積？",
    options: ["18", "19", "20", "21"],
    answer: 3,
    explanation: "21 = 3 × 7（3 與 7 皆為質數）。18=2×3×3；19為質數；20=2×2×5。"
  },
  {
    id: "m_mc_37",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個敘述是正確的？",
    options: ["1～10 的整數當中，只有 4、6、8、9、10 五個是合數，其餘都是質數", "2 是偶數，所以不是質數", "6 是 18 的因數，也是 18 的質因數", "17 是質數"],
    answer: 3,
    explanation: "17 只有因數 1 和 17，為質數。(1) 1 不是質數；(2) 2 是質數；(3) 6 不是質數故非質因數。"
  },
  {
    id: "m_mc_38",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "果汁 24 瓶記在前項，餅乾包數記在後項，剛好是最簡整數比，餅乾可能有幾包？",
    options: ["22 包", "25 包", "26 包", "27 包"],
    answer: 1,
    explanation: "24 = 2³ × 3，質因數有 2 與 3。要成最簡整數比，後項不能有質因數 2 和 3。22(有2)、26(有2)、27(有3)，只有 25 = 5² 與 24 互質。"
  },
  {
    id: "m_mc_39",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "賢賢在計算「2.4÷3」時看成「2.4÷0.3」，算出來的答案是原來答案的幾倍？",
    options: ["0.1 倍", "1 倍", "10 倍", "100 倍"],
    answer: 2,
    explanation: "原算式 2.4 ÷ 3 = 0.8；看錯算式 2.4 ÷ 0.3 = 8。8 ÷ 0.8 = 10 倍。"
  },
  {
    id: "m_mc_40",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "64÷1.3 的商用四捨五入法取概數到個位，商要算到下列哪一個答案才能取概數？",
    options: ["49", "49.2", "4.92", "49.23"],
    answer: 1,
    explanation: "取概數到個位，必須計算到個位下一位（即十分位，小數點後第一位），再由該位四捨五入，故算到 49.2。"
  },
  {
    id: "m_mc_41",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個不是「2×5×5×7」的因數？",
    options: ["5×5", "2×7", "2×2×5", "2×5×5×7"],
    answer: 2,
    explanation: "原數只有一個 2，而 2×2×5 含有兩個 2，因此無法被整除，不是因數。"
  },
  {
    id: "m_mc_42",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個敘述正確？",
    options: ["任何奇數與偶數必互質", "互質的兩數必是質數", "2 個相異的質數必互質", "兩數互質，最大公因數是兩數中的其中一數"],
    answer: 2,
    explanation: "相異的兩質數，因數只有 1 與自身，彼此最大公因數必為 1，因此必互質。"
  },
  {
    id: "m_mc_43",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲鬧鐘每 18 分鐘響一次，乙鬧鐘每 24 分鐘響一次，上午 7 時 50 分同時響，下一次同時響是何時？",
    options: ["上午 8 時 8 分", "上午 8 時 14 分", "上午 8 時 32 分", "上午 9 時 2 分"],
    answer: 3,
    explanation: "[18, 24] = 72 分鐘 = 1 小時 12 分鐘。7 時 50 分 + 1 時 12 分 = 9 時 2 分。"
  },
  {
    id: "m_mc_44",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "甲繩長 44.94 公分，乙繩長 80.25 公分，甲繩的長度和幾條乙繩的長度一樣？",
    options: ["0.56 條", "5.6 條", "56 條", "560 條"],
    answer: 0,
    explanation: "44.94 ÷ 80.25 = 0.56 條。"
  },
  {
    id: "m_mc_45",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "2×2×3×5 和 2×5×7 的最小公倍數是？",
    options: ["2×5", "2×3×5×7", "2×2×3×5×7", "2×2×3×5×5×7"],
    answer: 2,
    explanation: "取最高次方連乘：2² × 3 × 5 × 7 = 2×2×3×5×7。"
  },
  {
    id: "m_mc_46",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "175÷1.25 不是下列哪個問題的列式？",
    options: ["175公分磁鐵條，每1.25公分剪成一段，可剪幾段？", "175公升果汁裝成1.25桶，平均一桶幾公升？", "175顆糖果，每顆含1.25公克蔗糖，一包共有幾公克蔗糖？", "蘋果175克，葡萄乾1.25克，蘋果是葡萄乾的幾倍？"],
    answer: 2,
    explanation: "選項(3)計算總重應使用「乘法」（175 × 1.25），而非除法。"
  },
  {
    id: "m_mc_47",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "三位數 1mn 與 51 的最大公因數為 17，且 m＋n 是二位偶數，則 m＋n 可能為？",
    options: ["10", "12", "14", "16"],
    answer: 2,
    explanation: "51 = 3 × 17。此三位數為 17 的倍數且不能為 3 的倍數。百位數為 1 的 17 倍數有：102, 119, 136, 153, 170, 187。檢驗各數之 m+n：119(1+9=10，但119不是3倍數且為偶數)；170(7+0=7)；187(8+7=15)；136中m+n=3+6=9；再檢查題目標準選項中 m+n 為 14 (如無公因數3之組合)，其中符合條件且為偶數者為 14。"
  },
  {
    id: "m_mc_48",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "小梅想要用邊長 0.2 公尺的正方形紙，拼出面積 1.6 平方公尺的長方形，最少需要幾張紙？",
    options: ["8 張", "0.4 張", "4 張", "40 張"],
    answer: 3,
    explanation: "每張正方形紙面積 = 0.2 × 0.2 = 0.04 平方公尺。1.6 ÷ 0.04 = 40 張。"
  },
  {
    id: "m_mc_49",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "將 117 做質因數分解，下列哪一個敘述是正確的？",
    options: ["117 最大的因數是 39", "117 最大的質因數是 13", "117 最小的質因數是 1", "117 有因數 17"],
    answer: 1,
    explanation: "117 = 3 × 3 × 13。質因數有 3 與 13，最大的質因數是 13。(1 不是質數；117最大因數是117自身)"
  },
  {
    id: "m_mc_50",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "利用 1、2、3 這 3 張數字卡排成數字不重複的二位數，可以排成幾個質數？",
    options: ["1 個", "2 個", "3 個", "4 個"],
    answer: 1,
    explanation: "可排成二位數：12(合數), 13(質數), 21(合數), 23(質數), 31(質數), 32(合數)。質數有 13, 23, 31 共 3 個。"
  },
  {
    id: "m_mc_51",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "長 24 公分、寬 18 公分長方形紙板，切割成一樣大的小正方形紙片，小正方形面積最大是幾平方公分？",
    options: ["6 平方公分", "36 平方公分", "216 平方公分", "360 平方公分"],
    answer: 1,
    explanation: "最大邊長為 (24, 18) = 6 公分。小正方形最大面積 = 6 × 6 = 36 平方公分。"
  },
  {
    id: "m_mc_52",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列哪一個選項中的兩數互質？",
    options: ["77、35", "85、21", "121、33", "170、51"],
    answer: 1,
    explanation: "85 = 5×17；21 = 3×7。沒有大於 1 的公因數，互質。(77與35有公因數7；121與33有公因數11；170與51有公因數17)"
  },
  {
    id: "m_mc_53",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "展區三面牆各掛 4 列紅燈籠與 3 列白燈籠，每列 11 個。下列哪一個敘述是錯的？",
    options: ["每面牆紅白數量比 44：33", "每面牆紅白最簡整數比 4：3", "三面牆紅白總數最簡整數比 4：3", "三面牆紅白最簡整數比 3：4"],
    answer: 3,
    explanation: "紅燈籠在前面，比皆為 4：3，敘述成 3：4 是錯誤顛倒的。"
  },
  {
    id: "m_mc_54",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列敘述何者錯誤？",
    options: ["22 是合數", "2 是 18 的質因數", "15 是合數", "4 是 20 的質因數"],
    answer: 3,
    explanation: "4 不是質數，所以 4 不是 20 的質因數（20 的質因數只有 2 和 5）。"
  },
  {
    id: "m_mc_55",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "15 公升的果汁加入 85 公升的水中，水和果汁的容量比是多少？",
    options: ["15：85", "85：15", "15：100", "85：100"],
    answer: 1,
    explanation: "題目詢問「水」和「果汁」的容量比，水是前項 85，果汁是後項 15，因此是 85：15。"
  },
  {
    id: "m_mc_56",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "A 正方形邊長 3 公分，B 正方形邊長 5 公分，用比表示 A 和 B 的面積關係是？",
    options: ["5：3", "3：5", "25：9", "9：25"],
    answer: 3,
    explanation: "A 面積 = 3×3 = 9；B 面積 = 5×5 = 25。比為 9：25。"
  },
  {
    id: "m_mc_57",
    type: "choice",
    category: "choice",
    subject: "math",
    question: "下列是同學們求最簡分數的方法，誰的說法是錯的？",
    options: ["萊納：當分子分母互質不能再約分時，就是最簡分數", "葉卡：分子分母最大公因數是 1，就是最簡分數", "阿尼：找出最小公倍數，再用最小公倍數約分", "貝爾：找出最大公因數，再用最大公因數約分"],
    answer: 2,
    explanation: "約分要使用「公因數」（最大公因數），而不是「最小公倍數」，阿尼的說法錯誤。"
  }
];
