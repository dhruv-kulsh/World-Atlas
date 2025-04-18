export const Contact = () => {
    const handleFormSubmit = (formData) => {
        console.log(formData.entries);
        const formInputData = Object.fromEntries(formData.entries()); // Replacement of Vlaue onchange React 19
        console.log(formInputData);
        
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" className="from-control" required autoComplete="off" placeholder="Enter Your Name" name="username" />
                    <input type="email" className="from-control" required autoComplete="off" placeholder="Enter Your Email" name="email" />
                    <input type="message" className="from-control" required autoComplete="off" placeholder="Enter Your Message" name="message" />
                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}