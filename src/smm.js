function ensureString(variable) {
    if (typeof variable === 'string') {
      // If it's already a string, return it as is
      return variable;
    } else {
      // If it's not a string, convert it to a string
      return String(variable);
    }
  }