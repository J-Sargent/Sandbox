// var sheetData = [
//   ["key1", "unused", "notused", "4851234567"],
//   ["key2", "unused", "notused", "4831234567"],
//   ["key3", "unused", "notused", "9520234567"],
//   ["key4", "unused", "notused", "8804860567"],
//   ["key5", "unused", "notused", "8353895567"],
//   ["key6", "unused", "notused", "4001254857"],
//   ["key7", "unused", "notused", "9270153277"],
//   ["key8", "unused", "notused", "8731485567"],
//   ["key9", "unused", "notused", "9130263547"],
//   ["key10", "unused", "notused", "2001898567"],
//   ["key11", "unused", "notused", "3001378567"],
//   ["key12", "unused", "notused", "6001211367"]
// ];
// var sheetData = [
//   ["4851234567"],
//   ["4831234567"],
//   ["9520234567"],
//   ["8804860567"],
//   ["8353895567"],
//   ["4001254857"],
//   ["9270153277"],
//   ["8731485567"],
//   ["9130263547"],
//   ["2001898567"],
//   ["3001378567"],
//   ["6001211367"]
// ];

// let [['callId','agentName','outboundPhone','inboundPhone']] = sheetData;
//console.log('callId', callId);

// result = sheetData.filter(
//   ([callId, agentName, outboundPhone, inboundPhone]) => {
//     if (inboundPhone.pluck() = 8){return "ok";}
//   }
// );
// console.log("result", result);

//**********worked on single cell*********
// var number = "800";
// function createCRM(number) {
//   var number = number.toString();
//   var crmNumber;
//   switch (number[0]) {
//     case "8":
//       crmNumber = "AWS";
//       break;
//     default:
//       crmNumber = "oops";
//   }
//   return crmNumber;
// }
// console.log(createCRM(number));

//*******final code that worked***
// function createCRM(array) {
//   var answer = array.map(function(row) {
//     var number = row[0].toString();
//     var crmNumber;
//     switch (number[0]) {
//      case "8":
//         crmNumber = "AWS";
//         break;
//     case "4":
//       crmNumber = "Salesforce";
//       break;
//     case "9":
//       crmNumber = "Firebase";
//       break;
//   default:
//         crmNumber = "";
//     }
//     return [crmNumber];
//   });
// return answer;
//   }

var arrayMessage = [
  ["123", "Jessica", "9136537462", "", "hi there!"],
  ["153", "Emma", "9136260767", "ks", "whattup"]
];
var headers = [
  "Call ID",
  "Agent Name",
  "Outbound #",
  "Inbound #",
  "Call Source"
];
//5 lines

// function makeMessage(array) {
//   var messageString = "";
//   array[0].forEach(function(arr) {
//     if (arr == "") {
//     } else {
//       messageString += arr;
//       // prettier-ignore
//       messageString += '\n';
//     }
//     return messageString;
//   });
//   return messageString;
// }

//working
// function makeMessage(array) {
//   var messageString = "";
//   headers = getHeaders();
//   for (i = 0; i < array[0].length; i++) {
//     var row = array[0];
//     if (row[i] == "") {
//     } else {
//       messageString += headers[i] + ": " + row[i];
//       // prettier-ignore
//       messageString += '\n';
//     }
//   }
//   return messageString;
// }

// functioning 7/8/19 1152
// function makeMessage(array) {
//   var messageString = "";
//   // headers = getHeaders();
//   var answer = array.map(function(row) {
// 		messageString = "";
//     for (i = 0; i < row.length; i++) {
//       if (row[i] == "") {
//       } else {
//         messageString += headers[i] + ": " + row[i];
//         // prettier-ignore
//         messageString += '\n';
//       }
//     }
//     return messageString;
//   });
//   return answer;
// }

// after Emma's cleaning edits
// function makeMessage(array) {
//   var headers = getHeaders();
//   var answer = array.map(function(row) {
//     var messageString = "";
//     for (var i = 0; i < row.length; i++) {
//       if (row[i] !== "") {
//         messageString += headers[i] + ": " + row[i];
//         // prettier-ignore
//         messageString += '\n';
//       }
//     }
//     return messageString;
//   });
//   return answer;
// }
//answer = makeMessage(arrayMessage)
console.log("answer:", answer);
answer;

// console.log(makeMessage(arrayMessage));
