class waveTest{

function testWaves(){
var waveCurrent = Config.Wave.Codes.Current;
var waveTrend1 = Config.Wave.Codes.Previous;
var waveTrend2 = Config.Wave.Codes.Previous2;
var waveTrend3 = Config.Wave.Codes.Previous3;

ConfirmitClass.lg.LogDebug(waveCurrent);
ConfirmitClass.lg.LogDebug(waveTrend1);
ConfirmitClass.lg.LogDebug(waveTrend2);
ConfirmitClass.lg.LogDebug(waveTrend3);
}
}
