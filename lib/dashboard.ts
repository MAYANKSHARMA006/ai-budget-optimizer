import { adminDb } from "@/lib/firebaseAdmin";

export async function getDashboardData() {
  try {
    const [
      companySnapshot,
      employeeSnapshot,
      departmentSnapshot,
      analysisSnapshot,
    ] = await Promise.all([
      adminDb.collection("companies").limit(1).get(),
      adminDb.collection("employees").get(),
      adminDb.collection("departments").get(),
      adminDb
        .collection("analyses")
        .orderBy("createdAt", "desc")
        .limit(1)
        .get(),
    ]);

    const company = companySnapshot.empty
      ? null
      : companySnapshot.docs[0].data();

    const employeesList = employeeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const departmentList = departmentSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const analysis = analysisSnapshot.empty
      ? null
      : analysisSnapshot.docs[0].data().analysis;

    // -------------------------
    // Recent Activity
    // -------------------------

    const activities = [];

    if (company) {
      activities.push({
        title: "Company profile updated",
        time: "Latest",
      });
    }

    if (employeesList.length > 0) {
      activities.push({
        title: `${employeesList.length} employees available`,
        time: "Latest",
      });
    }

    if (departmentList.length > 0) {
      activities.push({
        title: `${departmentList.length} departments created`,
        time: "Latest",
      });
    }

    if (analysis) {
      activities.push({
        title: "AI Analysis generated",
        time: "Latest",
      });
    }

return {
  company,
  employeeCount: employeesList.length,
  departments: departmentList.length,
  aiUsers: employeesList.filter(
    (employee: any) => employee.usesAI
  ).length,
  employeesList,
  departmentList,
  analysis,
  activities,
};
  } catch (error) {
    console.error("Dashboard Error:", error);

return {
  company: null,
  employeeCount: 0,
  departments: 0,
  aiUsers: 0,
  employeesList: [],
  departmentList: [],
  analysis: null,
  activities: [],
};
  }
}