import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform{
    transform(data : Date) : string {
        return moment(data).fromNow();
    }
}