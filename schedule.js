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
      startTime: 1,
      endTime : 18
    },
    {
      day: 'Вс',
      startTime: 1,
      endTime : 18
    }
];

//создаем отдельные массивы с временем начала и конца, днями недели
var ArrayStartTime = schedule.map(a => a.startTime),
    ArrayEndTime = schedule.map(b => b.endTime),
    ArrayDays = schedule.map(c => c.day);

//проверка на то что все дни с одинаковым временем
const StartOfWeekend = 0,
      EndOfWeekend = 6,
      PenultOfWeekend =5,
      MondayStartTime = ArrayStartTime[StartOfWeekend],
      MondayEndTime = ArrayEndTime[StartOfWeekend],
      SundayStartTime = ArrayStartTime[EndOfWeekend],
      SundayEndTime = ArrayEndTime[EndOfWeekend];

var equallyStartTime = number => (number == MondayStartTime)
                                  ? true : false;

var equallyEndTime = number => (number == MondayEndTime)
                                  ? true : false;

//проверка на то что сб одинакова с буднями а вс нет
if (ArrayStartTime.every(equallyStartTime) && ArrayEndTime.every(equallyEndTime)==true)
  {
  console.log ('Пн-Вс: ' +  MondayStartTime + "-" + MondayEndTime)
  }
else {
  delete ArrayStartTime[EndOfWeekend]
  delete ArrayEndTime[EndOfWeekend]

  if ((ArrayStartTime.every(equallyStartTime) && ArrayEndTime.every(equallyEndTime)==true))
    {
    console.log ('Пн-Сб: ' +  MondayStartTime + "-" + MondayEndTime);
    console.log ('ВС: ' + SundayStartTime + '-' + SundayEndTime)
    }
  else {
    //отдельно рассматриваем пн-пт
    const len = ArrayStartTime.length-2;
    for (let j=0; j<len; j++) {
      let count = 1;
      let n = 0;
      n=n+1;
      for (let i=n; i<len; i++) {
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
    if ((SundayStartTime == ArrayStartTime[PenultOfWeekend]) && (SundayEndTime == ArrayEndTime[PenultOfWeekend])) {
      console.log(ArrayDays[PenultOfWeekend]+ ' - ' + ArrayDays[EndOfWeekend]+' : '+ SundayStartTime +'-'+ SundayEndTime);
    }
    else {
      console.log(ArrayDays[PenultOfWeekend]+ ' : '+ ArrayStartTime[PenultOfWeekend] +'-'+ ArrayEndTime[PenultOfWeekend]);
      console.log(ArrayDays[EndOfWeekend]+ ' : '+ SundayStartTime +'-'+ SundayEndTime);
    }
    }
  };

