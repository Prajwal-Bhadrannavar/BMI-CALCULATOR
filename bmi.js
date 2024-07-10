function bmiCalculator (weight, height) {
    var bmi = ((weight)/(height*height));
    var result;
    if(bmi>24.9){
        result = ("Your BMI is "+bmi+", so you are overweight.");
        
    }
    else if(bmi>18.5 && bmi<24.9){
       result = ("Your BMI is "+bmi+", so you have a normal weight.");
    }
    else{
        result = ("Your BMI is "+bmi+", so you are underweight.");
    }
    return result;
}
bmiCalculator(57,1.72);
// change above values accordingly.
