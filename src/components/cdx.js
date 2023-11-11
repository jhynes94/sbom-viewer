import Card from 'react-bootstrap/Card';

function CDX({ data }) {
  return (
    <div>
      {data.components.map((item, index) => (
        <Card key={index} style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle>{item.type}</Card.Subtitle>
            <Card.Text>Version: {item.version}</Card.Text>
            <Card.Text>Public URL: {item.purl}</Card.Text>
            <Card.Text>Public URL: {item.purl}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

let a = {
  "bom-ref": "pkg:conan/jbig@20160605",
  "hashes": [
    {
      "alg": "MD5",
      "content": "2d29fa02aacd76902e0d2cbbc24631ef"
    }
  ],
  "licenses": [
    {
      "license": {
        "id": "GPL-2.0"
      }
    }
  ],
  "externalReferences": [
    {
      "url": "https://conan.io/center/recipes/jbig?version=20160605",
      "type": "website"
    }
  ]
}

export default CDX;
