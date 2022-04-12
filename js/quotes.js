const quotes = [
  {
    quotes: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quotes: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quotes: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quotes: " 한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  {
    quotes: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈",
  },
  {
    quotes:
      "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다",
    author: "아인슈타인",
  },
  {
    quotes: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다",
    author: "쇼펜하우어",
  },
  {
    quotes: "쉽게만 살아가면 재미없어 빙고",
    author: "거북이",
  },
  {
    quotes:
      "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
    author: "베토벤",
  },
  {
    quotes: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
    author: "하버트 개서",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

for (var num = 0; num < quotes.length; num++) {
  const randomNum = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNum].quotes;
  author.innerText = quotes[randomNum].author;
}
