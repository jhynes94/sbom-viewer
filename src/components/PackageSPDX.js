import React from 'react';
import Card from 'react-bootstrap/Card';

const SPDXPackage = ({ data }) => {
  return (
    <div className="album py-5 bg-body-tertiary" >
      <div className="container" >

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
          <Card>
            <Card.Header as="h2">{data.name}</Card.Header>
            <Card.Body>
              <Card.Text>SPDX ID: {data.SPDXID}</Card.Text>
              <Card.Text>Version: {data.versionInfo}</Card.Text>
              <Card.Text>Download Location: {data.downloadLocation}</Card.Text>
              <Card.Text>Checksum: {data.checksums[0].checksumValue}</Card.Text>
              <Card.Text>Homepage: {data.homepage}</Card.Text>
              <Card.Text>License: {data.licenseDeclared}</Card.Text>
              <Card.Text>External Reference: {data.externalRefs[0].referenceLocator}</Card.Text>
              <Card.Text>Supplier: {data.supplier}</Card.Text>
              <Card.Text>Originator: {data.originator}</Card.Text>
              <Card.Text>Primary Package Purpose: {data.primaryPackagePurpose}</Card.Text>
              <Card.Text>Files Analyzed: {data.filesAnalyzed ? 'Yes' : 'No'}</Card.Text>
            </Card.Body>
          </Card>
        </div >
      </div >
    </div >
  );
};

export default SPDXPackage;
