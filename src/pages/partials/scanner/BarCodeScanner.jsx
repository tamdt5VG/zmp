import React, { useEffect, useState } from "react";
import {Html5QrcodeScanner} from "html5-qrcode";

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

export default () => {
 
    useEffect(() => {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { qrbox: {width: 200, height: 200},
          rememberLastUsedCamera: true,
          showTorchButtonIfSupported: true,
        },);

          html5QrcodeScanner.render(onScanSuccess);
      }
    ,[])

  return (
    <>
        <div id="reader" width="600px"></div>
    </>
  );
}

