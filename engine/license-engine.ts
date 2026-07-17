export function calculateLicenses(
  employees: number,
  utilization = 0.8
) {
  return Math.ceil(
    employees * utilization
  );
}