import "./Contact.css";

function Contact() {

    return (

        <div className="contact-page">

            <div className="contact-container">

                <div className="contact-info">

                    <h1>Get In Touch 📞</h1>

                    <p>
                        Have questions, suggestions, or need assistance?
                        We'd love to hear from you. Reach out to us anytime.
                    </p>

                    <div className="info-box">

                        <h3>📍 Address</h3>

                        <p>Noida, Uttar Pradesh, India</p>

                    </div>

                    <div className="info-box">

                        <h3>📧 Email</h3>

                        <p>aryantiwari@123123gmail.com</p>

                    </div>

                    <div className="info-box">

                        <h3>📱 Phone</h3>

                        <p>+91 9389097143</p>

                    </div>

                </div>

                <div className="contact-form">

                    <h2>Send a Message</h2>

                    <input
                        type="text"
                        placeholder="Enter Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Enter Your Email"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        rows="6"
                        placeholder="Write your message here..."
                    ></textarea>

                    <button>

                        Send Message

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Contact;