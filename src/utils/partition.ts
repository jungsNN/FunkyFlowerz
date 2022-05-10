function partition(array: Array<any>, isValid: (inp: any) => boolean) {
  if (!Array.isArray(array)) {
    return isValid(array) ? [[array], []] : [[], [array]];
  }
  return array.reduce(
    ([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]
    },
    [[], []]
  )
}

export default partition
