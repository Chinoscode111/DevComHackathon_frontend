// install the qr code package npm install qrcode


import * as qrcode from 'qrcode';
import * as fs from 'fs';

const dataToEncode = '';

qrcode.toDataURL(dataToEncode, (err, url) => {
  if (err) {
    console.error(err);
  } else {
    const qrCodeFileName = 'qrCode.png';
    fs.writeFileSync(qrCodeFileName, url);
    console.log(`QR code saved as ${qrCodeFileName}`);
  }
});
