const NodeMediaServer = require('node-media-server');
const express = require('express');
const path = require('path');
require('dotenv').config();

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
    ffmpeg: process.env.FFMPEG_PATH,
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

port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
