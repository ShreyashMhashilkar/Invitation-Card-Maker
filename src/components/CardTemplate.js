import html2canvas from "html2canvas";
import { useRef } from "react";
import '../components/CardTemplate.css';
import bg1 from '../images/background1.png';
import bg2 from '../images/background2.png';
import bg3 from '../images/background3.png';
import bg4 from '../images/background4.png';
import bg5 from '../images/background5.png';
import bg6 from '../images/background6.png';
import bg7 from '../images/background7.png';
import bg8 from '../images/background8.png';
import bg9 from '../images/background9.png';
import bg10 from '../images/background10.png';
import bg11 from '../images/background11.png';
import bg12 from '../images/background12.png';
import bg13 from '../images/background13.png';
import bg14 from '../images/background14.png';
import bg15 from '../images/background15.png';
import bg16 from '../images/background16.png';

const CardTemplate = ({ details }) => {

    const exportRef1 = useRef();
    const exportRef2 = useRef();
    const exportRef3 = useRef();
    const exportRef4 = useRef();
    const exportRef5 = useRef();
    const exportRef6 = useRef();
    const exportRef7 = useRef();
    const exportRef8 = useRef();
    const exportRef9 = useRef();
    const exportRef10 = useRef();
    const exportRef11 = useRef();
    const exportRef12 = useRef();
    const exportRef13 = useRef();
    const exportRef14 = useRef();
    const exportRef15 = useRef();
    const exportRef16 = useRef();


    const exportAsImage = async (element, imageFileName) => {

        console.log(element);
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
         console.log(element);
    };
    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();

    };



    return (
        <>

                <div className="container">
                    <div className="row">


                        <div class="col p-4 mb-4">
                            
                            <div class="card mx-auto" ref={exportRef1} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg1} className="card-img-top " alt="..." />
                                {/* <div className="card-body"> */}
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date "><h6>Date:{details.date}</h6></div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary " style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef1.current, "invitation card1")}>
                                    Download
                                </button>
                            </div>


                        </div>
                        <div class="col p-4 mb-4">
                            
                            <div class="card mx-auto" ref={exportRef2} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg2} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address} </div>
                                <div class="text-container-name "><p>{details.name}</p></div>
                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef2.current, "invitation card2")}>
                                    Download
                                </button>

                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef3} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg3} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef3.current, "invitation card3")}>
                                    Download
                                </button>
                            </div>



                        </div>
                        <div class="col p-4 mb-4 pb-2 ">
                            
                            <div class="card mx-auto" ref={exportRef4} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg15} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef4.current, "invitation card4")}>
                                    Download
                                </button>
                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef5} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg5} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>
                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef5.current, "invitation card5")}>
                                    Download
                                </button>
                            </div>
                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef6} style={{ width: '18rem', height: '25.5rem' }}>
                                <img src={bg6} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>
                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef6.current, "invitation card6")}>
                                    Download
                                </button>

                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef7} style={{ width: '18rem', height: '26rem' }}>
                                <img src={bg7} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>
                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef7.current, "invitation card7")}>
                                    Download
                                </button>

                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef8} style={{ width: '18rem', height: '25.4rem' }}>
                                <img src={bg8} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef8.current, "invitation card8")}>
                                    Download
                                </button>
                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef9} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg9} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef9.current, "invitation card9")}>
                                    Download
                                </button>
                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef10} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg10} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>
                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef10.current, "invitation card10")}>
                                    Download
                                </button>

                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef11} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg11} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef11.current, "invitation card11")}>
                                    Download
                                </button>
                            </div>



                        </div>

                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef12} style={{ width: '18rem', height: '25.5rem' }}>
                                <img src={bg12} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef12.current, "invitation card12")}>
                                    Download
                                </button>
                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef13} style={{ width: '18rem', height: '26rem' }}>
                                <img src={bg13} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef13.current, "invitation card13")}>
                                    Download
                                </button>
                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef14} style={{ width: '18rem', height: '25rem' }}>
                                <img src={bg14} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>
                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef14.current, "invitation card14")}>
                                    Download
                                </button>

                            </div>



                        </div>
                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef15} style={{ width: '18rem', height: '27rem' }}>
                                <img src={bg4} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef15.current, "invitation card15")}>
                                    Download
                                </button>
                            </div>



                        </div>

                        <div class="col p-4 mb-4 ">
                            
                            <div class="card mx-auto" ref={exportRef16} style={{ width: '18rem', height: '24rem' }}>
                                <img src={bg16} className="card-img-top " alt="..." />
                                <div class="text-container text-center"><p>You are coordially invited on occasion of</p></div>

                                <div class="text-container-ocassion "><h2>{details.occasion}</h2></div>
                                <div class="text-container-date ">Date:{details.date}</div>
                                <div class="text-container-timing ">Timing:{details.timing}</div>
                                <div class="text-container-address p-4"> {details.address}</div>
                                <div class="text-container-name "><p>{details.name}</p></div>

                                <button className="btn btn-primary" style={{ 'width': '18rem' }} onClick={() => exportAsImage(exportRef16.current, "invitation card16")}>
                                    Download
                                </button>
                            </div>



                        </div>
                    </div>




                </div>




            {/* </div> */}



        </>
    )
}
export default CardTemplate;