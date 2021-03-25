const findCommonItems = (arrayA,arrayB) => {
    let obj = [];
    for(let el1 of arrayA){
        for(let el2 of arrayB){
            if(el1===el2){
                obj.push(el1)
            }else{
                continue;
            }
        }
    }
    if(obj.length===0)
        return obj;
    return obj;
}

module.exports = findCommonItems;