export default function CompanyPage() {
  return (
    <div className="max-w-5xl">

      <h1 className="text-4xl font-bold mb-8">
        Company Information
      </h1>

      <div className="bg-white rounded-xl shadow p-8 space-y-6">

        <div>
          <label className="block font-medium mb-2">
            Company Name
          </label>

          <input
            className="border rounded-lg w-full p-3"
            placeholder="OpenAI Pvt Ltd"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Industry
          </label>

          <input
            className="border rounded-lg w-full p-3"
            placeholder="Technology"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Number of Employees
          </label>

          <input
            type="number"
            className="border rounded-lg w-full p-3"
            placeholder="250"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Annual Revenue
          </label>

          <input
            className="border rounded-lg w-full p-3"
            placeholder="$10,000,000"
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save Company
        </button>

      </div>
    </div>
  );
}