import demoVideo from '../assets/img/demo-screen.mp4';
function Features({items}) {
    return (
        <>
            <section id="features">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="col-12"> 
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                                    {items.map((item, index) => (
                                        <div key={index} className="col text-center"> 
                                            <i className={`bi ${item.icon} icon-feature text-gradient d-block mb-3`}></i>
                                            <h5 className="fw-bold" style={{ fontFamily: "'Mulish', sans-serif" }}>{item.title}</h5>
                                            <p className="text-muted mb-0 " style={{ fontFamily: "'Mulish', sans-serif" }}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 order-lg-0">
                            <div className="features-device-mockup">
                                <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop className="gradient-start-color" offset="0%"></stop>
                                            <stop className="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>

                                <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)" />
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)" />
                                </svg>

                                <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>

                                <div className="device-wrapper">
                                    <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div className="screen bg-black">
                                            <video
                                                muted
                                                autoPlay
                                                loop
                                                style={{ maxWidth: '100%', height: '100%' }}
                                            >
                                                <source src={demoVideo} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
