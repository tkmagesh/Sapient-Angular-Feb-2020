import { Bug } from "../models/Bug";

export class BugOperationsService {
    createNew(bugName : string) : Bug {
        const newBug: Bug = { name: bugName, isClosed: false };
        return newBug;
    }

    toggle(bug : Bug ) : Bug {
        const toggledBug = { ...bug, isClosed : !bug.isClosed};
        return toggledBug;
    }
}