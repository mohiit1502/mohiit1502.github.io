export class Helper {
    getLatestComment(comments) {
        if (comments && comments.length > 0) { return comments[comments.length - 1].body; }
    }

    compareByProperty(property) {
        return function (a, b) {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        };
    }

    clone(obj) {
        if (obj == null || typeof obj !== "object") return obj;
        const copy = Object.assign({}, obj);
        return copy;
    }

    concatenateAndSort(history) {
    // let counter = 1;
        let historyAll = [];
        for (const property in history) {
            if (history.hasOwnProperty(property) && Array.isArray(history[property])) {
                historyAll = historyAll.concat(history[property]);
            }
        }
        historyAll.sort(this.compareByProperty("insertionCounter"));
        return historyAll;
    }
}
