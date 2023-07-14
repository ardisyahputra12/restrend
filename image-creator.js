const fs = require('fs');
const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const FFmpeg = require('fluent-ffmpeg');
const sharp = require('sharp');
// eslint-disable-next-line import/no-unresolved
const imagemin = require('imagemin-cjs/cjs');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

FFmpeg.setFfmpegPath(ffmpegPath);
const gify = (image) => new FFmpeg({
  source: path.resolve(__dirname, `${target}/${image}`),
});

const createWebm = (image) => gify(image)
  .clone()
  .withFps(15)
  .toFormat('webm')
  .saveToFile(path.resolve(
    __dirname,
    `${destination}/${image.split('.').slice(0, -1).join('.')}.webm`,
  ));

const createMp4 = (image) => gify(image)
  .clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(
    __dirname,
    `${destination}/${image.split('.').slice(0, -1).join('.')}.mp4`,
  ));

const createLargeImage = (image) => sharp(`${target}/${image}`)
  .resize(800)
  .toFile(path.resolve(
    __dirname,
    `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
  ));

const createLargeImageWebp = (image) => sharp(`${target}/${image}`)
  .resize(800)
  .toFormat('webp')
  .toFile(path.resolve(
    __dirname,
    `${destination}/${image.split('.').slice(0, -1).join('.')}-large.webp`,
  ));

const createSmallImage = (image) => sharp(`${target}/${image}`)
  .resize(480)
  .toFile(path.resolve(
    __dirname,
    `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
  ));

const createSmallImageWebp = (image) => sharp(`${target}/${image}`)
  .resize(480)
  .toFormat('webp')
  .toFile(path.resolve(
    __dirname,
    `${destination}/${image.split('.').slice(0, -1).join('.')}-small.webp`,
  ));

const compressImage = async () => {
  await imagemin([`${destination}/*.{jpg,png}`], {
    destination,
    plugins: [
      imageminMozjpeg({
        quality: 50,
        progressive: true,
      }),
      imageminPngquant({
        quality: [0.4, 0.6],
      }),
      imageminWebp({
        quality: 50,
      }),
    ],
  });
};

const createImage = (image) => {
  const extention = image.split('.').slice(1).join('.');
  switch (extention) {
    case 'gif':
      createWebm(image);
      createMp4(image);
      break;
    case 'jpg':
      createLargeImage(image);
      createLargeImageWebp(image);
      createSmallImage(image);
      createSmallImageWebp(image);
      break;
    default:
      break;
  }
};

fs.readdirSync(target)
  .forEach((image) => createImage(image));

compressImage();
