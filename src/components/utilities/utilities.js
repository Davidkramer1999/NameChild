import moment from 'moment';

export const validateSpecialChars = (input) => {
    const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/;
    return !specialCharacters.test(input);
}

export const calculateWeeksDifference = (dateString) => {
    const date = moment(dateString, "DD.MM.YYYY");
    const dateToday = moment();
    return date.diff(dateToday, "weeks");
}
