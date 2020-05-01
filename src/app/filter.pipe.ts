import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './interfaces/task';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Task[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.taskTitle.toLowerCase().includes(searchText);
        });
    }
}