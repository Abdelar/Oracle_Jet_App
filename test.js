//an exemple of input

const data = "Series1\t21\t67\nSeries2\t39\t45\nSeries3\t62\t17";

// methods of construction

const convert = data =>
  data
    .split("\n")
    .filter(line => line)
    .map(function(ln) {
      return ln.split("\t").filter(cell => cell);
    })
    .filter(row => row !== []);

const construct = array => {
  const data = [];
  array.forEach(element => {
    const entry = { name: element[0] };
    entry.items = element.slice(1);
    data.push(entry);
  });
  return data;
};

const constructGroups = data => {
  const groupsNumbers = convert(data)[0].length;
  const groups = [];
  for (let i = 0; i < groupsNumbers - 1; i++) {
    groups.push("Group " + i);
  }
  return groups;
};

//test

console.log(construct(convert(data)));
console.log(constructGroups(data));

/* execute the command : <node test.js> to see this methods in action.
   Output1:
          [
            { name: 'series1', items: [ '21', '67' ] },
            { name: 'series2', items: [ '39', '45' ] },
            { name: 'series3', items: [ '62', '17' ] } 
          ]

   Output2:
          [ 'Group 0', 'Group 1' ]
*/
