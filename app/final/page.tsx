export default function Page() {
    return(
<>
<h1 className="text-3xl ml-5">Final Exam</h1>
<form>
    <label htmlFor="product" className="ml-5">Product Description</label>
    <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400" />
    <br />
    <button type="button" className="ml-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
</form>
</>
    );
}