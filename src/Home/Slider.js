import Carousel from 'react-bootstrap/Carousel';
function Slider() {
  return (
    <div style={{display:"flex"}}>
    <Carousel variant="dark" style={{width:"70%"}}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          height="
          300vh"
          src="/img/1.jpeg"          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        height="
        300vh"
          className="d-block w-100"
          src="/img/2.jpeg"          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        height="
        300vh"
          className="d-block w-100"
          src="/img/3.jpeg"          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <Carousel variant="dark" style={{width:"30%",marginLeft:"30px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          height="
          300vh"
          src="/img/4.jpeg"          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        height="
        300vh"
          className="d-block w-100"
          src="/img/5.jpeg"          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        height="
        300vh"
          className="d-block w-100"
          src="/img/6.jpeg"          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}

export default Slider;