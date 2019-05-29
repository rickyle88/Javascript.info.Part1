function min(a,b){
    return (a>b) ? b : a;
}

console.log(min(1,1));
console.log(min(2,5));
console.log(min(3,-1));

function pow(x,n){
    let result = 1;
    for(let i = 1; i <= n; i ++){
        result = result * x;
    }
    return result;
}

console.log(pow(3,3));