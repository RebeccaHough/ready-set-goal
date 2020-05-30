export default interface Schedule {
    strategy: "duration" | "interval" | "date" | "none";
    schedule: {
        //Duration-based
        duration: "long-term" | "short-term" | "year" | "month" | "week" | "day"
    } | {
        //Interval-based; e.g. 'every month'
        //day and month differ in that every month will add ~30 days to start date, whereas day will always be that day 
        //(unless the month is too short, in which case it will be the closest day still in that month)
        interval: "year" | "month" | "week";
        day: number
    } | {
        //Date-based
        hasTime: boolean; //i.e. is it all-day?;
        date: Date; 
    } | 
    null //Not time-limited
}