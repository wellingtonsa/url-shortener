import {
  URL, IBar, ICalendar, Click,
} from 'constants/types';
import moment from 'moment';

export function toBar(urls: URL[]):IBar[] {
  let data:IBar[] = [];

  const theend = moment(new Date()).format('YYYY-MM-DD');
  let start = moment(theend).subtract(1, 'month').format('YYYY-MM-DD');

  while (moment(start).isSameOrBefore(moment(theend))) {
    const date = moment(start).format('MM-DD');

    const clicks = urls
      .map((url) => url.clicks)
      .flat()
      .filter((click:Click) => moment(click.createdAt).format('MM-DD') === date).length;
    data = [
      ...data,
      {
        label: date,
        value: clicks,
      },
    ];
    start = moment(start).add(1, 'day').format('YYYY-MM-DD');
  }

  return data;
}


export function toCalendar(urls: URL[]):ICalendar[] {
  let data:ICalendar[] = [];

  const theend = moment(new Date()).format('YYYY-MM-DD');
  let start = moment(theend).subtract(1, 'month').format('YYYY-MM-DD');

  while (moment(start).isSameOrBefore(moment(theend))) {
    const date = moment(start).format('YYYY-MM-DD');

    const clicks = urls
      .map((url) => url.clicks)
      .flat()
      .filter((click:Click) => moment(click.createdAt).format('YYYY-MM-DD') === date).length;
    data = [
      ...data,
      {
        day: date,
        value: clicks,
      },
    ];
    start = moment(start).add(1, 'day').format('YYYY-MM-DD');
  }

  return data;
}
