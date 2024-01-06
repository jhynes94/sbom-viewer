import React, { useState } from 'react';
import ViewerSBOM from '../components/ViewerSBOM';
import Uploader from '../components/Uploader';

import Card from 'react-bootstrap/Card';

function SBOM() {
  const [file, setFile] = useState(null);

  return (
    <div className="p-5">
      {!file && (<Uploader setFile={setFile} />)}
      {file && (
        <div className="mt-4">
          <div className="container">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>File Details</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type: {file.header.type}</Card.Subtitle>
                <Card.Text>Size: {file.header.size}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <ViewerSBOM file={file} />
        </div>
      )}
    </div>
  );
}

export default SBOM;
