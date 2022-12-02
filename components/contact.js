const contact = ()=>{
    return `<section id="connect">
    
          <div class=""> <!--- wrap start --->
          <div class="subTitle">
          <h2>Connect</h2>
           <p>
          For freelance work, team projects, part-time, remote, and entry-level employment, don't hesitate to get in touch.
          </p>
          </div> 
    
    <form method="POST" name="Contact Form" class="cntForm">
    
<!-- contactForm div wrap beginning -->
<div class="contactForm">

<!-- contactInput beginning -->
<br/>
<div class="contactInput">
<label><i class="fa fa-user"></i></label>
<input type ="text" name="Name" class="cFormInput" placeholder="Your name" required/>

<hr class="formHr">
<label><i class="fa fa-at"></i></label>
<input type ="email" name="Email" class="cFormInput" placeholder="Your e-mail" required/>

<hr class="formHr">
<label><i class="fa fa-edit"></i></label>
<input type ="text" name="Subject" class="cFormInput" placeholder="Your subject"/>

<hr class="formHr">
<label class="txtA">
<i class="fa fa-envelope"></i>
</label>
<textarea name="Message" placeholder="Your message" class="cFormTxtArea" rows="6" cols="30" required></textarea> <br />

<hr class="formHr">
</div>
<!-- contactInput ending-->

<button type="submit" class="sendBtn">Send Message</button>
</div>
<!-- contactForm div wrap ending -->

</form>

</div> <!--- wrap end --->
</section>`   ;
}
export default contact;