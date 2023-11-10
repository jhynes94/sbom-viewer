import React, { useState } from 'react';
import ViewerSBOM from '../components/ViewerSBOM';
import Uploader from '../components/Uploader';

function Home() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <Uploader setFile={setFile} />
      {file && (
        <div>
          <h2>File Details:</h2>
          <p>Name: {file.header.name}</p>
          <p>Type: {file.header.type}</p>
          <p>Size: {file.header.size} bytes</p>
          <ViewerSBOM file={file} />
        </div>
      )}

    </div>
  );
}

//{file && <SBOM sbom={data} />}

export default Home;
