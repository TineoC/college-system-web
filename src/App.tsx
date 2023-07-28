import React from "react";

export default function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Careers programs</h1>
      <form className="flex flex-col max-w-xs mx-4 my-2 gap-y-3">
        <label htmlFor="career">Career</label>
        <select
          placeholder="Select the program career"
          name="career"
          id="career"
        >
          <option value="IDS">Software Engineering</option>
          <option value="IND">Industrial Engineering</option>
          <option value="CIV">Civil Engineering</option>
        </select>

        <label htmlFor="program-year">Program year</label>
        <select
          name="program-year"
          id="program-year"
          placeholder="Select the program year"
        >
          <option value="2016">2016</option>
          <option value="2020">2020</option>
        </select>

        <label htmlFor="program-file">Program File</label>
        <input type="file" name="program-file" id="program-file" />

        <button type="submit">Send</button>
      </form>
    </main>
  );
}
