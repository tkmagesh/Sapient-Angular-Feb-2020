import { Bug } from '../models/Bug';

export class BugStorageService{
    private storage = window.localStorage;
    private currentBugId = 0;

    getAll() : Bug[] {
        let result : Bug[] = [];
        for (let index = 0; index < this.storage.length; index++) {
            const key = this.storage.key(index);
            if (key.startsWith('bug-')){
                const rawData = this.storage.getItem(key),
                    bug = JSON.parse(rawData);
                result.push(bug);
                this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
            }
        }
        return result;
    }
    save(bug : Bug) : Bug {
        if (bug.id === 0){
            bug.id = ++this.currentBugId
        };
        this.storage.setItem('bug-' + bug.id.toString(), JSON.stringify(bug));
        return bug;
    }
    remove(bug : Bug) : void {
        this.storage.removeItem(bug.id.toString());
    }
}