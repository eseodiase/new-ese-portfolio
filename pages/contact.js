const enroll =()=>{
    return `<section class="connect">
    
        <div class="container">
        <div class="subTitle">
          <h2>Contact</h2>
        </div>
     
     <div class="subTitle">
          <p>
          For freelance work, team projects, part-time, remote, and entry-level employment, don't hesitate to get in touch.
          </p>
        </div>
        </div>

    
              <div id="enroll" class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="form-details">
              <div class="row">
                <div class="form-info col-md-6">
                  <label for="name">
                  <i class="bi bi-person"></i>  
                  </label>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your name" required/>
                </div>
                
                <div class="form-info col-md-6">
                  <label for="name">
                  <i class="bi bi-at"></i>
                  </label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your e-mail" required/>
                </div>
              </div>
              
              <div class="form-info">
                <label for="name">
                <i class="bi bi-pencil-square"></i>
                </label>
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Your subject" required/>
              </div>
              
              <div class="form-info">
                <label for="name">
                <i class="bi bi-envelope-open"></i>
                </label>
                <textarea class="form-control" name="message" rows="10" placeholder="Your message" required>
                </textarea>
              </div>
              
              <div class="text-center"><button type="submit">Send Message</button>
              </div>
            </form>
          </div>
    </section>`;
}
export default enroll;