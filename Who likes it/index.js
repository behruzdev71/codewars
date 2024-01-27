export const likes = str => {
    switch (str.length) {
      case 0:
        return "no one likes this"
      case 1:
        return `${str[0]} likes this`
      case 2:
        return `${str[0]} and ${str[1]} like this`
      case 3:
        return `${str[0]}, ${str[1]} and ${str[2]} like this`
      default:
        return `${str[0]}, ${str[1]} and ${str.length - 2} others like this`
    }
  }
  