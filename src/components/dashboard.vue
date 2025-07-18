import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const employeeData = [
  { name: "Judy H", role: "DBD", annual: 151562.5, next: 160000 },
  { name: "Heath B", role: "CTO", annual: 161877.5, next: 165000 },
  { name: "Phil M", role: "CPO", annual: 161877.5, next: 165000 },
  { name: "Michael C", role: "CGO", annual: 161877.5, next: 165000 },
  { name: "Steve H", role: "CMO", annual: 161877.5, next: 165000 },
  { name: "Ed H", role: "CEO", annual: 172342.5, next: 175000 },
  { name: "Derek R", role: "FE Dev", annual: 92252.5, next: 95000 },
  { name: "Cassidy S", role: "FE Dev", annual: 78258.0, next: 80000 },
  { name: "Adam", role: "FE Dev", annual: 78258.0, next: 80000 },
  { name: "Joe B", role: "FE Dev", annual: 92252.5, next: 95000 },
  { name: "Justin P", role: "FE Dev", annual: 65340.0, next: 70000 },
];

const roles = [...new Set(employeeData.map(emp => emp.role))];

const costOptions = [
  { label: "Annual", key: "annual" },
  { label: "Quarterly", key: "quarterly" },
  { label: "Monthly", key: "monthly" },
  { label: "Next Year (Annual)", key: "next" },
  { label: "Compare This vs Next", key: "compare" },
];

const enrichedData = employeeData.map(emp => ({
  ...emp,
  quarterly: emp.annual / 4,
  monthly: emp.annual / 12,
  diff: emp.next - emp.annual
}));

export default function ForecastDashboard() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [costView, setCostView] = useState("annual");

  const filteredData = selectedRole === "All"
    ? enrichedData
    : enrichedData.filter(emp => emp.role === selectedRole);

  const exportCSV = () => {
    const headers = ["Name", "Role", "Cost"];
    const rows = filteredData.map(emp => [emp.name, emp.role, emp[costView]]);
    const csvContent = [headers, ...rows]
      .map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `forecast_${costView}.csv`);
    link.click();
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold">Forecast Cost Dashboard</h2>
            <div className="flex gap-4 flex-wrap">
              <Select onValueChange={setSelectedRole} defaultValue="All">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setCostView} defaultValue="annual">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="View by" />
                </SelectTrigger>
                <SelectContent>
                  {costOptions.map(opt => (
                    <SelectItem key={opt.key} value={opt.key}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={exportCSV} className="shrink-0">Export CSV</Button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={filteredData} layout="vertical" margin={{ left: 50 }}>
              <XAxis type="number" tickFormatter={v => `$${v.toLocaleString()}`} />
              <YAxis type="category" dataKey="name" width={120} />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              {costView === "compare" ? (
                <>
                  <Legend />
                  <Bar dataKey="annual" fill="#4a90e2" name="This Year" />
                  <Bar dataKey="next" fill="#f5a623" name="Next Year" />
                </>
              ) : (
                <Bar dataKey={costView} fill="#4a90e2" name={`${costView.charAt(0).toUpperCase() + costView.slice(1)} Cost`} />
              )}
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
