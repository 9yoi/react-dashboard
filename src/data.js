var deals = [];

function create (name, closed, commit, forecast, likely) {
  deals.push({
    name: {
      content: name,
      type: 'String',
    },
    closed: {
      content: closed,
      type: 'Currency', 
    },
    commit: {
      content: commit,
      type: 'Currency', 
    },
    forecast: {
      content: forecast,
      type: 'Currency', 
    },
    likely: {
      content: likely,
      type: 'Currency', 
    }
  });
}

create('John', 100000, 100000, 547090, 550000);
create('Alice', 200000, 10000, 570900, 450000);
create('Peter', 150000, 160000, 587090, 590000);
create('Jane', 300000, 180000, 220090, 600000);
create('Eve', 400000, 120000, 123090, 800000);

export default deals;