export default function Page() {
    return(
<>
<center>
<h1 className="text-4xl ml-5 text-blue-400 font-mono">Deep Space Weekend Workshops & Star Parties </h1></center>
<h2 className="text-2xl italic ml-5">Interest Form</h2><br />
<h3 className="text-l ml-5">Thank you for your interest in participating in one or more online weekend sessions of 
    the Deep Space Astronomy program. Please complete this form, and our program director, Andres Torres, will be in touch 
    with you for a brief conversation.<br /><br />

NOTE: This form must be submitted no later than 10 days prior to the weekend you wish to attend.</h3>

<br />

<form>
    <label htmlFor="session" className="mx-5">Which weekend session are you interest in?</label>

    <select name="session" className="bg-blue-400 text-black" id="session">
    <option value="12-28-24">Saturday, December 28, 2024</option>
    <option value="12-29-24">Sunday, December 29, 2024</option>
    <option value="1-18-25">Saturday, January 18, 2025</option>
    <option value="1-19-25">Sunday, January 19, 2025</option>
    <option value="1-25-25">Saturday, January 25, 2025</option>
    <option value="1-26-25">Sunday, January 26, 2025</option>
    </select>
    
    <br /><br />


    <label htmlFor="firstname" className="ml-5">First Name:</label>
    <input type="text" name="firstname" id="firstname" className="m-2 text-black bg-blue-400" />
    <label htmlFor="lastname" className="ml-5">Last Name:</label>
    <input type="text" name="lastname" id="lastname" className="m-2 text-black bg-blue-400" />
    <br />

<div className="ml-5 mt-5">Your pronouns<br />
    <input type="radio" id="she/her/hers" name="pronouns" value="she/her/hers" />
    <label htmlFor="she/her/hers">she/her/hers</label><br />
    <input type="radio" id="he/him/his" name="pronouns" value="he/him/his" />
    <label htmlFor="he/him/his">he/him/his</label><br />
    <input type="radio" id="they/them/theirs" name="pronouns" value="they/them/theirs" />
    <label htmlFor="they/them/theirs">they/them/theirs</label><br />
    <input type="radio" id="other" name="pronouns" value="other" />
    <label htmlFor="other">Other</label>
    <input type="text" name="other_pronouns" id="other_pronouns" placeholder="specify" className="m-3 text-black bg-blue-400" />
</div>

<br />

<label htmlFor="email" className="ml-5">Personal Email:</label>
    <input type="email" name="email" id="email" className="m-2 text-black bg-blue-400" />
    <br />
    <label htmlFor="phonenumber" className="ml-5">Personal Phone Number:</label>
    <input type="tel" name="phonenumber" id="phonenumber" className="m-2 text-black bg-blue-400" />
    <br />

<div className="ml-5 mt-5">Best means to reach you 
    <br />(you will be contacted by program director at the contact information provided above):
    <br />
<input type="checkbox" id="contact1" name="contact1" value="Email" />
  <label htmlFor="contact1">Email</label><br />
  <input type="checkbox" id="contact2" name="contact2" value="Phone" />
  <label htmlFor="contact2">Phone</label><br />
</div>
<br />

    <button type="submit" className="ml-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
</form><br />

<center>
<div className="avatar">
  <div className="w-50 rounded">
    <img src="https://smallworldgreetings.com/cdn/shop/products/carl_sagan-New-600px_1024x1024.jpg?v=1587780572" style={{ maxWidth: "100%", height: "auto" }}  />
  </div>
</div>
</center>
</>
    );
}