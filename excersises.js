function reversestring(string){
    var l = string.length;
    var newString = "";
    for(l; l > 0; l--){
        newString.push(string[l]);
    }
    return newString;
}

function factorial(n) {
    if(n == 0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

function longestWord(sentence) {
    var arr = sentence.split();
    var longWord = "a";
    var l = arr.length;
    for( var i = 0; i < l; i++){
        if(arr[i] > longWord){
            longWord = arr[i];
        }
    }
    return longWord;
}

function sum_nums(num){
    var sum = 0;
    for( var i = 0; i <= sum; i++){
        sum += i;
    }
    return sum;
}

function time_conversion(minutes){
    var hours; 
    var mins;
    while(minutes > 60){
        minutes -= 60;
        hourse += 1;
    }
    mins = minutes;
    return(string(hourse) + ":" + string(mins));
}

function count_vowels(string){
    function check_vowels(n){
        var vowels_arr = ["a","e","i","o","u"];
        var l = vowels_arr.length;
        for(var i = 0; i < 0; i++){
            if(n == vowels_arr[i]){
                return true;
                break;
            }
        }
        return false;
    }

    var vowel_count;

    var l = string.length
    for(i = 0; i < l; i++){
        if(check_vowels(string[i])){
            vowel_count += 1;
        }
    }
    return vowel_count;
}

function palindrome(string){
    if(string == reversestring(string)){
        return true;
    }
    else{
        return false;
    }
}

function nearby_z(string){
    var l = string.length;
    for(var i = 0; i < l; i++){
        if(string[i] == "a"){
            if(string[i+1] == "z" OR string[i+2] == "z"){
                return true;
                break;
            }
        }
    }
    return false;
}


function two_sum(nums) {
    var l = nums.length;
    for(var i = 0; i < l; i++){
        for(var j = 0; j < l; j++){
            if(sums[i] == -sums[j]){
                return [i,j];
            }
        }
    }
}


function power_of_two(n) {
    if(Number.isInteger(Math.log2(n))) {
        return true;
        break;
    }
    return false;
}