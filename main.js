//Header, Footer の Include
//変数宣言
const includeHeader = new XMLHttpRequest(); //Header
const includeFooter = new XMLHttpRequest(); //Footer

//IncludeするFileを取得
includeHeader.open("GET", "include/header.html", true);
includeFooter.open("GET", "include/footer.html", true);

//Header の Include
includeHeader.onreadystatechange = function() {
    if(includeHeader.readyState === 4 && includeHeader.status === 200) {
        const headerHTML = includeHeader.responseText;
        const header = document.querySelector("#header");
        header.insertAdjacentHTML("afterbegin", headerHTML);
    }
}
