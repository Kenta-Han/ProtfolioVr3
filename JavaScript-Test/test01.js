//パスワード入力認証

function enter() {
            mypass = prompt("パスワードを入力してください：");
            if (mypass == "0131") {
                location.href = "../index.html";
            } else {
                alert("パスワードが違います！");
            }
        }