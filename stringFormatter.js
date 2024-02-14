class StringFormatter {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  toSnakeCase(string) {
    return string.split(' ').join('_').toLowerCase();
  }

  reverseString(string) {
    return string.split('').reverse().join('');
  }
}

module.exports = StringFormatter