# schedule

## Task 2
Теперь тебе приходит другой массив, что будет уже больше походить на реальные условия
Предположим что сервис интернациональный, поэтому дни недели хранятся на английском, а тебе нужно выводить на языке юзера

```
const schedule = [
    {
        day: 'MO',
        startTime: 5,
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
        startTime: 8,
        endTime: 19
    },
    {
        day: 'FR',
        startTime: 0,
        endTime: 18
    },
    {
        day: 'SA',
        startTime: 1,
        endTime: 18
    },
    {
        day: 'SU',
        startTime: 1,
        endTime: 18
    }
];
```

так же тебe приходит язык юзера 

```const language = 'ru' (or 'en')``` 

Тебе нужно вывести полные названия ( Например : Понедельник: 7-18 ( or Monday )
