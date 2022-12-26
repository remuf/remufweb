import data from "../data";
import Carousel from "./Carousel";

export default function Youtube() {
  return (
    <div className="container-fluid">
      <Carousel 
      data={data}
      />
    </div>
  )
}
