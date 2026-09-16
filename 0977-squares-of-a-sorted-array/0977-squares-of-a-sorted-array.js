var sortedSquares = function(nums) {
    let pos = [];
    let neg = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= 0){
            pos.push(nums[i]**2)
        }
        else{
            neg.push(nums[i]**2)
        }
    }
    let i = 0;
    let j = 0;
    let sortedSquares = [];
    neg = neg.toReversed();
    while(i<neg.length && j<pos.length){
        if(neg[i]<=pos[j]){
            sortedSquares.push(neg[i])
            i++;
        }
        else{
            sortedSquares.push(pos[j])
            j++;
    
        }
    }
    while(i<neg.length){
        sortedSquares.push(neg[i])
        i++;
    }
    while(j<pos.length){
        sortedSquares.push(pos[j])
        j++;
    }

    console.log(pos,neg);
return sortedSquares;
}; 
