// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Load the Home content by default
    loadContent('home');
});

function loadContent(page) {
    const contentSection = document.getElementById('content');

    switch (page) {
        case 'home':
            contentSection.innerHTML = `
                <div class="content-container">
                    <div class="text-box">
                        <h2>Welcome to Smith & Associates Law Firm</h2>
                        <p>Your Trusted Legal Partners</p>
                        <p>At Smith & Associates, we provide expert legal services with a commitment to integrity and professionalism. Our experienced team of lawyers is dedicated to understanding your unique legal needs and delivering tailored solutions for the best outcomes.</p>
                        <h3>Why Choose Us?</h3>
                        <p>With years of experience and a proven track record, we stand out as a reliable and client-focused law firm. Our commitment to excellence sets us apart in providing the best legal solutions for you.</p>
                    </div>
                    <div class="image-box">
                        <img src="images/home-image.jpg" alt="Law Firm Office">
                    </div>
                </div>
            `;
            break;
            break;
        case 'about':
            contentSection.innerHTML = `
                <h2>About Us</h2>
                <p>Smith & Associates is a reputable law firm with a rich history of providing high-quality legal services. Our mission is to deliver effective legal solutions with a focus on client satisfaction.</p>
            `;
            break;
        case 'services':
            contentSection.innerHTML = `
                <h2>Our Services</h2>
                <p>Explore our comprehensive range of legal services, including:</p>
                <ul>
                    <li>Legal Consultation</li>
                    <li>Litigation Support</li>
                    <li>Contract Drafting and Review</li>
                    <li>Corporate Law</li>
                    <li>Real Estate Law</li>
                </ul>
            `;
            break;
        case 'team':
            contentSection.innerHTML = `
                <h2>Our Team</h2>
                <p>Meet our team of experienced and dedicated lawyers who are passionate about providing top-notch legal services to our clients.</p>
            `;
            break;
        case 'contact':
            contentSection.innerHTML = `
                <h2>Contact Us</h2>
                <p>Get in touch with us using the form below:</p>
                <form id="contactForm" action="#" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            `;
            break;
        default:
            contentSection.innerHTML = '<h2>Page Not Found</h2>';
    }
}

