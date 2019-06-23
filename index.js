// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(el) {
    console.log(el.name);
  });
}

function logDriversByHometown(arr, location) {
  arr.forEach(function(el) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  });
}

function driversByRevenue(arr) {
  let driversCopy = arr.slice(0);
  driversCopy.sort(function compare(a,b){
    return a.revenue - b.revenue;
  });
  return driversCopy;
}

function driversByName(arr) {
  let driversCopy = arr.slice(0);
  driversCopy.sort(function compare(a,b) {
    return a.name.localeCompare(b.name);
  });
  return driversCopy;
}

function totalRevenue(arr) {
  arr.reduce(function(acc, cur, i, arr) {
    return 
  });
}