export class AppDates {
  public static today(): Date {
    const today = new Date();
    return today;
  }

  public static yesterday(): Date {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    return yesterday;
  }

  public static thisWeek(): Date {
    const today = new Date();
    return today;
  }

  public static lastWeek(): Date {
    const week = new Date();
    return week;
  }

  public static thisMonth(): Date {
    const thisMonth = new Date();
    console.log('Month: ' + thisMonth.getMonth());
    return thisMonth;
  }

  public static lastMonth(): Date {
    const lastMonth = new Date();
    console.log(lastMonth.getMonth() - 1);
    return lastMonth;
  }
}
