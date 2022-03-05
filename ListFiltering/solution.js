function filter_list(l) {
    const list = l.filter ((n)=> typeof n === 'number' )
    return list;
  }

const result = filter_list([1, 2, "a", "b"]);
console.log(result);
