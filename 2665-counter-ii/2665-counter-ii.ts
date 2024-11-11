type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let cur = init
    return {
        increment: () => {
            return ++cur
        },
        decrement: () => {
            return --cur
        },
        reset: () => {
            return cur = init
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */