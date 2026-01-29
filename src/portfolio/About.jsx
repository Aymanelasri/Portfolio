import './About.css';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";




export default function About() {
    return(<>
    <div className="about-container reveal">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="fw-bold mb-4 about-header">About <span className="accent">Me</span></h2>
                </div>
            </div>

            <div className="row align-items-start justify-content-center">
                <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                    <div className="about-card p-4">
                        <h4 className="card-title">Full-Stack Developer</h4>
                        <p className="card-text">I'm a passionate and continuously improving Full-Stack Developer, specializing in React, Laravel, and MySQL. I build modern, fast, and fully responsive web applications with a strong focus on user experience.</p>
                        <p className="card-text">I care deeply about writing clean, maintainable code, designing scalable architectures, and delivering high-performance solutions. I enjoy working on real-world projects, collaborating with teams, and constantly learning to turn ideas into impactful digital products.</p>
                        
                        <div className="row text-start mb-3">
                            <div className="col-6"><strong>Name:</strong> <p>Aymane Elasri</p></div> 
                            <div className="col-6"><strong>Email:</strong> <p style={{wordBreak:"break-all"}}>Aymanelasri100@gmail.com</p></div> 
                        </div>
                        <div className="row text-start mb-3">
                            <div className="col-6"><strong>Location:</strong> Morocco, Casablanca</div> 
                            <div className="col-6"><strong>Availability:</strong><span className="text-success">Available</span></div>
                        </div>

                        <a href="/CV.pdf" className="btn btn-gradient w-100">Download CV</a>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"><FaGraduationCap /></div>
                            <div className="timeline-body">
                                <div className="timeline-year">2023 - 2024</div>
                                <h5>Bachelor's Degree - Physical Sciences</h5>
                                <p className="small text-muted">Completed a scientific high school diploma specializing in Physical Sciences.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon"><FaBriefcase /> </div>
                            <div className="timeline-body">
                                <div className="timeline-year">2024 - Present</div>
                                <h5>OFPPT - Digital Development</h5>
                                <p className="small text-muted">Pursuing hands-on learning in digital development, gaining practical skills through coursework and real-world projects, and continuously expanding knowledge in web technologies and best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}