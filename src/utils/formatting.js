/**
 * Takes a number or numerical string and returns a string with commas
 * between each pair of three non-fractional digits.
 * @param {number|string} amount - A number or numerical string
 * @return {string} The amount with commas where appropriate
 */
export const commaFormatted = (amount) => {
  if (amount === undefined || amount === null) {
    return '0'
  }
  var delimiter = ',' // replace comma if desired
  amount = amount.toString()
  var i = amount
  var d = null
  if (amount.indexOf('.') > -1) {
    var a = amount.split('.', 2)
    d = a[1]
    i = parseInt(a[0])
  }
  if (isNaN(i)) {
    return ''
  }
  var minus = ''
  if (i < 0) {
    minus = '-'
  }
  i = Math.abs(i)
  var n = i.toString()
  a = []
  while (n.length > 3) {
    var nn = n.substr(n.length - 3)
    a.unshift(nn)
    n = n.substr(0, n.length - 3)
  }
  if (n.length > 0) {
    a.unshift(n)
  }
  n = a.join(delimiter)
  if (d === null) {
    amount = n
  } else if (d.length < 1) {
    amount = n
  } else {
    amount = n + '.' + d
  }
  amount = minus + amount
  return amount
}

/**
 * Takes a number or numerical string and returns a string with two decimal places.
 * @param {number|string} amount - A number or numerical string
 * @return {string} The amount with exactly two decimal places (rounded or appended)
 */
export const currencyFormatted = (amount) => {
  if (amount === undefined || amount === null) {
    return '0.00'
  }
  var i = parseFloat(amount)
  if (isNaN(i)) {
    i = 0.0
  }
  var minus = ''
  if (i < 0) {
    minus = '-'
  }
  i = Math.abs(i)
  i = parseInt((i + 0.005) * 100)
  i = i / 100
  var s = i.toString()
  if (s.indexOf('.') < 0) {
    s += '.00'
  }
  if (s.indexOf('.') === s.length - 2) {
    s += '0'
  }
  s = minus + s
  return s
}

export const formatImg = (sharpNode) => {
  if (
    sharpNode &&
    sharpNode.childImageSharp &&
    sharpNode.childImageSharp.gatsbyImageData.backgroundColor
  ) {
    delete sharpNode.childImageSharp.gatsbyImageData.backgroundColor
  }
  return sharpNode
}
