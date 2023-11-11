import React, { useState } from 'react';
import ViewerSBOM from '../components/ViewerSBOM';
import Uploader from '../components/Uploader';

import Card from 'react-bootstrap/Card';

function Home() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <Uploader setFile={setFile} />
      {file && (
        <div>
<div class="container">

          <Card>
          <Card.Body>
            <Card.Title>File Details</Card.Title>
            <Card.Subtitle>Type: {file.header.type}</Card.Subtitle>
            <Card.Text>Size: file.header.size}</Card.Text>
            </Card.Body>
            </Card>
            </div>
          <ViewerSBOM file={file} />

        </div>
      )}

    </div>
  );
}

//{file && <SBOM sbom={data} />}

export default Home;
