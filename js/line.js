class Line {
    constructor(text) {
        this._tokens  = [];
        this.fromText(text)
    }
    
    getTokens() {
        return this._tokens;
    }
    
    add(token) {
        this._tokens.push(token);
    }
    
    fromText(text) {
        let regex = /<[\w]*>/g;
        text.match(regex).map((tag) => {
            this.add(new Token(tag));
        })
    }
}