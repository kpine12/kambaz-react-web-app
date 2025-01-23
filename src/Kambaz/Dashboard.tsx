import { Link } from "react-router-dom"
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2><hr/>
            <div id="wd-dashboard-courses">
                <div id="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
                        <img src="/images/reactjs.jpg" width={200}/>
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1111/Home" className="wd-dashboard-course-link">
                        <img src="/images/english.jpg" width={200}/>
                        <div>
                            <h5> ENGW1111 Intro to English </h5>
                            <p className="wd-dashboard-course-title">
                                English Writer</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div> 
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5610/Home" className="wd-dashboard-course-link">
                        <img src="/images/systems.jpg" width={200}/>
                        <div>
                            <h5> ARTG5610 Design Systems </h5>
                            <p className="wd-dashboard-course-title">
                                Design Consultant</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2242/Home" className="wd-dashboard-course-link">
                        <img src="/images/info.jpg" width={200}/>
                        <div>
                            <h5> ARTG2242 Information Design </h5>
                            <p className="wd-dashboard-course-title">
                                Information Scientist</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2500/Home" className="wd-dashboard-course-link">
                        <img src="/images/fundies.jpg" width={200}/>
                        <div>
                            <h5> CS2500 Fundamentals of CS</h5>
                            <p className="wd-dashboard-course-title">
                                Computer Scientist</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3000/Home" className="wd-dashboard-course-link">
                        <img src="/images/algo.jpg" width={200}/>
                        <div>
                            <h5> CS3000 Algorithms </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithmist</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4321/Home" className="wd-dashboard-course-link">
                        <img src="/images/ai.jpg" width={200}/>
                        <div>
                            <h5> CS4321 Advanced AI </h5>
                            <p className="wd-dashboard-course-title">
                                AI Researcher</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/9900/Home" className="wd-dashboard-course-link">
                        <img src="/images/magic.jpg" width={200}/>
                        <div>
                            <h5> MAGIC9900 Advanced Magic</h5>
                            <p className="wd-dashboard-course-title">
                                Magician</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1122/Home" className="wd-dashboard-course-link">
                        <img src="/images/colorcomp.jpg" width={200}/>
                        <div>
                            <h5> ARTG1122 Color and Composition </h5>
                            <p className="wd-dashboard-course-title">
                                Color Compositionist</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1100/Home" className="wd-dashboard-course-link">
                        <img src="/images/film.jpg" width={200}/>
                        <div>
                            <h5> MSCR1100 Film 101 </h5>
                            <p className="wd-dashboard-course-title">
                                Amateur Filmmaker</p>
                                <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}