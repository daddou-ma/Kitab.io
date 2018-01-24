class Token {
    constructor(value) {
        this._value  = value;
        this._length = value.length;
        this._node   = document.createElement('span');
        
        let open     = document.createElement('span');
        open.classList.add('open');
        open.appendChild(document.createTextNode("<"));
        
        let tag     = document.createElement('span');
        tag.classList.add('tag');
        tag.appendChild(document.createTextNode(this._value.slice(1, this._value.length - 1)));
        
        let close     = document.createElement('span');
        close.classList.add('close');
        close.appendChild(document.createTextNode(">"));
        
        this._node.appendChild(open);
        this._node.appendChild(tag);
        this._node.appendChild(close);
    }
    
    getValue() {
        return this._value;
    }
    
    getLength() {
        return this._length;
    }
    
    getNode() {
        return this._node;
    }
}