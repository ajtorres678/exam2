export default function Page() {
    return(
<>
<h1 className="text-3xl ml-5">Final Exam</h1>
<form>
    <label htmlFor="product" className="ml-5">Product Description</label>
    <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400" />
    <br />
<label htmlFor="cars" className="mx-5">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

<br />
<div className="ml-5 mt-5">
    <input type="radio" id="html" name="fav_language" value="HTML" />
    <label htmlFor="html">HTML</label><br />
    <input type="radio" id="css" name="fav_language" value="CSS" />
    <label htmlFor="css">CSS</label><br />
    <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
    <label htmlFor="javascript">JavaScript</label>
</div>

<div className="ml-5 mt-5">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label htmlFor="vehicle1"> I have a bike</label><br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label htmlFor="vehicle2"> I have a car</label><br />
</div>
<br />

    <button type="button" className="ml-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
</form>
</>
    );
}