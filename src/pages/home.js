import React, { useState } from 'react';
import ViewerSBOM from '../components/ViewerSBOM';
import Uploader from '../components/Uploader';

function Home() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <h1>SBOM Viewer</h1>
      <p>Based on https://app.soos.io/research/packages/CFamily/-/libtiff/</p>
      <Uploader setFile={setFile} />
      {file && (
        <div>
          <h2>File Details:</h2>
          <p>Name: {file.name}</p>
          <p>Type: {file.type}</p>
          <p>Size: {file.size} bytes</p>
          <ViewerSBOM file={file} />
        </div>
      )}

    </div>
  );
}

//{file && <SBOM sbom={data} />}

export default Home;
