function EventEmitter() {
    this._events = Object.create(null)
}

EventEmitter.prototype.addEventListener = function (type,calback) {
    if(type in this._events){
        this._events[type].add(calback)
    }
    else{
        this._events[type] = new Set().add(calback)
    }
}

EventEmitter.prototype.dispatchEvent = function (type) {
        if(type in this._events)
            this._events[type].forEach(function(element){
                element()
            })
    }

EventEmitter.prototype.removeEventListener = function (type,calback) {
    this._events[type].delete(calback)
}

var emitter = new EventEmitter()