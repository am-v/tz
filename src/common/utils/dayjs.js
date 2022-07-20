import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advanceTz from 'dayjs/plugin/advancedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanceTz);

export const getTimestamp = () => dayjs().valueOf();

export const getDateTime = (
  ts,
  format = 'DD MMMM YYYY LTS',
  tz = undefined,
) => {
  if (tz) {
    return dayjs(ts).tz(tz).format(format);
  }
  return dayjs(ts).format(format);
};

export const getTimezone = () => dayjs.tz.guess();

export default dayjs;
