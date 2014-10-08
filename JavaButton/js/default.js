// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    // Self is NotJavaScript
    var numJavaVoices = 4
    var lastVoice = 0
    function sayJava() {
        lastVoice = (lastVoice + 1) % 4
        var jv = document.getElementById("javavoice" + lastVoice)
        jv.play()
    }

    function javaPressed() {
        sayJava()
        var button = document.getElementById("thebutton")
        var pressedButton = document.getElementById("buttonpressed")
        button.src = pressedButton.src
    }

    function popButton() {
        var button = document.getElementById("thebutton")
        var normalbutton = document.getElementById("buttonnormal")
        button.src = normalbutton.src
    }

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                var b = document.getElementById("thebutton")
                b.onmousedown = javaPressed
                b.onmouseup=popButton
            } else {
                // TODO: このアプリケーションは中断状態から再度アクティブ化されました。
                // ここでアプリケーションの状態を復元します。
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
    };

    app.start();
})();

