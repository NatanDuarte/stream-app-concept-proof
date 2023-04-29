# Prova de conceito - backend streaming

Eu criei este repositório para realizar alguns testes, iniciando uma stream via OBS e capturando os
dados no servidor nodeJS usando `node-media-server`, e mais importante expondo esses dados no frontend.

Na branch main está o exemplo convertendo o `RTMP` para `HLS` e capturando no HTML. No entanto, como ainda
preciso definir qual protocolo pretendo usar, exitem outras branchs com outras tecnologias, indicadas
no próprio nome da branch, exemplo `dash+react`.

## Links úteis

* [testar HLS online](https://hlsjs-dev.video-dev.org/demo/?src=http%3A%2F%2Flocalhost%3A8000%2Flive%2Ftest%2Findex.mpd&demoConfig=eyJlbmFibGVTdHJlYW1pbmciOnRydWUsImF1dG9SZWNvdmVyRXJyb3IiOnRydWUsInN0b3BPblN0YWxsIjpmYWxzZSwiZHVtcGZNUDQiOmZhbHNlLCJsZXZlbENhcHBpbmciOi0xLCJsaW1pdE1ldHJpY3MiOi0xfQ==)

* [testar DASH online](https://reference.dashif.org/dash.js/nightly/samples/dash-if-reference-player/index.html#)
