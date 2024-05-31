  class BackDoor {

    static _isAllowed = true

    static isAllowed(){
        return this._isAllowed
    }


    static modify(isAllowed){
        this._isAllowed = isAllowed
    }

}

module.exports = BackDoor