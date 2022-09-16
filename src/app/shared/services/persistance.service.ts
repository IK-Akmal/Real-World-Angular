import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {
    set(key: string, data: unknown): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorge', error)
        }
    }

    get(key: string): unknown {
        try {
            return JSON.parse(localStorage.getItem(key) ?? 'null');
        } catch (error) {
            console.error('Error getting data from localStorge', error)
            return null;
        }
    }
}