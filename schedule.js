const schedule= [
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
      startTime: 8,
      endTime : 18
    },
    {
      day: 'Вс',
      startTime: 8,
      endTime : 18
    }
];

//создаем отдельные массивы с временем начала и конца, днями недели
const ArrayStartTime = schedule.map(a => a.startTime),
    ArrayEndTime = schedule.map(b => b.endTime),
    ArrayDays = schedule.map(c => c.day);

//проверка на то что все дни с одинаковым временем
const StartOfWeek = 0,
      EndOfWeek = 6,
      StartOfWeekend =5,
      MondayStartTime = ArrayStartTime[StartOfWeek],
      MondayEndTime = ArrayEndTime[StartOfWeek],
      SundayStartTime = ArrayStartTime[EndOfWeek],
      SundayEndTime = ArrayEndTime[EndOfWeek];

let equallyStartTime = number => (number === MondayStartTime)
                                  ? true : false;

let equallyEndTime = number => (number === MondayEndTime)
                                  ? true : false;

//проверка на то что сб одинакова с буднями а вс нет
if (ArrayStartTime.every(equallyStartTime) && ArrayEndTime.every(equallyEndTime)===true ) {
  console.log (ArrayDays[StartOfWeek] + '-' + ArrayDays[EndOfWeek] + ':' +  MondayStartTime + "-" + MondayEndTime)
}
else {
  delete ArrayStartTime[EndOfWeek]
  delete ArrayEndTime[EndOfWeek]
  console.log (ArrayStartTime);

  if ((ArrayStartTime.every(equallyStartTime) && ArrayEndTime.every(equallyEndTime)===true))
    {
    console.log (ArrayDays[StartOfWeek] + '-' + ArrayDays[StartOfWeekend] + ':' +  MondayStartTime + "-" + MondayEndTime);
    console.log (ArrayDays[EndOfWeek] + ':' + SundayStartTime + '-' + SundayEndTime)
    }
  else {
    //отдельно рассматриваем пн-пт
    const LengthArray = ArrayStartTime.length-2;
    for (let j = 0; j < LengthArray; j++) {
      let count = 1;
      let NextEl = 0;
      NextEl = NextEl + 1;
      for (let i = NextEl; i < LengthArray; i++) {
        if ((ArrayStartTime[i]===ArrayStartTime[j]) && (ArrayEndTime[i]===ArrayEndTime[j]))
        {
          count++;
          LastEqualEl=i;
        }
      }

      if (count>=3)
      {
        console.log(ArrayDays[j]+'-'+ArrayDays[LastEqualEl]+' : '+ArrayStartTime[j]+'-'+ArrayEndTime[j]);
        if (LastEqualEl!=(LengthArray-1))
        {
          while (LastEqualEl!=(LengthArray-1)) {
          LastEqualEl=LastEqualEl+1;
          console.log(ArrayDays[LastEqualEl]+' : '+ArrayStartTime[LastEqualEl]+'-'+ArrayEndTime[LastEqualEl]);
          }
        }
        break;
      }
      else {
        console.log(ArrayDays[j]+' : '+ArrayStartTime[j]+'-'+ArrayEndTime[j]);
      }
    }

    //отдельно рассматриваем сб-вс
    ((SundayStartTime === ArrayStartTime[StartOfWeekend]) && (SundayEndTime === ArrayEndTime[StartOfWeekend]))
      ? console.log(ArrayDays[StartOfWeekend] + ' - ' + ArrayDays[EndOfWeek]+' : '+ SundayStartTime +'-'+ SundayEndTime)
      : ( console.log(ArrayDays[StartOfWeekend] + ' : '+ ArrayStartTime[StartOfWeekend] +'-'+ ArrayEndTime[StartOfWeekend]),
          console.log(ArrayDays[EndOfWeek] + ' : '+ SundayStartTime +'-'+ SundayEndTime))

    }
  };

