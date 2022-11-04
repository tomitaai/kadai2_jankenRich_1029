let lifePoint = 0;
let olife = 100;

// ライフゲージ（プレイヤー）＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const plifeBar = document.querySelector(".player-life-bar");
const plifeMark = document.querySelector(".player-life-mark");
let plife = 100;

// ライフゲージ（鬼）＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const olifeBar = document.querySelector(".oni-life-bar");
const olifeMark = document.querySelector(".oni-life-mark");

// ■■■■■■スタートボタンを押したとき実行■■■■■■
$("#btn_play").on("click", function () {
    // 0.ボタン消す
    $("#btn_play").hide();
    $(".rule").hide();

    // 1.動画を再生する
    $("#video").get(0).play();

    // 2.画像をランダムに変更してスライド
    // 繰り返しの実行
    function slide_anime() {
        for (var i = 0; i <= 25; i++) {
            // 透明画像を追加
            $(".slide-zone").append(
                '<img class="slide-img" src="img/toumei.png" alt="' + i + '">'
            );
            // ID名を連番で追加
            $(".slide-img").each(function (i) {
                $(this).attr("id", "slide-img" + i);
            });

            // スライド画像のsrcの配列を定義
            var slide_img_array = [
                "chick.png",
                "dog.png",
                "cat.png",
                "horse.png",
                "pig.png",
                "toumei.png",
                "toumei.png",
                "toumei.png",
            ];
            // スライド画像の枚数に応じた範囲の乱数を生成
            var random = Math.floor(Math.random() * slide_img_array.length);
            //乱数に応じて表示する画像のsrcを配列から取得
            var slide_img_src = slide_img_array[random];
            console.log(i, "番号", random, "乱数", slide_img_src, "画像");
            // 乱数から取得した画像に変更
            $("#slide-img" + i).attr("src", "img/" + slide_img_src);
            // 0.2秒ごとに画像を横スライド
            (function (i) {
                setTimeout(function () {
                    $("#slide-img" + i).animate(
                        { right: 1150 },
                        3000,
                        "linear"
                    );
                }, 400 * i);
            })(i);
        }
    }
    slide_anime();
});

// ■■■■■■スタートボタンを押したとき終了■■■■■■

// ■■■■■■キーダウンされたとき実行■■■■■■

$(window).on("keydown", function (e) {
    const pos_drum = $(".drum-img").offset();
    const pos_item0 = $("#slide-img0").offset();
    const pos_item1 = $("#slide-img1").offset();
    const pos_item2 = $("#slide-img2").offset();
    const pos_item3 = $("#slide-img3").offset();
    const pos_item4 = $("#slide-img4").offset();
    const pos_item5 = $("#slide-img5").offset();
    const pos_item6 = $("#slide-img6").offset();
    const pos_item7 = $("#slide-img7").offset();
    const pos_item8 = $("#slide-img8").offset();
    const pos_item9 = $("#slide-img9").offset();
    const pos_item10 = $("#slide-img10").offset();
    const pos_item11 = $("#slide-img11").offset();
    const pos_item12 = $("#slide-img12").offset();
    const pos_item13 = $("#slide-img13").offset();
    const pos_item14 = $("#slide-img14").offset();
    const pos_item15 = $("#slide-img15").offset();
    const pos_item16 = $("#slide-img16").offset();
    const pos_item17 = $("#slide-img17").offset();
    const pos_item18 = $("#slide-img18").offset();
    const pos_item19 = $("#slide-img19").offset();
    const pos_item20 = $("#slide-img20").offset();
    const pos_item21 = $("#slide-img21").offset();
    const pos_item22 = $("#slide-img22").offset();
    const pos_item23 = $("#slide-img23").offset();
    const pos_item24 = $("#slide-img24").offset();
    const pos_item25 = $("#slide-img25").offset();

    var src0 = $("#slide-img0").attr("src");
    var src1 = $("#slide-img1").attr("src");
    var src2 = $("#slide-img2").attr("src");
    var src3 = $("#slide-img3").attr("src");
    var src4 = $("#slide-img4").attr("src");
    var src5 = $("#slide-img5").attr("src");
    var src6 = $("#slide-img6").attr("src");
    var src7 = $("#slide-img7").attr("src");
    var src8 = $("#slide-img8").attr("src");
    var src9 = $("#slide-img9").attr("src");
    var src10 = $("#slide-img10").attr("src");
    var src11 = $("#slide-img11").attr("src");
    var src12 = $("#slide-img12").attr("src");
    var src13 = $("#slide-img13").attr("src");
    var src14 = $("#slide-img14").attr("src");
    var src15 = $("#slide-img15").attr("src");
    var src16 = $("#slide-img16").attr("src");
    var src17 = $("#slide-img17").attr("src");
    var src18 = $("#slide-img18").attr("src");
    var src19 = $("#slide-img19").attr("src");
    var src20 = $("#slide-img20").attr("src");
    var src21 = $("#slide-img21").attr("src");
    var src22 = $("#slide-img22").attr("src");
    var src23 = $("#slide-img23").attr("src");
    var src24 = $("#slide-img24").attr("src");
    var src25 = $("#slide-img25").attr("src");

    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    // 条件1.的に動物がいる
    if (
        pos_item0.left >= pos_drum.left + 37.5 &&
        pos_item0.left <= pos_drum.left + 112.5
    ) {
        // 条件2.画像と押したキーが同じ
        if (src0 === "img/chick.png" && e.keyCode === 13) {
            success_anime();
        } else if (src0 === "img/dog.png" && e.keyCode === 38) {
            success_anime();
        } else if (src0 === "img/cat.png" && e.keyCode === 40) {
            success_anime();
        } else if (src0 === "img/horse.png" && e.keyCode === 37) {
            success_anime();
        } else if (src0 === "img/pig.png" && e.keyCode === 39) {
            success_anime();
        } else {
            plife_damage();
        }
    } else {
    }
    console.log(olife);
    // ここから繰り返し ここを何とかしたいです＝＝＝＝＝＝＝＝＝＝＝＝＝

    // なんとかしてみました。
    // 同じような挙動を保っているかなと思います
    correctCheck(pos_item1, pos_drum, src1, e);

    correctCheck(pos_item2, pos_drum, src2, e);

    correctCheck(pos_item3, pos_drum, src3, e);

    correctCheck(pos_item4, pos_drum, src4, e);

    correctCheck(pos_item5, pos_drum, src5, e);

    correctCheck(pos_item6, pos_drum, src6, e);

    correctCheck(pos_item7, pos_drum, src7, e);

    correctCheck(pos_item8, pos_drum, src8, e);

    correctCheck(pos_item9, pos_drum, src9, e);

    correctCheck(pos_item10, pos_drum, src10, e);

    correctCheck(pos_item11, pos_drum, src11, e);

    correctCheck(pos_item12, pos_drum, src12, e);

    correctCheck(pos_item13, pos_drum, src13, e);

    correctCheck(pos_item13, pos_drum, src13, e);
    correctCheck(pos_item14, pos_drum, src14, e);
    correctCheck(pos_item15, pos_drum, src15, e);
    correctCheck(pos_item16, pos_drum, src16, e);
    correctCheck(pos_item17, pos_drum, src17, e);
    correctCheck(pos_item18, pos_drum, src18, e);
    correctCheck(pos_item19, pos_drum, src19, e);
    correctCheck(pos_item20, pos_drum, src20, e);
    correctCheck(pos_item21, pos_drum, src21, e);
    correctCheck(pos_item22, pos_drum, src22, e);
    correctCheck(pos_item23, pos_drum, src23, e);
    correctCheck(pos_item24, pos_drum, src24, e);
    correctCheck(pos_item25, pos_drum, src25, e);
});

// ■■■■■■キーダウンされたとき終了■■■■■■

function correctCheck(pos_item, pos_drum, src, e) {
    if (
        pos_item.left >= pos_drum.left + 37.5 &&
        pos_item.left <= pos_drum.left + 112.5
    ) {
        if (src === "img/chick.png" && e.keyCode === 13) {
            success_anime();
        } else if (src === "img/dog.png" && e.keyCode === 38) {
            success_anime();
        } else if (src === "img/cat.png" && e.keyCode === 40) {
            success_anime();
        } else if (src === "img/horse.png" && e.keyCode === 37) {
            success_anime();
        } else if (src === "img/pig.png" && e.keyCode === 39) {
            success_anime();
        } else {
            plife_damage();
        }
    } else {
    }
    console.log("lifePoint", lifePoint);
}

// onclick内から外に出しました。
// 理由としては上記のcorrectCheckから関数を呼び出す時に
// アクセスできない位置だったためです
function success_anime() {
    $(".drum-img").attr("src", "img/success.png");
    setTimeout(function () {
        $(".drum-img").attr("src", "img/mato.png");
    }, 100);
    olife_damage(30);

    // ここを勝手に追記
    lifePoint = lifePoint + 100;
    console.log("ライフプラス");
}

// correctCheckを外に出したことでこの関数も外に出して
// correctCheckからアクセスできるようにしました;
function plife_damage() {
    plife -= 20;
    if (plife <= 0) {
        // 0 以下は光部分を非表示
        plife = 0;
        setTimeout(function () {
            plifeMark.style.visibility = "hidden";
        }, 300);
    }
    // ライフゲージを変更する
    plifeBar.style.width = plife + "%";
    $(".p-p").html("<p>プレイヤー ライフ</p>" + plife + "%");
    $(".player-img").fadeOut(100).fadeIn(100);

    // ここを勝手に追記
    lifePoint = lifePoint - 100;
    console.log("ライフマイナス");
}

// correctCheckを外に出したことでこの関数も外に出して
// correctCheckからアクセスできるようにしました;
function olife_damage(value) {
    olife -= value;
    if (olife <= 0) {
        // 0 以下は光部分を非表示
        olife = 0;
        setTimeout(function () {
            olifeMark.style.visibility = "hidden";
        }, 300);
    }
    // ライフゲージを変更する
    olifeBar.style.width = olife + "%";
    $(".oni-p").html("<p>鬼さん ライフ</p>" + olife + "%");
    $(".oni-img").fadeOut(100).fadeIn(100);
}
