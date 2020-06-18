module.exports = {
  succeed,
  fail,
  repair,
  get,
  add
};

function succeed(item) {
  if (item.enhancement >= 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  if (item.enhancement > 16) {
    return { ...item, enhancement: item.enhancement - 1 };
  } else if (item.enhancement >= 15) {
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };n   
  }
}

function repair(item) {
  return { ...item, durability:100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else if (item.enhancement > 0) {
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  }

}

//examples
function add(a,b){
  return (a + b)
}