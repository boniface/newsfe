import startOfWeek from 'date-fns/startOfWeek';
import {lastDayOfWeek} from 'date-fns';

export class AppDates {
  public static today(): Date {
    const today = new Date();
    return today;
  }

  public static yesterday(): Date {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 2));
    return yesterday;
  }

  public static thisWeek(): Date {
    const today = new Date();
    const sunday = startOfWeek(today);
    return sunday;
  }

  public static lastWeek(): Date {
    const today = new Date();
    console.log(lastDayOfWeek(today[-6]));
    return today;

  }

  public static thisMonth(): Date {
    const thisMonth = new Date();
    console.log('Month: ' + thisMonth.getMonth());
    return thisMonth;
  }

  public static lastMonth(): Date {
    const lastMonth = new Date();
    console.log(lastMonth.getMonth() - 2);
    return lastMonth;
  }
}
