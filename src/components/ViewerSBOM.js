
import React, { useState, useEffect } from 'react';
import SPDX from './spdx';
import CDX from './cdx';

function ViewerSBOM({ file }) {
  const [type, setType] = useState(null);

  useEffect(() => {
    if (file === null) {
      return;
    }

    console.log("SBOM data:")
    console.log(file.data)
    let temp = file.header.name.split('.')
    console.log(temp)


    if (temp.includes("spdx")) {
      setType("spdx")
    } else if (temp.includes("cdx")) {
      setType("cdx")
    } else {
      console.error(`Unsupported SBOM format.`);
      return;
    }
  }, [file]);

  return (
    <div>
      <h2>SBOM Viewer</h2>
      {type === "cdx" && <CDX data={file.data} />}
      {type === "spdx" && <SPDX data={file.data} />}
    </div>
  )

}

export default ViewerSBOM;
