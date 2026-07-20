import { adminDb } from "@/lib/firebaseAdmin";
import ThemeSwitcher from "@/components/theme-switcher";

async function getCompany() {
  const snapshot = await adminDb
    .collection("companies")
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  return snapshot.docs[0].data();
}

export default async function SettingsPage() {
  const company = await getCompany();

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage your application preferences and system configuration.
        </p>
      </div>

      {/* Settings Card */}

      <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow p-8">

        <div className="space-y-6">

          {/* Company */}

          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Company
            </p>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {company?.companyName || "Not Configured"}
            </h2>
          </div>

          {/* Industry */}

          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Industry
            </p>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {company?.industry || "N/A"}
            </h2>
          </div>

          {/* Currency */}

          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Currency
            </p>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              INR (₹)
            </h2>
          </div>

          {/* Gemini */}

          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Gemini API
            </p>

            <span className="rounded-lg bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900 dark:text-green-300">
              Connected
            </span>
          </div>

          {/* Firestore */}

          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Firestore
            </p>

            <span className="rounded-lg bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900 dark:text-green-300">
              Connected
            </span>
          </div>

          {/* Version */}

          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Version
            </p>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              v1.0.0
            </h2>
          </div>

          {/* Appearance */}

          <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              Appearance
            </h2>

            <ThemeSwitcher />
          </div>

        </div>
      </div>
    </div>
  );
}