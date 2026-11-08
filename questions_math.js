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