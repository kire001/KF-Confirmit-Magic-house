class waveTest {

  static function testWaves(table) {
    var wave = [];
    for (var i in Config.Wave.Codes) {
        ConfirmitClass.lg.LogDebug("iiiicko " +Config.Wave[i]);
      if (Config.Wave[i] != null) {
        wave.push(i)
      }
    }

    for (var i = 0; i < wave.length; i++) {
      ConfirmitClass.lg.LogDebug("to je vonooo " + wave[i]);
    }

/*
        var X = [], Y = [];

        X.push ('Methodology'{totals:false; title:true}^[N]');
        X.push ('/('+ Xsub.join('') +')')


        var y = Y.join('+');
        var x = X.join('');
        var expr = [y, x].join('^');
        table.AddHeaders(report, 'ds0', expr);*/
      }
    }
