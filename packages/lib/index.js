function isEmpty(prop) {
  return (
    prop === null ||
    prop === undefined ||
    // eslint-disable-next-line no-prototype-builtins
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  )
}

const defer = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve)
  }, ms)

// TODO: test case
function uniqObj(ary = [], obj = {}) {
  return ary.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
}

// TODO: test case
function extractObj(ary = [], obj = {}) {
  return ary.reduce((acc, key) => ({ ...acc, ...(obj[key] && { [key]: obj[key] }) }), {})
}

module.exports = {
  isEmpty,
  defer,
  uniqObj,
  extractObj,
}
