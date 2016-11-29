var createRow = function(treant) {
  var h = treant.h;
  return function(database) {
    return (
      h('tr', {key: database.dbname}, [
        h('td', {className:'dbname'}, [database.dbname]),
        h('td', {className:'query-count'}, [
          h('span', {className:database.lastSample.countClassName + ''}, [
            database.lastSample.nbQueries + ''
          ])
        ])
      ].concat(
        database.lastSample.topFiveQueries.map(function(query) {
          return (
            h('td', {className:'Query ' + query.elapsedClassName}, [
              query.formatElapsed + '',
              h('div', {className: 'popover left'}, [
                h('div', {className: 'popover-content'}, [
                  query.query + ''
                ]),
                h('div', {className: 'arrow'})
              ])
            ])
          );
        })
      ))
    );
  };
};

var createTable = function(treant) {
  var h = treant.h;
  var Row = createRow(treant);

  return (props) => {
    var databases = props.databases;
    return (
      h('div', {}, [
        h('table', {className: 'table table-striped latest-data'}, [
          h('tbody', {}, databases.map(Row))
        ])
      ])
    );
  };
};
