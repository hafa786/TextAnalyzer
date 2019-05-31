// functions // 
function textLength(text){
    let textLength = {
        "withSpaces" : text.length,
        "withoutSpaces" : (text.length) - (text.split(" ").length - 1)
    }
    return textLength;
}
function wordCount(text){
var splitSting = text.split(" ");
let count = 0;
splitSting.forEach(function(str) {
    if(str){
        count = count+1
    }
});
return count
}
function characterCount(text){
    
    var initialList = {},
    words = text
            .replace(/[.,?!;()"'-]|[0-9]/g, " ")
            .replace(/\s+/g, " ")
            .toLowerCase();
    // making the initial list
    for(let i=0; i<words.length; i++){
        if (words[i] !== " "){
            if (!(initialList.hasOwnProperty(words[i]))) {
                initialList[words[i]] = 0;
                }
                initialList[words[i]]++;
        }
    }
    // sorting the list and making final list character counting //
    var final_list = []

    Object
    .entries(initialList)
    .sort()
    .reduce((_sortedObj, [k,v]) => ( final_list.push( {
      ..._sortedObj,
      [k]: v
    })), {})

    return final_list;
}

function asserEquals(expectedValue,actualValue){
    return (expectedValue == actualValue) ? true : false;
}

module.exports = {
    textLength:textLength,
    wordCount: wordCount,
    characterCount:characterCount,
    asserEquals:asserEquals
}