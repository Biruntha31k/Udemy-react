import saleimage from "../assets/images/sale_image.jpeg"

function Sale() {
    return (
        <div className="sale-image">
            <img src={saleimage} alt="Sale Image"></img>
                <div className="sale-image__offer">
                    <h2>Udemy Flash Sale! 24 hours to save.</h2>
                    <p>Get the top Courses for just Rs.499. Just one day to save but a lifetime to learns</p>
                </div>
        </div>
    )
}

export default Sale