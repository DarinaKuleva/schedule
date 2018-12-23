const schedule = [
    {
        day: 'MO',
        startTime: 1,
        endTime: 18
    },
    {
        day: 'TU',
        startTime: 0,
        endTime: 18
    },
    {
        day: 'WE',
        startTime: 0,
        endTime: 18
    },
    {
        day: 'TH',
        startTime: 0,
        endTime: 18
    },
    {
        day: 'FR',
        startTime: 0,
        endTime: 18
    },
    {
        day: 'SA',
        startTime: 0,
        endTime: 18
    },
    {
        day: 'SU',
        startTime: 0,
        endTime: 19
    }
];

const language = 'ru',
      EnDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      RuDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      StartOfWeek = 0,
      EndOfWeek = 6,
      MondayStartTime = schedule[StartOfWeek].startTime,
      MondayEndTime = schedule[StartOfWeek].endTime,
      SundayStartTime = schedule[EndOfWeek].startTime,
      SundayEndTime = schedule[EndOfWeek].endTime;

if (language === 'ru') {
    var DaysOfWeek = RuDays;
}
else {
    var DaysOfWeek = EnDays;
}
const LengthArray = DaysOfWeek.length-1;
    let NextEl = 0;
    for (let j = 0; j <= LengthArray; j++) {
      let count = 1;

      NextEl = NextEl + 1;
      for (let i = NextEl; i <= LengthArray; i++) {
        if ((schedule[i].startTime === schedule[j].startTime) && (schedule[i].endTime===schedule[j].endTime))
        {
            count ++;
            LastEqualEl=i;
        }
        else {
          break;
        }
      }
      if (count >= 3)
      {
        document.write (`${DaysOfWeek[j]} - ${DaysOfWeek[LastEqualEl]} : ${schedule[j].startTime} - ${schedule[j].endTime} <br>`);
        if (LastEqualEl!=(LengthArray))
        {
          while (LastEqualEl!=(LengthArray)) {
          LastEqualEl=LastEqualEl+1;
          document.write (`${DaysOfWeek[LastEqualEl]} : ${schedule[LastEqualEl].startTime} - ${schedule[LastEqualEl].endTime} <br>`);
          }
        }
        break;
      }
      else {
        document.write (`${DaysOfWeek[j]} : ${schedule[j].startTime} - ${schedule[j].endTime} <br>`);
      }
    }


