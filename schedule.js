var schedule= [
   {
      day: 'Пн',
      startTime: 0,
      endTime : 18
    },
   {
      day: 'Вт',
      startTime: 0,
      endTime : 18
    },
   {
      day: 'Ср',
      startTime: 0,
      endTime : 18
    },
    {
      day: 'Чт',
      startTime: 0,
      endTime : 18
    },
    {
      day: 'Пт',
      startTime: 0,
      endTime : 18
    },
    {
      day: 'Сб',
      startTime: 0,
      endTime : 18
    },
    {
      day: 'Вс',
      startTime: 1,
      endTime : 18
    }
];

//создаем отдельные массивы с временем начала и конца, днями недели
var ArrayStartTime = schedule.map(a => a.startTime)
var ArrayEndTime = schedule.map(b => b.endTime)
var ArrayDays = schedule.map(c => c.day)

//проверка на то что все дни с одинаковым временем
var MondayStartTime = ArrayStartTime[0]
var MondayEndTime = ArrayEndTime[0]
var SundayStartTime = ArrayStartTime[6]
var SundayEndTime = ArrayEndTime[6]

function equallyStartTime(number) {
  return number == MondayStartTime;
}

function equallyEndTime(number) {
  return number == MondayEndTime;
}

//проверка на то что сб одинакова с буднями а вс нет
if (ArrayStartTime.every(equallyStartTime) && ArrayEndTime.every(equallyEndTime)==true)
  {
  console.log ('Пн-Вс: ' +  MondayStartTime + "-" + MondayEndTime)
  }
else {
  delete ArrayStartTime[6]
  delete ArrayEndTime[6]

  if ((ArrayStartTime.every(equallyStartTime) && ArrayEndTime.every(equallyEndTime)==true))
    {
    console.log ('Пн-Сб: ' +  MondayStartTime + "-" + MondayEndTime);
    console.log ('ВС: ' + SundayStartTime + '-' + SundayEndTime)
    }
  else {
    //отдельно рассматриваем пн-пт
    var count = 1;
    var n = 0;
    var len = ArrayStartTime.length-2;

    for (var j=0; j<len; j++) {
      n=n+1;
      for (var i=n; i<len; i++) {
        if ((ArrayStartTime[i]==ArrayStartTime[j]) && (ArrayEndTime[i]==ArrayEndTime[j]))
        {
          count++;
          k=i;
        }
      }

      if (count>=3)
      {
        console.log(ArrayDays[j]+'-'+ArrayDays[k]+' : '+ArrayStartTime[j]+'-'+ArrayEndTime[j]);
        if (k!=(len-1))
        {
          while (k!=(len-1)) {
          k=k+1;
          console.log(ArrayDays[k]+' : '+ArrayStartTime[k]+'-'+ArrayEndTime[k]);
          }
        }
        break;
      }
      else {
        console.log(ArrayDays[j]+' : '+ArrayStartTime[j]+'-'+ArrayEndTime[j]);
      }
    }

    //отдельно рассматриваем сб-вс
    if ((SundayStartTime == ArrayStartTime[5]) && (SundayEndTime == ArrayEndTime[5])) {
      console.log(ArrayDays[5]+ ' - ' + ArrayDays[6]+' : '+ SundayStartTime +'-'+ SundayEndTime);
    }
    else {
      console.log(ArrayDays[5]+ ' : '+ ArrayStartTime[5] +'-'+ ArrayEndTime[5]);
      console.log(ArrayDays[6]+ ' : '+ SundayStartTime +'-'+ SundayEndTime);
    }
    }
  };

