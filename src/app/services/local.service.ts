import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    console.log(key, value);
  }

  public getData(key: string): any | null {
    let data: any = localStorage.getItem(key);
    if (data !== null) return JSON.parse(data);
    return null;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
