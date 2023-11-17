//juice selection add-remove fields


function add(){

  var juiceField = document.getElementsByClassName('juice_selection_field')[0];
  var randomID = Math.random();

  console.log("test");
  var newField = document.createElement('select');
  newField.setAttribute('name','juice' + randomID);
  newField.setAttribute('id','selection'+randomID);


  var label1 = document.createElement('label')
  label1.setAttribute('for','selection'+randomID);
  label1.innerText = "Select Flavor:"
  var none = new Option('None','null',true,true);
  var filler1 = new Option('--------------------------','null',false,false);
  filler1.disabled = true;
  var strawberryBannana = new Option('Strawberry Bannana','straw_bannana',false,false);
  var strawberryKiwi = new Option('Strawberry Kiwi','straw_kiwi',false,false);
  var citrisPunch = new Option('Citris Punch','citris_punch',false,false);
  var blueRaspberry = new Option('Blue Raspberry','blue_ras',false,false);
  var greenWatermelon = new Option('Green Watermelon','watermelon',false,false);
  var cranApple = new Option('Cran-Apple','cran_apple',false,false);
  var orangePineapple = new Option('Orange Pineapple','orange_pineapple',false,false);
  var berry = new Option('Berry','berry',false,false);
  var filler2 = new Option('--------------------------','null',false,false);
  filler2.disabled = true;
  var appleCF = new Option('Apple (Color Free)','apple_cf',false,false);
  var whiteGrapeCF = new Option('White Grape (Color Free)','white_grape_cf',false,false);
  var peachMangoCF = new Option('Peach Mango (Color Free)','peach_mango_cf',false,false);
  var orangeRaspberryCF = new Option('Orange Raspberry (Color Free)','orange_ras_cf',false,false);
  var cherryCF = new Option('Cherry (Color Free)','cherry_cf',false,false);
  var tangerineCF = new Option('Tangerine (Color Free)','tangerine_cf',false,false);
  var fruitPunchCF = new Option('Fruit Punch (Color Free)','fruit_punch_cf',false,false);
  var filler3 = new Option('--------------------------','null',false,false);
  filler3.disabled = true;
  var mixPitcher = new Option('Mixing Pitcher','mix',false,false);
  
  var label2 = document.createElement('label')
  label2.setAttribute('for','selection_qt'+randomID);
  label2.innerText = "Quantity:"

  var quantity = document.createElement('input')
  quantity.setAttribute('type','number')
  quantity.setAttribute('id','selection_qt'+randomID)
  quantity.setAttribute('name','selection_qt'+randomID)
  quantity.setAttribute('placeholder','Enter Quantity Here')
  
  newField.append(none);
  newField.append(filler1);
  newField.append(strawberryBannana);
  newField.append(strawberryKiwi);
  newField.append(citrisPunch);
  newField.append(blueRaspberry);
  newField.append(greenWatermelon);
  newField.append(cranApple);
  newField.append(orangePineapple);
  newField.append(berry);
  newField.append(filler2);
  newField.append(appleCF);
  newField.append(whiteGrapeCF);
  newField.append(peachMangoCF);
  newField.append(orangeRaspberryCF);
  newField.append(cherryCF);
  newField.append(tangerineCF);
  newField.append(fruitPunchCF);
  newField.append(filler3);
  newField.append(mixPitcher);

  juiceField.appendChild(document.createElement("br"))
  juiceField.appendChild(label1);
  juiceField.appendChild(newField);
  juiceField.appendChild(label2);
  juiceField.appendChild(quantity);

}
