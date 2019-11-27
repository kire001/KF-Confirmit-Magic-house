class waveTest {

  static function testWaves(table,report) {
    var wave = [];
    for (var i in Config.Wave.Codes) {
      ConfirmitClass.lg.LogDebug("iiiicko " + i);
      ConfirmitClass.lg.LogDebug("iiiicko " +Config.Wave.Codes[i]);
      if (Config.Wave.Codes[i] != "") {
        wave.push(Config.Wave.Codes[i])
      }
    }
      var X = [], Y = [];
      //  X.push ('Wave{totals:false; title:true}');
            X.push ('[N]');

    for (var i = 0; i < wave.length; i++) {
      ConfirmitClass.lg.LogDebug("to je vonooo " + wave[i]);
      var expression = String('Wave = "' + wave[i] + '"')
        ConfirmitClass.lg.LogDebug("Striiiing " + expression);
      Y.push ('[SEGMENT]{label:"'+ wave[i] +'"; expression:' + report.TableUtils.EncodeJsString(expression) + '}');
    }
  Y.push ('[SEGMENT]{label:"tests"}');
  //Y.push ('[SEGMENT]{label:"tests2"; expression:' + report.TableUtils.EncodeJsString('Wave = "2016"') + '}');
    var x = X.join('');
    var y = Y.join('+');

      var expr = [y, x].join('^');
      table.AddHeaders(report, 'ds0', expr);

      var datapoints =  table.GetColumnValues(table,0)
      var k;
    ConfirmitClass.lg.LogDebug("pocet hodnot ve sloupci: " + datapoints.length);
      for (var k = 0; k < datapoints.length; k++)
    ConfirmitClass.lg.LogDebug(datapoints[k])
      }
    }
