import Image from "next/image"
import { overviewData } from "./overviewData";
import "./about.scss"

export default function Overview() {
  return (
        <div className="overview" id="OverviewRef">
      
        {overviewData.map((data, index) => (
          <div key={index} className="flex justify-center">
            {data.side === "right" ? (
              <section className="OSR overview_section row">
                <div className="overview_textDiv">
                  {/* <div className="textDiv_square">
                  <Square>{data.icon}</Square>
                </div> */}
                  <div className="textDiv_textContent mt-3">
                    <h2 >{data.title}</h2>
                    <p>{data.text}</p>
                  </div>
                  {/* <div className="textDiv_buttonDiv">
                  <Button>Get Started</Button>
                </div> */}
                </div>
                <div className="overview_imgDivRight">
                  <Image src={data.img} alt="image" className="mockup"/>
                </div>
              </section>
            ) : (
              <section className="OSL overview_section row">
                <div className="overview_imgDivLeft">
                <Image src={data.img} alt="image" className="mockup"/>
    
                </div>
                <div className="overview_textDiv">
                  {/* <div className="textDiv_square">
                  <Square>{data.icon}</Square>
                </div> */}
                  <div className="textDiv_textContent mt-3 ">
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                  </div>
                  {/* <div className="textDiv_buttonDiv">
                  <Button >Get Started</Button>
                </div> */}
                </div>
              </section>
            )}
          </div>
        ))}
      </div>
  );

}
