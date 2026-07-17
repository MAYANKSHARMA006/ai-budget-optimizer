import CompanyForm from "@/components/onboarding/company-form";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <CompanyForm />
      </div>
    </div>
  );
}