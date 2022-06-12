export function prettyDate(date) {
    if (!date) return '';
    const D = new Date(date)
    return D.getDate().toString().padStart(2, '0') + '.' +
            (D.getMonth() + 1).toString().padStart(2, '0') + '.' +
            D.getFullYear();
}

export function sortDocs(docs, key, ascend) {
    if (key === 'date') {
        return docs.sort((a,b) => {
            const dateA = a.date;
            const dateB = b.date;
            if (dateA < dateB) return (ascend && -1) || 1;
            if (dateA > dateB) return (ascend && 1) || -1;
            return 0;
        });
    } else if (key === 'name') {
        return docs.sort((a,b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return (ascend && -1) || 1;
            if (nameA > nameB) return (ascend && 1) || -1;
            return 0;
        })
    } else {
        return docs;
    }
    
}

export function prettyRole(role) {
    return role.split('_').pop();
}