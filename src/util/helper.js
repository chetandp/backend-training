const printdate = function(){
    let currentdate = new date ();
    console.log("current date :" + currentdate)
}
module.exports.date=printdate;

const printmonth=function (){
    let currentdate=new date ();
    let currentmonth=currentdate.getmonth()+1;
    console.log ("current month : + currentmonth")
}
module.exports.month=printmonth;

const batchinfo=function (){
    console.log("plutonium w3d5 ,the topic for today is node.js module system" )
}
module.exports.batch=batchinfo;