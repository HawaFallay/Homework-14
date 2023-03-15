module.exports = {
    newDate: (date) => {
        let dt = new Date(date);
        let dtd = dt.getDate() + 1;
        let dtm = dt.getMonth() + 1;
        let dty = dt.getFullYear();
        return dtm + "/" + dtd + "/" + dty;
    },
}