const codeSource = document.getElementsByClassName('code-source')[0];
const code = codeSource.getElementsByTagName('code')[0];

code.addEventListener('keyup', function onKeyDown(e) {
    if (e.keyCode === 9) { // tab key
        e.preventDefault();
    }
    if (e.key.length == 1) {
         console.log("LOGO : " + code.innerText);
        let pos = window.getSelection().anchorOffset;
        console.log(pos);

        parse(code.innerText);
    }
   
    /*code.focus();
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(code.childNodes[0], pos);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);*/
});

const parse = function parse(text) {
    let line = new Line(text);
    code.innerText = "";
    line.getTokens().map((token) => {
        code.appendChild(token.getNode());
        console.log("dfsdfs");
    })
    
};