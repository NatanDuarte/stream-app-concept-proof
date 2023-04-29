const NodeMediaServer = require('node-media-server');
const express = require('express');
const path = require('path');

const app = express();

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    mediaroot: './data',
    allow_origin: '*'
  },
  trans: {
    ffmpeg: 'C:\\Program Files\\ffmpeg\\bin\\ffmpeg.exe',
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  }
};

const nms = new NodeMediaServer(config);
nms.run();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
});

port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
