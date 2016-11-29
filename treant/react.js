var Table = createTable(Treant);
var update = TreantEngineReact.render(document.getElementById('dbmon'));

var loop = function () {
  update(Table({
    databases: ENV.generateData().toArray()
  }));
  Monitoring.renderRate.ping();
  setTimeout(loop, ENV.timeout);
};

loop();