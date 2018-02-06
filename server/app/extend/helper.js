exports.ftime = dateTime => {
    let date = new Date(dateTime);
    let year = date.getFullYear();
    let month = parseInt(date.getMonth()+1);
    let day = date.getDate();
    return `${year}-${month}-${day}`;
}