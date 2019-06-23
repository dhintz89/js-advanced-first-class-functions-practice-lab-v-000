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
  let driversCopy = arr;
  driversCopy.sort(function compare(a,b){
      if(a.revenue > b.revenue) {
        return 1;
      } else if (a.revenue < b.revenue) {
        return -1;
      } else {
        return 0;
      }
  });
  return driversCopy;
}

// function driversByName(arr) {
//   const sortedList = arr.sort(function compare(a,b) {
//     a.name.localeCompare(b.name);
//   });
//   return sortedList;
// }
