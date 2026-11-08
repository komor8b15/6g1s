// 國小生活英語題庫 (含單字分類、文法單選、句子重組、閱讀測驗)
window.engQuestions = [
  // ====== 分類題 (Category Classification) ======
  {
    id: "eng_cat_1",
    type: "category_drop",
    category: "grammar",
    subject: "eng",
    question: "Look and Classify: 請將單字正確歸類到【國家 Countries】或【交通方式 Transportation】",
    items: [
      { word: "India", cat: "country" },
      { word: "on foot", cat: "trans" },
      { word: "Japan", cat: "country" },
      { word: "by bus", cat: "trans" },
      { word: "Australia", cat: "country" },
      { word: "by scooter", cat: "trans" }
    ],
    explanation: "國家 (Countries): India (印度), Japan (日本), Australia (澳洲)；交通方式 (Transportation): on foot (步行), by bus (搭公車), by scooter (騎機車)。"
  },

  // ====== 文法與單選題 (Multiple Choice & Grammar) ======
  {
    id: "eng_mc_1",
    type: "choice",
    category: "grammar",
    subject: "eng",
    question: "How ＿＿＿＿ your sisters go to the park?",
    options: ["is", "are", "do", "does"],
    answer: 2,
    explanation: "主詞是複數名詞「your sisters」，句中有一般動詞「go」，現在式疑問句助動詞應使用「do」。"
  },
  {
    id: "eng_mc_2",
    type: "choice",
    category: "grammar",
    subject: "eng",
    question: "A: Does he go to school by bus?\nB: No, he doesn't. He goes to school ＿＿＿＿.",
    options: ["by foot", "on foot", "with walk", "foot"],
    answer: 1,
    explanation: "英語中表示「走路/步行」的習慣固定片語為「on foot」，搭乘車輛交通工具才使用「by + 交通工具」。"
  },
  {
    id: "eng_mc_3",
    type: "choice",
    category: "grammar",
    subject: "eng",
    question: "Look at the wrestler image. A: Where is he from?\nB: ＿＿＿＿",
    options: ["He's from the UK.", "He's from Japan.", "He's from India.", "He's from Australia."],
    answer: 1,
    explanation: "相撲選手為日本傳統文化象徵，故回答「He's from Japan.」"
  },
  {
    id: "eng_mc_4",
    type: "choice",
    category: "grammar",
    subject: "eng",
    question: "A: ＿＿＿＿＿＿＿＿?\nB: I go to school by metro.",
    options: ["Where do you go?", "How do you go to school?", "When do you go to school?", "Do you go to school?"],
    answer: 1,
    explanation: "答句提供搭乘捷運的交通方式「by metro」，問句應用「How」詢問方式：「How do you go to school?」。"
  },
  {
    id: "eng_mc_5",
    type: "choice",
    category: "grammar",
    subject: "eng",
    question: "完成句子：你妹妹走路去上學嗎？\n＿＿＿＿ your sister ＿＿＿＿ to school on foot?",
    options: ["Do / go", "Does / go", "Does / goes", "Is / going"],
    answer: 1,
    explanation: "主詞「your sister」為第三人稱單數，現在式助動詞用 Does，句中動詞須還原為原型動詞 go。"
  },

  // ====== 句子重組 (Sentence Unscramble) ======
  {
    id: "eng_scramble_1",
    type: "unscramble",
    category: "unscramble",
    subject: "eng",
    question: "句子重組 (Unscramble the sentence):",
    words: ["He", "goes", "to", "the", "bank", "by", "bike", "."],
    correctSentence: "He goes to the bank by bike .",
    displaySentence: "He goes to the bank by bike.",
    explanation: "主詞 He + 動詞 goes + 目的地 to the bank + 交通方式 by bike."
  },
  {
    id: "eng_scramble_2",
    type: "unscramble",
    category: "unscramble",
    subject: "eng",
    question: "句子重組 (Unscramble the question):",
    words: ["How", "do", "they", "go", "to", "the", "library", "?"],
    correctSentence: "How do they go to the library ?",
    displaySentence: "How do they go to the library?",
    explanation: "疑問詞 How + 助動詞 do + 主詞 they + 動詞 go to the library?"
  },
  {
    id: "eng_scramble_3",
    type: "unscramble",
    category: "unscramble",
    subject: "eng",
    question: "句子重組 (Unscramble the sentence):",
    words: ["We", "are", "from", "the", "USA", "."],
    correctSentence: "We are from the USA .",
    displaySentence: "We are from the USA.",
    explanation: "主詞 We + be動詞 are + 介系詞片語 from the USA."
  },
  {
    id: "eng_scramble_4",
    type: "unscramble",
    category: "unscramble",
    subject: "eng",
    question: "句子重組 (Unscramble the question):",
    words: ["Is", "Jay", "from", "Singapore", "?"],
    correctSentence: "Is Jay from Singapore ?",
    displaySentence: "Is Jay from Singapore?",
    explanation: "Be動詞開頭問句：Is + 主詞 Jay + 介系詞片語 from Singapore?"
  },

  // ====== 短文克漏字 (Cloze Reading) ======
  {
    id: "eng_cloze_1",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Jenny (1) from Taiwan, but now she lives with her mom and dad in the USA. Now, she (2) two good friends at school. (3) Ian and Willy. They all like hamburgers.",
    question: "選出短文 (1) 處最適合的動詞：",
    options: ["am", "are", "is"],
    answer: 2,
    explanation: "主詞 Jenny 為第三人稱單數，be 動詞使用 is。"
  },
  {
    id: "eng_cloze_2",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Jenny is from Taiwan, but now she lives with her mom and dad in the USA. Now, she (2) two good friends at school.",
    question: "選出短文 (2) 處正確的動詞形式：",
    options: ["have", "has", "is"],
    answer: 1,
    explanation: "主詞 she 為第三人稱單數，動詞「擁有」使用 has。"
  },

  // ====== 閱讀測驗 (Reading Comprehension) ======
  {
    id: "eng_read_1",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Nick is a singer in the USA, but he is from Spain. He has many followers on Instagram: Singapore (170,901), India (320,500), Taiwan (450,200).",
    question: "Where is Nick from?",
    options: ["He is from the USA.", "He is from Spain.", "He is from the UK."],
    answer: 1,
    explanation: "文章明確提及「...but he is from Spain.」，Nick 來自西班牙。"
  },
  {
    id: "eng_read_2",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "There are 170,901 followers from Singapore, 320,500 followers from India, and 450,200 from Taiwan.",
    question: "There are 170,901 followers from one country. What country is this?",
    options: ["It is India.", "It is Taiwan.", "It is Singapore."],
    answer: 2,
    explanation: "數據統計中 170,901 人來自新加坡 (Singapore)。"
  },
  {
    id: "eng_read_3",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Dora, her brother and sister like cartoons. SpongeBob is from the USA, and Dora likes it very much. Detective Conan and Pokémon are from Japan. Peppa Pig is from the UK, and Dora's little sister likes it very much.",
    question: "Where is SpongeBob from?",
    options: ["It's from Japan.", "It's from the UK.", "It's from the USA."],
    answer: 2,
    explanation: "文章明確指出：「SpongeBob is from the USA」。"
  },
  {
    id: "eng_read_4",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Detective Conan and Pokémon are from Japan. They're very popular in Taiwan. Peppa Pig is from the UK.",
    question: "Is Detective Conan from Japan?",
    options: ["No. It's from the UK.", "Yes, and Pokémon is from Japan, too.", "Yes, and Peppa Pig is from Japan, too."],
    answer: 1,
    explanation: "文章敘述「Detective Conan and Pokémon are from Japan」，名偵探柯南與寶可夢皆來自日本。"
  },
  {
    id: "eng_read_5",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "D Zoo: Come and see the new Panda! How to get here: 5 minutes walk from D Zoo Station by MRT, or 8 minutes walk from the dock by boat. Buses available: 101, 1056, 208, 399.",
    question: "Martin wants to go to the zoo by bus. Which bus can he take?",
    options: ["He can't go to the zoo by bus.", "He can take bus 101.", "He can take bus 988."],
    answer: 1,
    explanation: "公告可搭乘的公車號碼為 101, 1056, 208, 399，故他可以搭乘 101 號公車。"
  },
  {
    id: "eng_read_6",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "D Zoo: 8 minutes walk from the dock (碼頭) by boat.",
    question: "Can people go to the zoo by boat?",
    options: ["Yes, they can go to the zoo by boat.", "No, they can only go by train.", "No, they can't."],
    answer: 0,
    explanation: "交通指南說明可從碼頭步行 8 分鐘抵達，代表可以搭船 (boat) 前往。"
  },
  {
    id: "eng_read_7",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Dad: It's sunny today. Let's have a picnic in the park. Jane: Mike is from Australia. He could bring sandwiches. Cindy is from Taiwan. She could bring some bubble tea. Dad: Wonderful! I love bubble tea.",
    question: "Where do they have a picnic?",
    options: ["By the river.", "At school.", "In the park."],
    answer: 2,
    explanation: "爸爸說：「Let's have a picnic in the park.」，野餐地點在公園。"
  },
  {
    id: "eng_read_8",
    type: "choice",
    category: "reading",
    subject: "eng",
    context: "Jane: Cindy is from Taiwan. She could bring some bubble tea. Dad: Wonderful! I love bubble tea.",
    question: "Does Jane's father like bubble tea?",
    options: ["Yes, he does.", "No, he doesn't.", "We don't know."],
    answer: 0,
    explanation: "爸爸回答：「Wonderful! I love bubble tea.」，代表他很喜歡珍珠奶茶。"
  }
];