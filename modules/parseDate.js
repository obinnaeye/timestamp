const moment = require("moment");
const formats = [
        "X",
        "YYYY-MM-D",
        "D-MM-YYYY",
        "MMMM D, YYYY",
        "MMMM D YYYY",
        "MMM D, YYYY",
        "MMM D YYYY",
        "D MMMM YYYY",
        "D MMMM YY",
        "D MMM YYYY",
        "D MMM YY",
    ];
    
const parseDate = function(dateString) {
    const date = moment(dateString, formats, true);
    const result = {
        unix: null,
        natural: null,
    };
    
    if (date.isValid()) {
        result.unix = +date.format("X");
        result.natural = date.format("MMMM D, YYYY");
    }
    
    return result;
};

module.exports = parseDate;