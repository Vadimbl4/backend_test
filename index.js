// server.js
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;

console.log(path.resolve('./video/12.mp4'));


// Маршрут для отправки видео
app.get('/video/:name', (req, res) => {
    const videoName = req.params.name;
    console.log('videoName',videoName)
    // const videoPath = path.join('./video', videoName); // Путь к видеофайлу
    const videoPath = path.resolve(`./video${videoName}`); // Путь к видеофайлу
    console.log('videoPath',videoPath)
    // console.log('__dirname', __dirname);

    res.sendFile(videoPath, (err) => {
      if (err) {
          console.error(err);
          res.status(err.status).end();
      } else {
          console.log('File sent:', filePath);
      }
  });
    
    // fs.stat(videoPath, (err, stats) => {
    //     if (err) {
    //         return res.status(404).send('Video not found');
    //     }

    //     const range = req.headers.range;
    //     if (!range) {
    //         return res.status(416).send('Requires Range header');
    //     }

    //     const CHUNK_SIZE = 10 ** 6; // 1MB
    //     const start = Number(range.replace(/\D/g, ''));
    //     const end = Math.min(start + CHUNK_SIZE, stats.size - 1);

    //     const contentLength = end - start + 1;
    //     const headers = {
    //         'Content-Range': `bytes ${start}-${end}/${stats.size}`,
    //         'Accept-Ranges': 'bytes',
    //         'Content-Length': contentLength,
    //         'Content-Type': 'video/mp4',
    //     };

    //     res.writeHead(206, headers);
    //     const videoStream = fs.createReadStream(videoPath, { start, end });
    //     videoStream.pipe(res);
    // });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
