/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum DaysOfWeek {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THUSDAY = "thusday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

const isWeekend: any = (day: string): boolean => {
  if (
    day === DaysOfWeek.SATURDAY ||
    day === DaysOfWeek.SUNDAY
  ) {
    return true;
  } else {
    return false;
  }
};
