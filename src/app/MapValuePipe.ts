import { Pipe, PipeTransform } from "@angular/core";
@Pipe({name:"mapValue"})
export class MapValuePipe implements PipeTransform{
    transform(map:any, key: any) :any{
       return map.get(key);
    }
    
}