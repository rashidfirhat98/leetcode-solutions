type F = (x: number) => number;

function compose(functions: F[]): F {
    if (functions.length){
        return function(x) {
            let result = functions[functions.length - 1](x)
            for(let i = functions.length - 2; i >= 0; i--) {
                result = functions[i](result)
            }
            return result
        }
    } else {
        return function(x) {
            return x
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */