const question = "ゲーム市場、最も売れたゲーム機はどれ？"
const answers = [
  "スーパーファミコン",
  "プレイステーション",
  "ニンテンドースイッチ",
  "ニンテンドーDS"
];
const correct = "ニンテンドーDS";
// 上記、定数の文字列をHTMLに反映させる。

// ②（中級）
// 何度も書くやつについては、極力定数に入れてあげよう！※HTMLのオブジェクトを定数にぶっこむときは、"$"とつけてあげるのがしきたり。
const $button = document.getElementsByTagName("button");
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// テキストを書き換えてクイズを用意したという内容を1つの関数に纏めておこう！
const setupQuiz = () => {
  // 1〜7行目のクイズをHTMLに反映させたい！HTMLから参照するデータを取ってくる。
  // ①console.log(document.getElementsByTagName("div"));
  // ①でやった場合、divタグ（TagName）が全部参照される。
  // →HTMLの方でId属性を指定して、参照できるものを一つだけにしよう！
  // id属性は、同じページ内で2つ同じ名前で指定できないから、確実に1つで参照できる。2つ同じ名前で作っていたらエラーになる。
  document.getElementById("js-question").textContent = question;
  // textContentメソッドは、getしてきたHTMLタグが持っているテキスト情報を取得するプロパティ。"= question"で、取得したテキスト情報を何に変えたいか指定できる。

  // ③（上級）
  // buttonIndexに０（初期値）を代入します。
  let buttonIndex = 0;
  // $button.lengthの数の分（4つ）だけでという意味で変数に代入する。
  const buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
// 定義した関数を読んであげよう！
setupQuiz();

// ①（初級）
// buttonタグは、他にないので、ByTagNameでOK！
// document.getElementsByTagName("button")[0].textContent = answers[0];
// document.getElementsByTagName("button")[1].textContent = answers[1];
// document.getElementsByTagName("button")[2].textContent = answers[2];
// document.getElementsByTagName("button")[3].textContent = answers[3];


// .addEventListenerメソッドで第2引数に正解の時のアラートを指定してやろう！if文中の"correct"は、"ニンテンドーDS"。

// ③
// if文を何度も書いてしまっているから、関数の中に纏めよう！
const clickHandler = (e) => {
  if(correct === e.target.textContent) {
    // ※window.alert()は、console.log不要。
    window.alert("正解！");
  } else {
    window.alert("不正解。。");
  }
};

// ③ー2
// 書き換えられるのは→let、変わらないのは→constで代入しよう！
let handlerIndex = 0;
const buttonLength = $button.length
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};

// ③ー1
// clickHandler関数を各ボタンをクリックしたときに、実行しますよー
// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// ②（中級）
// eventの（e）、targetはeventオブジェクトの関数の一つでボタン自身を指す。どのボタンをクリックするか記載していれば、そのボタンがある位置がtarget関数で自動的に参照される為、いちいち何番か書かなくて良い。

// $button[0].addEventListener("click", (e) => {
//   console.log(e);

//   if(correct === e.target.textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// $button[1].addEventListener("click", (e) => {
//   if(correct === e.target.textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// $button[2].addEventListener("click", (e) => {
//   if(correct === e.target.textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// $button[3].addEventListener("click", (e) => {
//   if(correct === e.target.textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// ①（初級）
// $button[0].addEventListener("click", () => {
//   if(correct === $button[0].textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// $button[1].addEventListener("click", () => {
//   if(correct === $button[1].textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// $button[2].addEventListener("click", () => {
//   if(correct === $button[2].textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });

// $button[3].addEventListener("click", () => {
//   if(correct === $button[3].textContent) {
//     window.alert("正解！");
//   } else {
//     window.alert("不正解。。");
//   }
// });
