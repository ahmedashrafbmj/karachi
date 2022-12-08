import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function BasicExample() {
  return (
    <div class="row">
   <div  style={{display:"flex",justifyContent:"space-between",textAlign:"center",flexWrap:"wrap",alignItems:"center"}}>
     <Card style={{ width: '10rem',background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img style={{height:"120px",minHeight:"120px"}} variant="top"  src="https://teachers-crew.web.app/images/achi%20wali.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
       
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
       
        <Button style={{cooor:"#02625a"}}>Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.slowfood.com/wp-content/uploads/2020/10/wet-market-dhaka-1.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszwnMUxPm2K7woiXDDGHywUtw5YcFNjN0r2fGoD1Lsw&s" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-2-56-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://zameen-strapi-live.s3.eu-west-1.amazonaws.com/medium_federal_b_area5_2f2517eb59.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="http://pakistaniat.com/images/sgflyover2.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', background:"black", color:"white",marginTop:"10px" }}>
      <Card.Img variant="top" style={{height:"120px"}}  src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-3-48-1-1024x640.jpg" />
      <Card.Body>
        <Card.Title>Kharadar</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="success">Show Markets</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
   
  );
}

export default BasicExample;