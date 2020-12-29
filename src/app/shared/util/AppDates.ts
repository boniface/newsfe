import startOfWeek from 'date-fns/startOfWeek';
import {endOfWeek} from 'date-fns';

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
    const sunday = startOfWeek(today);
    return sunday;
  }

  public static lastWeek(): Date {
    const today = new Date();
    const saturday = new Date(today.setDate(today.getDay()));
    return saturday;

  }

  public static thisMonth(): Date {
    const thisMonth = new Date();
    console.log('Month: ' + thisMonth.getMonth());
    return thisMonth;
  }

  public static lastMonth(): Date {
    const today = new Date();
    const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
    return lastMonth;
  }
}
