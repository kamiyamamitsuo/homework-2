'use strict';//エラーチェックモード

const btn = document.getElementById('btn');//htmlから持ってくる
const result = document.getElementById('result');


btn.addEventListener('click', () => {//ボタンをクリックした時の処理
    const num = Math.random();//0~0.99までのランダムな数字がでる

    if (num < 0.2 ){
        result.textContent = 'ラッキー';
    }else if(num < 0.5){
        result.textContent = 'まあまあ';
    }else if(num < 0.8){
        result.textContent = '気をつけて';
    }else {
        result.textContent = 'オワコン';
    }
});
