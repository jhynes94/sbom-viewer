
import React, { useState, useEffect } from 'react';
import SPDX from './spdx';
import CDX from './cdx';

function ViewerSBOM({ file }) {
  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    if (file === null) {
      return;
    }

    console.log("SBOM data:")
    console.log(file.data)
    let temp = file.header.name.split('.')
    console.log(temp)

    if (temp.includes("spdx")) {
      setFileType("spdx")
    } else if (temp.includes("cdx")) {
      setFileType("cdx")
    } else {
      console.error(`Unsupported SBOM format.`);
      return;
    }
  }, [file]);

  return (
    <div>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row ">
            {fileType === "cdx" && <CDX data={file.data} />}
            {fileType === "spdx" && <SPDX data={file.data} />}
          </div>
        </div>
      </div>

    </div>
  )

}

export default ViewerSBOM;
