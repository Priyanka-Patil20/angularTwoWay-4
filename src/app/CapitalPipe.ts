import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "Capitalpipe" })
export class CapitalPipe implements PipeTransform {
  transform(value: string): string {
    return;
  }
}
