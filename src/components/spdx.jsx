import React from 'react';
import Card from 'react-bootstrap/Card';

// <div>
//     <p>SPDX ID: {data.SPDXID}</p>
//     <p>spdxVersion: {data.spdxVersion}</p>
//     <p>dataLicense: {data.dataLicense}</p>
//     <p>name: {data.name}</p>
//     <p>documentNamespace: {data.documentNamespace}</p>
//     <p>comment: {data.comment}</p>
//     <p>creationInfo:</p>
//     <ul>
//         <li>created: {data.creationInfo.created}</li>
//         <li>creators:</li>
//         <ul>
//             {data.creationInfo.creators.map((creator, index) => (
//                 <li key={index}>{creator}</li>
//             ))}
//         </ul>
//         <li>comment: {data.creationInfo.comment}</li>
//         <li>licenseListVersion: {data.creationInfo.licenseListVersion}</li>
//     </ul>
// </div>

function spdx({ data }) {
    return (
        <div className="album py-5 bg-body-tertiary" >
            <div className="container" >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                    <Card>
                        <Card.Header as="h2">{data.name}</Card.Header>
                        <Card.Header>SPDX ID: {data.SPDXID}</Card.Header>
                        <Card.Header>Version: {data.spdxVersion}</Card.Header>
                        <Card.Header>License: {data.dataLicense}</Card.Header>
                        <Card.Body>
                            <Card.Text>SPDX ID: {data.SPDXID}</Card.Text>
                            <Card.Text>Version: {data.spdxVersion}</Card.Text>
                            <Card.Text>License: {data.dataLicense}</Card.Text>
                            <Card.Text>Checksum: {/*data.checksums[0].checksumValue */}</Card.Text>
                            <Card.Text>Homepage: {/*data.homepage*/}</Card.Text>
                            {/* <Card.Text>Document Namespace: {data.documentNamespace}</Card.Text>
                            <Card.Text>External Reference: {data.externalRefs[0].referenceLocator}</Card.Text>
                            <Card.Text>Supplier: {data.supplier}</Card.Text>
                            <Card.Text>Originator: {data.originator}</Card.Text>
                            <Card.Text>Primary Package Purpose: {data.primaryPackagePurpose}</Card.Text>
                            <Card.Text>Files Analyzed: {data.filesAnalyzed ? 'Yes' : 'No'}</Card.Text> */}
                        </Card.Body>
                    </Card>
                </div >
            </div >
        </div >
    );
}

export default spdx;
