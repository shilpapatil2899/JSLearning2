var orOperator = function (gradScore,hscMarks,sscScore,candiateName){

    var result =  (gradScore>=70 || hscMarks>=80 ||sscScore>90 ) ? `congrats ${candiateName}  you are eligible for TCS interview` : `unfortunately ${candiateName} you are not eligible for interview`;
      console.log(`${result}`);
  
  }
  
  orOperator(80,86,90, "shilpa");
  orOperator(70,65,55, "shweta");
  orOperator(60,79,88, "dimple");