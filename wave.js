class waveTest {

  static  function testWaves1(table, report) {
    var wave = [];
    wave = getTrendIDs();
    /*for (var i in Config.Wave.Codes) {
      ConfirmitClass.lg.LogDebug("iiiicko " + i);
      ConfirmitClass.lg.LogDebug("iiiicko " + Config.Wave.Codes[i]);
      if (Config.Wave.Codes[i] != "") {
        wave.push(Config.Wave.Codes[i])
      }
    }*/
    var X = [],
      Y = [];
    //  X.push ('Wave{totals:false; title:true}');
    X.push('[N]');

    for (var i = 0; i < wave.length; i++) {
      ConfirmitClass.lg.LogDebug("to je vonooo " + wave[i]);
      var expression = String('Wave = "' + wave[i] + '"')
      ConfirmitClass.lg.LogDebug("Striiiing " + expression);
      Y.push('[SEGMENT]{label:"' + wave[i] + '"; expression:' + report.TableUtils.EncodeJsString(expression) + '}');
    }
    Y.push('[SEGMENT]{label:"tests"}');
    //Y.push ('[SEGMENT]{label:"tests2"; expression:' + report.TableUtils.EncodeJsString('Wave = "2016"') + '}');
    var x = X.join('');
    var y = Y.join('+');

    var expr = [y, x].join('^');
    table.AddHeaders(report, 'ds0', expr);
    ConfirmitClass.lg.LogDebug("tabulka vytvorena " + table.Name);

    //-----------------------------------------------------------------------
    //var headers = table.ColumnHeaders;
    //var rows= table.RowHeaders;
    //
    //ConfirmitClass.lg.LogDebug("hodnota v 1-1: " + table.GetContentCellValue(1,1));


  }

  static  function testWaves2(report) {
    var wave=[];
    var errorLog;
    //  ConfirmitClass.lg.LogDebug("1111111111111");
    //var values = report.TableUtils.GetColumnValues('rr_overall:ResponseRate',1);
    ConfirmitClass.lg.LogDebug("start testWaves2 script");

    var waveValues = report.TableUtils.GetColumnValues('tester:myTable', 1);
    ConfirmitClass.lg.LogDebug("get columns finished");


    var k;
    wave=getTrendIDs();
    ConfirmitClass.lg.LogDebug("pocet hodnot ve sloupci: " + waveValues.length);
    for (var k = 0; k < waveValues.length; k++) {
      if(waveValues[k].Value==0){
        if (errorLog != undefined) {
          errorLog=errorLog + ", "
        }
        errorLog=errorLog + "Wave "


      }
    }

    if (errorLog != undefined) {
      errorLog=errorLog + " waves does not conatain any data."
    }
  return errorLog;
  }

  static function getTrendIDs(){
    var wave=[];
    for (var i in Config.Wave.Codes) {
      if (Config.Wave.Codes[i] != "") {
        wave.push(Config.Wave.Codes[i])
      }

    }
    return wave;
  }

}
