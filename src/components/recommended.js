
import prog1 from "../assets/images/prog1.jpg"
import prog2 from "../assets/images/prog2.jpg"
import prog3 from "../assets/images/prog3.jpg"
import prog4 from "../assets/images/prog4.jpg"

function Recommended()
{
    return(
        <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={prog1}></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={prog2}></img>
                <h3>Basic to Advanced PHP Masterclass</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1599</del></p>
            </div>

            <div className="course-card">
                <img src={prog3}></img>
                <h3>Web DevelopmentBootcamp 2024 | Advance</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={prog4}></img>
                <h3>2024 Python Data Visualization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.1 ⭐⭐⭐⭐</p>
                <p>449 <del>1599</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended