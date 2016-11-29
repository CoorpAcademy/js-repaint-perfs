var Table = createTable(Treant);
var update = TreantEngineVirtualDom.render(document.getElementById('dbmon'));

var loop = function () {
  update(Table({
    databases: ENV.generateData().toArray()
  }));
  Monitoring.renderRate.ping();
  setTimeout(loop, ENV.timeout);
};

loop();