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
      var expression = String('Wave = ' + wave[i])
        ConfirmitClass.lg.LogDebug("Striiiing " + wave[i]);
      Y.push ('[SEGMENT]{label:"'+ wave[i] +'"; expression:' + report.TableUtils.EncodeJsString(expression) + '}');
    }

    var y = Y.join('+');
    var x = X.join('');

      var expr = [y, x].join('^');
      table.AddHeaders(report, 'ds0', expr);
/*


        X.push ('Methodology'{totals:false; title:true}^[N]');
        X.push ('/('+ Xsub.join('') +')')


        var y = Y.join('+');
        var x = X.join('');
        var expr = [y, x].join('^');
        table.AddHeaders(report, 'ds0', expr);*/
      }
    }
