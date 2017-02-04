var deals = [];

function create (name, closed, commit, forecast, likely) {
  deals.push({
    name: name,
    closed: closed,
    commit: commit,
    forecast: forecast,
    likely: likely
  });
}

create ('John', 100000, 1000000, 547090, 550000);
create ('Alice', 200000, 100000, 570900, 450000);
create ('Peter', 150000, 1600000, 587090, 590000);
create ('Jane', 300000, 1800000, 220090, 600000);
create ('Eve', 400000, 1200000, 123090, 800000);

var mock = JSON.stringify(deals);

export default mock;