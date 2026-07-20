"use client";

import jsPDF from "jspdf";
import * as XLSX from "xlsx";


interface Props {
  report: any;
}



export default function ExportButtons({
  report,
}: Props) {


  function exportPDF() {


    const doc = new jsPDF();


    doc.setFontSize(18);

    doc.text(
      "AI Budget Optimizer Report",
      20,
      20
    );


    doc.setFontSize(12);


    doc.text(
      `Employees: ${report.totalEmployees}`,
      20,
      40
    );


    doc.text(
      `Departments: ${report.totalDepartments}`,
      20,
      50
    );


    doc.text(
      `AI Tools: ${report.totalAITools}`,
      20,
      60
    );


    doc.text(
      `Monthly AI Budget: ₹${report.monthlyBudget}`,
      20,
      70
    );


    doc.text(
      `Savings: ₹${report.savings}`,
      20,
      80
    );


    doc.text(
      `Expected ROI: ${report.expectedROI}%`,
      20,
      90
    );


    doc.save(
      "AI-Budget-Report.pdf"
    );

  }




  function exportExcel() {


    const worksheet =
      XLSX.utils.json_to_sheet([
        report
      ]);


    const workbook =
      XLSX.utils.book_new();



    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "AI Report"
    );



    XLSX.writeFile(
      workbook,
      "AI-Budget-Report.xlsx"
    );

  }




  return (

    <div className="flex gap-4">


      <button
        onClick={exportPDF}
        className="rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-700"
      >
        Download PDF
      </button>



      <button
        onClick={exportExcel}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-500"
      >
        Export Excel
      </button>


    </div>

  );

}