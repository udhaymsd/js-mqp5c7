const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));

(function (a) {
  return a + 100;
});


(function (a, b) {
  return a + b + 100;
});

(a,b) => a + b + 100;

let show = function() {
  console.log('Anonymous function');
};

et sum = (a, b) => {  
  let result = a + b;
  return result;
};

alert( sum(1, 2) 