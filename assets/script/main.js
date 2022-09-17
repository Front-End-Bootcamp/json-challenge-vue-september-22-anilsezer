import data from "../Data/data.json" assert {type: "json"};

  const groups = data.reduce((groups, item) => {
    const group = (groups[item.group] || []);
    group.push(item);
    groups[item.group] = group;
    return groups;
  }, {});
  
  console.log(groups);

//   Source
//   https://stackoverflow.com/questions/21776389/javascript-object-grouping 