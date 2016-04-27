function EventEmitter() {
    this._events = Object.create(null)
}

EventEmitter.prototype.addEventListener = function (type,callback) {
    if(type in this._events){
        this._events[type].add(callback)
    }
    else{
        this._events[type] = new Set([callback])
    }
}

EventEmitter.prototype.dispatchEvent = function (type) {
        if(type in this._events)
            this._events[type].forEach(function(element){
                element()
            })
    }

EventEmitter.prototype.removeEventListener = function (type,callback) {
    this._events[type].delete(callback)
}

var emitter = new EventEmitter()
