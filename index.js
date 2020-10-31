let unko = "Hello World!";
// unko ="Hello World!!2"
console.log(unko);

const bigUnko = "He..Hell..Hello World!!";
console.log(bigUnko);

let inoki = ["イーチ","ニー","サーン","ダー"];
console.log(inoki[0],inoki[1]);

// ループ文
let index = 0;
// indexが5以下の間は処理を繰り返します。
while(index < 5){
  console.log(index)
  index ++;
}

let index2 = 0;
// indexが5以下の間は処理を繰り返します。
while(index2 < inoki.length){
  console.log(inoki[index2])
  index2 ++;
}

if(inoki.length > 3){
  console.log("ボンバイエ！")
} else {
  console.log("ボンバ...")
}

// 関数
const test = (arg) => {
  if(inoki.length > arg){
    console.log("ボンバイエ！")
  } else {
    console.log("ボンバ...")
  }
};

// カッコ内の5は、引数argに入れる為。
test(5);
test(2);


// オブジェクト（たくさんの情報を持たせる事ができる。データの塊。)
const unko2 = {
  color: "pink",
  purfume: "mint",
  size: "mint",
  // 関数も組み込む事ができる。
  gotoToilet: () => {
    console.log("Hello World!")
  }
};

console.log(unko2)
console.log(unko2.size)
console.log(unko2.gotoToilet())

// JavaScriptにデフォルトであるオブジェクト
// window（ウェブブラウザ全体をオブジェクトとして捉える。）
console.log(window);
// ウィンドウの高さを取得したいとき
console.log(window.innerHeight);
// ウィンドウの横幅を取得したいとき
console.log(window.innerWidth);
// alert関数は、console.logは不要。
window.alert("Unko!")

// document（ウェブブラウザ上で表示しているページをオブジェクトとして捉える。）
console.log(document);
// HTML中のタグを参照したい。以下でbuttonタグに何か仕掛けたい。→getElementsByTagName関数を使う。
console.log(document.getElementsByTagName("button"));


// eventオブジェクト：ユーザーが何らかのアクションをしたときに何か動きをつけたいときに使う。→addEventListener関数でaddEventListener（動作, 関数）
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  window.alert("Hello World!!")
});
