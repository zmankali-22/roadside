function counter() {
    var _counter = 0

    function add(increment) {
        _counter += increment
        
    }

    function retrieve() {
        return "Counter = " + _counter
    }

    return {
        add,
        retrieve
    }
}

const c = counter()

c.add(1)
c.add(2)
c.add(3)

console.log(c.retrieve())