import Carousel from "react-multi-carousel";
import {Box} from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive,OlaplexData,responsive1 } from "./Data";
import CardCarousel, { CardCarousel1 } from "./CarouselCard";
export default function CardSlider() {
  const product = productData.map((item) => (
   <CardCarousel  
    key={item.id} {...item} />
  ));
  return (
    <Box style={{ border: "0px solid red",width:"100%",zIndex:"0" }}>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </Box>
  );
}


function CardSlider1() {
  const product = OlaplexData.map((item) => (
   <CardCarousel1  
    key={item.id} {...item} />
  ));
  return (
    <Box style={{ border: "0px solid red",width:"100%",zIndex:"0" }}>
      <Carousel showDots={true} responsive={responsive1}>
        {product}
      </Carousel>
    </Box>
  );
}

export {CardSlider1};