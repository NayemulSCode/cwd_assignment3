
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log("Please given valid number greather than 0");
        return 0;
    }
    else{
        var meter = kilometer*1000;
    return meter;
    }
}


function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        console.log("invalid input");
    }
    else{
        var watch= watch*50;
        var phone = phone*100;
        var laptop = laptop*500;
        var totalCost = watch + phone + laptop;
        return totalCost;
    }
}


function hotelCost(days){
    var cost = 0;
    if(days<=0){
        console.log("not available services!");
        return 0
    }
    else if(days >=1 && days <=10){
         cost= days*100;
       
    }
    else if(days >=11 && days <=20){
        var costPeriodOne= 10*100;
        var remaingday = days - 10;
        var costPeriodTwo = remaingday * 80;
        cost = costPeriodOne + costPeriodTwo;
    }
    else{
        var costPeriodOne = 10*100;
        var costPeriodTwo = 10*80;
        var remaingday = days - 20;
        var costPeriodThree = remaingday * 50;
        cost = costPeriodOne + costPeriodTwo + costPeriodThree;
    }
    return cost;
}

function megaFriend(array) {
    var largestNameOfArray = "";
    for(var i=0; i<array.length; i++){
        var numberofName = array[i];
        if(numberofName.length >largestNameOfArray.length){
            largestNameOfArray = array[i];
        }
    }
    return largestNameOfArray;
  }
  