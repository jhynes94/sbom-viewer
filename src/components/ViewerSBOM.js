
import React, { useState, useEffect } from 'react';
import SPDX from './spdx';
import CDX from './cdx';

function ViewerSBOM({ file }) {
  let fileType = null;

  if (file) {
    console.log("SBOM data:")
    console.log(file.data)
    let temp = file.header.name.split('.');
    console.log(temp)
    if (temp.includes("spdx")) {
      fileType = "spdx";
    } else if (temp.includes("cdx")) {
      fileType = "cdx";
    } else {
      console.error(`Unsupported SBOM format.`);
    }
  }

  return (
    <div>
      <div className="album py-4 px-3 bg-body-tertiary">
        <div className="container">
          <div className="row">
            {fileType === "cdx" ? <CDX data={file.data} /> : <SPDX data={file.data} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewerSBOM;
