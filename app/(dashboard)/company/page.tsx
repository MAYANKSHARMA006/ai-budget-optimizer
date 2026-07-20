import CompanyForm from "@/components/company/company-form";

export default function CompanyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Company Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Enter your company information to begin AI Budget Optimization.
        </p>
      </div>

      <CompanyForm />
    </div>
  );
}