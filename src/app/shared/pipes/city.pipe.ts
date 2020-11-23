import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): string {
    let long: string;
    let short: string;

    switch (value) {
      case 'Graz':
        long = 'Flughaften Graz Thalerhof';
        short = 'GRZ';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        long = short = value;
    }

    if (fmt === 'short') {
      return short;
    }

    return long;
  }

}
