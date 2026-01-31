import './Home.css';


export default function Home() {
    return (<>
    <div className="home-container reveal">
        <div className="container">
            <div className="row hero-section align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12 hero-content mb-5 mb-lg-0">
                    <h1 className="display-4 fw-bold mb-3">Hi, I'm <span className='span1'>Aymane</span><br /><span className='span2'>Elasri</span></h1>
                    <h4 className="h3 text-secondary fw-semibold mb-4">Full-Stack Developer</h4>
                    <p className="lead text-light fs-5">I create modern and powerful web applications designed to scale easily, delivering high performance with creativity and passion</p>
                    <div className="mb-4">
                        <a href="/MyCv.pdf" download="Aymane_Elasri_CV.pdf" className="btn btn-primary me-3">DOWNLOAD CV</a>
                         <a href="#projects"><button className="btn btn-outline-light ">View Projects</button></a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/Aymanelasri" target="_blank" rel="noopener noreferrer" className="text-light me-4" title="GitHub">
                            <i className="bi bi-github fs-4"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ayman-elasri-745a8033b" target="_blank" rel="noopener noreferrer" className="text-light me-4" title="LinkedIn">
                            <i className="bi bi-linkedin fs-4"></i>
                        </a>
                        <a href="https://www.facebook.com/share/1BzMUhQRa1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-light" title="Facebook">
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 hero-image d-flex justify-content-center align-items-center">
                    <img src="./profile.jpg" alt="Developer activity" className="profile-img"/>  
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
)

}