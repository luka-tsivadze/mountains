
const dateInputs = document.getElementsByClassName('dateInput');
const result = document.getElementById('result');

for (let i = 0; i < dateInputs.length; i++) {
  dateInputs[i].addEventListener('input', function () {
    const selectedDate = new Date(dateInputs[i].value);
    const year = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth() + 1; // Months are 0-based
    const day = selectedDate.getDate();

    let monthDescription;

    switch (selectedMonth) {
      case 1:
        monthDescription = "January";
        break;
      case 2:
        monthDescription = "February";
        break;
      case 3:
        monthDescription = "March";
        break;
      case 4:
        monthDescription = "April";
        break;
      case 5:
        monthDescription = "May";
        break;
      case 6:
        monthDescription = "June";
        break;
      case 7:
        monthDescription = "July";
        break;
      case 8:
        monthDescription = "August";
        break;
      case 9:
        monthDescription = "September";
        break;
      case 10:
        monthDescription = "October";
        break;
      case 11:
        monthDescription = "November";
        break;
      case 12:
        monthDescription = "December";
        break;
      default:
        monthDescription = "Invalid month";
    }

    const newDateValue = `${year}-${monthDescription}-${day}`;
    dateInputs[i].value = newDateValue;

    result.textContent = newDateValue;
  });
}
let buttons = document.getElementsByClassName('btn');
let activedbtn;

let info=[{
  img:''
  ,
  header:''
  ,
  location:'napal'
  ,
  pricefrom:0
}]
//write popular places information
for (let i of buttons) {



  i.addEventListener('click', function () {
    for (let i of buttons) {
      i.classList.remove('actived')
    }
    i.classList.toggle('actived')
    content(i.textContent)
  })
}

if (activedbtn != null) {
  console.log(activedbtn)
}

function content(clas) {
  switch (clas) {
 // informacia  adgilebis shesaxeb 
    case 'EUROPE':
      info = [{
        img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
        ,
        header:'Everest'
        ,
        location:'napal'
        ,
        pricefrom:800
      },
      {
        img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
        ,
        header:'everest'
        ,
        location:'napal'
        ,
        pricefrom:100
      }
    
    ];

     
      break;

    case 'ASIA':
   
      info = [{
        img:''
        ,
        header:''
        ,
        location:''
        ,
        pricefrom:200
      }];
      break;

    case 'NORTH AMERICA':
 
      info = [{
        img:''
        ,
        header:''
        ,
        location:''
        ,
        pricefrom:300
      }];
      break;

    case 'SOUTH AMERICA':

      info = [{
        img:''
        ,
        header:''
        ,
        location:''
        ,
        pricefrom:400
      }];

      break;

    case 'AFRICA':

      info = [{
        img:''
        ,
        header:''
        ,
        location:''
        ,
        pricefrom:500
      }];
    
      break;

    default:
      info=[{
        img:''
        ,
        header:''
        ,
        location:'napal'
        ,
        pricefrom:50   
  }];


}
updateCards();
}