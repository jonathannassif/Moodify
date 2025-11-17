const app = document.getElementById("app");

const views = {
  home: `
    <section class="hero">
      <div class="hero-content">
        <h2>Welcome to City General Hospital</h2>
        <p>Your health is our priority. We provide comprehensive medical services with compassionate care.</p>
        <button data-view="appointments" class="cta-button">Book Appointment</button>
      </div>
      <img src="assets/hospital-building.jpg" alt="Hospital Building" class="hero-image" />
    </section>
    <section class="stats">
      <h2>Hospital Statistics</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <i class="fa-solid fa-users"></i>
          <h3>50,000+</h3>
          <p>Patients Served</p>
        </div>
        <div class="stat-card">
          <i class="fa-solid fa-user-md"></i>
          <h3>200+</h3>
          <p>Expert Doctors</p>
        </div>
        <div class="stat-card">
          <i class="fa-solid fa-bed"></i>
          <h3>500+</h3>
          <p>Beds Available</p>
        </div>
        <div class="stat-card">
          <i class="fa-solid fa-award"></i>
          <h3>25+</h3>
          <p>Years of Service</p>
        </div>
      </div>
      <canvas id="statsChart" width="400" height="200"></canvas>
    </section>
    <section class="testimonials">
      <h2>What Our Patients Say</h2>
      <div class="testimonial-carousel">
        <div class="testimonial">
          <p>"Exceptional care and compassionate staff. Highly recommend!"</p>
          <cite>- John Doe</cite>
        </div>
        <div class="testimonial">
          <p>"State-of-the-art facilities and professional doctors."</p>
          <cite>- Jane Smith</cite>
        </div>
        <div class="testimonial">
          <p>"Quick emergency response saved my life. Thank you!"</p>
          <cite>- Bob Johnson</cite>
        </div>
      </div>
    </section>
  `,
  about: `
    <section>
      <h2>About Us</h2>
      <p>City General Hospital has been serving the community since 1950. Our mission is to provide quality healthcare with a patient-centered approach.</p>
      <p>We are committed to excellence in medical care, research, and education. Our team of dedicated professionals works tirelessly to ensure the best possible outcomes for our patients.</p>
      <p>With state-of-the-art facilities and cutting-edge technology, we offer a wide range of services from routine check-ups to complex surgeries.</p>
    </section>
  `,
  services: `
    <section>
      <h2>Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <i class="fa-solid fa-ambulance"></i>
          <h3>Emergency Care</h3>
          <p>24/7 emergency services for critical and urgent health issues.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-stethoscope"></i>
          <h3>Outpatient Services</h3>
          <p>Consultations, diagnostics, and minor procedures.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-bed"></i>
          <h3>Inpatient Care</h3>
          <p>Comprehensive care with comfortable rooms and attentive nursing.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-scalpel"></i>
          <h3>Surgical Services</h3>
          <p>Advanced surgical procedures using cutting-edge techniques.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-baby"></i>
          <h3>Maternity Care</h3>
          <p>Prenatal, delivery, and postnatal care with neonatal support.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-x-ray"></i>
          <h3>Diagnostic Imaging</h3>
          <p>State-of-the-art imaging including X-rays, MRI, and CT scans.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-flask"></i>
          <h3>Laboratory Services</h3>
          <p>Full range of diagnostic tests with quick turnaround times.</p>
        </div>
        <div class="service-card">
          <i class="fa-solid fa-pills"></i>
          <h3>Pharmacy</h3>
          <p>Onsite pharmacy with prescription medications and health products.</p>
        </div>
      </div>
    </section>
  `,
  doctors: `
    <section>
      <h2>Our Doctors</h2>
      <div class="doctors-grid">
        <div class="doctor-card" onclick="openModal(\`
          <h3>Dr. Alice Smith</h3>
          <img src="assets/doctor1.jpg" alt="Dr. Alice Smith" style="width:100%; max-width:200px; border-radius:8px;">
          <p><strong>Specialty:</strong> Cardiology</p>
          <p>Dr. Smith has over 15 years of experience in cardiovascular medicine.</p>
          <p><strong>Education:</strong> MD from Harvard Medical School</p>
        
          <img src="assets/doctor1.jpg" alt="Dr. Alice Smith">
          <h3>Dr. Alice Smith</h3>
          <p>Cardiologist</p>
        </div>
        <div class="doctor-card" onclick="openModal(\`
          <h3>Dr. Bob Johnson</h3>
          <img src="assets/doctor2.jpg" alt="Dr. Bob Johnson" style="width:100%; max-width:200px; border-radius:8px;">
          <p><strong>Specialty:</strong> Neurology</p>
          <p>Dr. Johnson specializes in neurological disorders and brain health.</p>
          <p><strong>Education:</strong> MD from Johns Hopkins</p>
       
          <img src="assets/doctor2.jpg" alt="Dr. Bob Johnson">
          <h3>Dr. Bob Johnson</h3>
          <p>Neurologist</p>
        </div>
        <div class="doctor-card" onclick="openModal(\`
          <h3>Dr. Carol Lee</h3>
          <img src="assets/doctor3.jpg" alt="Dr. Carol Lee" style="width:100%; max-width:200px; border-radius:8px;">
          <p><strong>Specialty:</strong> Pediatrics</p>
          <p>Dr. Lee is dedicated to children's health and development.</p>
          <p><strong>Education:</strong> MD from Stanford University</p>
        
          <img src="assets/doctor3.jpg" alt="Dr. Carol Lee">
          <h3>Dr. Carol Lee</h3>
          <p>Pediatrician</p>
        </div>
        <div class="doctor-card" onclick="openModal(\`
          <h3>Dr. David Kim</h3>
          <img src="assets/doctor4.jpg" alt="Dr. David Kim" style="width:100%; max-width:200px; border-radius:8px;">
          <p><strong>Specialty:</strong> General Surgery</p>
          <p>Dr. Kim performs a wide range of surgical procedures.</p>
          <p><strong>Education:</strong> MD from UCLA Medical Center</p>
          <img src="assets/doctor4.jpg" alt="Dr. David Kim">
          <h3>Dr. David Kim</h3>
          <p>General Surgeon</p>
        </div>
        <div class="doctor-card" onclick="openModal(\`
          <h3>Dr. Eva Martinez</h3>
          <img src="assets/doctor5.jpg" alt="Dr. Eva Martinez" style="width:100%; max-width:200px; border-radius:8px;">
          <p><strong>Specialty:</strong> Obstetrics</p>
          <p>Dr. Martinez provides comprehensive maternity care.</p>
          <p><strong>Education:</strong> MD from University of Texas</p>
        
          <img src="assets/doctor5.jpg" alt="Dr. Eva Martinez">
          <h3>Dr. Eva Martinez</h3>
          <p>Obstetrician</p>
        </div>
      </div>
    </section>
  `,
  news: `
    <section>
      <h2>Latest News</h2>
      <div class="news-grid">
        <article class="news-item" onclick="openModal(\`
          <h3>New Cardiac Center Opens</h3>
          <img src="assets/news1.jpg" alt="New Cardiac Center" style="width:100%; max-width:300px; border-radius:8px;">
          <p>City General Hospital proudly announces the opening of our state-of-the-art Cardiac Center, equipped with the latest technology for heart care.</p>
          <p>Published: October 15, 2024</p>
          <img src="assets/news1.jpg" alt="New Cardiac Center">
          <h3>New Cardiac Center Opens</h3>
          <p>Equipped with latest technology for heart care.</p>
        </article>
        <article class="news-item" onclick="openModal(\`
          <h3>Annual Health Fair Success</h3>
          <img src="assets/news2.jpg" alt="Health Fair" style="width:100%; max-width:300px; border-radius:8px;">
          <p>Over 2,000 community members participated in our annual health fair, receiving free screenings and health education.</p>
          <p>Published: September 28, 2024</p>
        
          <img src="assets/news2.jpg" alt="Health Fair">
          <h3>Annual Health Fair Success</h3>
          <p>2,000+ participants received free screenings.</p>
        </article>
        <article class="news-item" onclick="openModal(\`
          <h3>Telemedicine Services Expanded</h3>
          <img src="assets/news3.jpg" alt="Telemedicine" style="width:100%; max-width:300px; border-radius:8px;">
          <p>We're expanding our telemedicine services to provide convenient virtual consultations for patients across the region.</p>
          <p>Published: August 10, 2024</p>
       
          <img src="assets/news3.jpg" alt="Telemedicine">
          <h3>Telemedicine Services Expanded</h3>
          <p>Convenient virtual consultations now available.</p>
        </article>
      </div>
    </section>
  `,
  appointments: `
    <section>
      <h2>Book an Appointment</h2>
      <form id="appointmentForm" aria-label="Appointment booking form">
        <label for="patientName">Full Name</label>
        <input type="text" id="patientName" name="patientName" placeholder="Your Full Name" required aria-required="true" />
        <label for="patientEmail">Email</label>
        <input type="email" id="patientEmail" name="patientEmail" placeholder="Your Email" required aria-required="true" />
        <label for="patientPhone">Phone</label>
        <input type="tel" id="patientPhone" name="patientPhone" placeholder="Your Phone Number" required aria-required="true" />
        <label for="appointmentDate">Preferred Date</label>
        <input type="date" id="appointmentDate" name="appointmentDate" required aria-required="true" />
        <label for="appointmentTime">Preferred Time</label>
        <select id="appointmentTime" name="appointmentTime" required aria-required="true">
          <option value="">Select Time</option>
          <option value="09:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
        </select>
        <label for="department">Department</label>
        <select id="department" name="department" required aria-required="true">
          <option value="">Select Department</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="surgery">Surgery</option>
          <option value="obstetrics">Obstetrics</option>
        </select>
        <label for="appointmentMessage">Additional Notes</label>
        <textarea id="appointmentMessage" name="appointmentMessage" placeholder="Any additional information" rows="3"></textarea>
        <button type="submit" aria-label="Book appointment">Book Appointment</button>
      </form>
      <div id="appointmentResponse" role="alert" aria-live="polite"></div>
    </section>
  `,
  contact: `
    <section>
      <h2>Contact Us</h2>
      <div class="contact-info">
        <div class="contact-item">
          <i class="fa-solid fa-map-marker-alt"></i>
          <div>
            <h3>Address</h3>
            <p>123 Main Street, Cityville, State 12345</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fa-solid fa-phone"></i>
          <div>
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fa-solid fa-envelope"></i>
          <div>
            <h3>Email</h3>
            <p>info@citygeneralhospital.com</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fa-solid fa-clock"></i>
          <div>
            <h3>Hours</h3>
            <p>24/7 Emergency Services</p>
            <p>Outpatient: Mon-Fri 8AM-6PM</p>
          </div>
        </div>
      </div>
      <form id="contactForm" aria-label="Contact form">
        <label for="contactName">Name</label>
        <input type="text" id="contactName" name="contactName" placeholder="Your Name" required aria-required="true" />
        <label for="contactEmail">Email</label>
        <input type="email" id="contactEmail" name="contactEmail" placeholder="Your Email" required aria-required="true" />
        <label for="contactSubject">Subject</label>
        <input type="text" id="contactSubject" name="contactSubject" placeholder="Subject" required aria-required="true" />
        <label for="contactMessage">Message</label>
        <textarea id="contactMessage" name="contactMessage" placeholder="Your Message" rows="5" required aria-required="true"></textarea>
        <button type="submit" aria-label="Send message">Send Message</button>
      </form>
      <div id="contactResponse" role="alert" aria-live="polite"></div>
    </section>
  `,
};

document.querySelectorAll("nav button").forEach((btn) => {
  btn.addEventListener("click", () => loadView(btn.dataset.view));
});

function loadView(view) {
  app.innerHTML = views[view];
  if (view === "contact") {
    initContactForm();
  }
  if (view === "appointments") {
    initAppointmentForm();
  }
  if (view === "home") {
    initStatsChart();
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("contactResponse");
  form.onsubmit = (e) => {
    e.preventDefault();
    responseDiv.textContent =
      "Thank you for contacting us. We will get back to you shortly.";
    form.reset();
  };
}

function initAppointmentForm() {
  const form = document.getElementById("appointmentForm");
  const responseDiv = document.getElementById("appointmentResponse");
  form.onsubmit = (e) => {
    e.preventDefault();
    responseDiv.textContent =
      "Thank you for booking an appointment. We will confirm your appointment details via email.";
    form.reset();
  };
}

function initStatsChart() {
  const ctx = document.getElementById("statsChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Patients Served", "Doctors", "Beds", "Years of Service"],
      datasets: [
        {
          label: "Statistics",
          data: [50000, 200, 500, 25],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Load default view
loadView("home");
