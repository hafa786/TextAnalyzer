const fn = require("../api/functions.js");

class Tester {
    // test the length of given text
    testTextLength(){
        console.log("*************** Text Length *******************");
        var testDataFortextLength = [
            {"data":"hello 2 times  ","withSpaces":15,"withoutSpaces":11},
            {"data":" hello times","withSpaces":15,"withoutSpaces":11},
            {"data":"Kaksin verroin Mentosta","withSpaces":15,"withoutSpaces":11},
            {"data":"I dislike this concept 2 ","withSpaces":25,"withoutSpaces":20},
            {"data":"I dislike this concept ","withSpaces":15,"withoutSpaces":11},
            {"data":"Your task is to implement an API endpoint","withSpaces":15,"withoutSpaces":11},
        ];
        
        for(let i=0;i<testDataFortextLength.length ; i++){
            var actual = fn.textLength(testDataFortextLength[i].data);
            if(fn.asserEquals(testDataFortextLength[i].withSpaces, actual.withSpaces) && fn.asserEquals(testDataFortextLength[i].reswithoutSpacesult,actual.withoutSpaces)){
                console.log(testDataFortextLength[i].data,": Passed");
            }
            else{
                console.log(testDataFortextLength[i].data,": Failed");
            }
        }
    }
    // test the counting of words
    testWordsCount(){
        console.log("*************** Word Count *******************");
        var testDataForWordCount = [
            {"data":"hello 2 times  ","result":3},
            {"data":" hello times","result":2},
            {"data":"Kaksin verroin Mentosta","result":6},
            {"data":"I dislike this concept ","result":7},
            {"data":"I dislike this concept ","result":4},
            {"data":"Your task is to implement an API endpoint","result":8},
        ];
        
        for(let i=0;i<testDataForWordCount.length ; i++){
            var actual = fn.wordCount(testDataForWordCount[i].data);
            if(fn.asserEquals(testDataForWordCount[i].result,actual)){
                console.log(testDataForWordCount[i].data,": Passed");
            }
            else{
                console.log(testDataForWordCount[i].data,": Failed");
            }
        }
    }
    // same way test cases for character count 
    characterCount(){
        
    }
}
const tester = new Tester();
tester.testWordsCount();
tester.testTextLength();
