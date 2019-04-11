export class CronEntity {
    cronType: String;
    dailyFrq: DailyFre;
    weeklyFrq: WeeklyFre;
    monthlyFrq: MonthlyFre;
    customFrq: CustomFre;
}

export class DailyFre{
    hour: number;
    min: number;
    sec: number;
}

export class WeeklyFre {
    weekDay: String;
    hour: number;
    min: number;
    sec: number;
}

export class MonthlyFre {
    date: number;
    hour: number;
    min: number;
    sec: number;
}

export class CustomFre {
    customDate: Date;
    hour: number;
    min: number;
    sec: number;
}