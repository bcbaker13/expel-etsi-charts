import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Data for Figure 1: Breakdown of job descriptions analyzed, by industry
const dataFigure1 = [
  { name: 'Aerospace & Defense', value: 5 },
  { name: 'Apparel', value: 1 },
  { name: 'Automotive & Energy', value: 4 },
  { name: 'Energy', value: 1 },
  { name: 'Financial Services', value: 14 },
  { name: 'Food & Processing', value: 6 },
  { name: 'Healthcare', value: 10 },
  { name: 'Insurance', value: 8 },
  { name: 'Manufacturing', value: 8 },
  { name: 'Media', value: 1 },
  { name: 'Oil & Gas', value: 8 },
  { name: 'Pharmaceuticals', value: 4 },
  { name: 'Retail', value: 11 },
  { name: 'Technology & Cloud', value: 11 },
  { name: 'Telecommunications', value: 4 },
  { name: 'Transportation', value: 2 },
];

// Data for Figure 2: How long the job had been posted at the time of analysis
const dataFigure2 = [
  { name: 'A week', value: 28 },
  { name: 'A month', value: 60 },
  { name: 'Over a month', value: 13 },
];

// Data for Figure 3: How long the job had been posted at the time of analysis, by industry
const dataFigure3 = [
  { industry: 'Aerospace & Defense', all: 15, aWeek: 9, aMonth: 10, overAMonth: 55 },
  { industry: 'Airline', all: 2, aWeek: 2, aMonth: 3, overAMonth: 0 },
  { industry: 'Apparel', all: 1, aWeek: 1, aMonth: 1, overAMonth: 0 },
  { industry: 'Automotive & Energy', all: 2, aWeek: 2, aMonth: 2, overAMonth: 6 },
  { industry: 'Financial Services', all: 24, aWeek: 27, aMonth: 23, overAMonth: 17 },
  { industry: 'Food & Processing', all: 5, aWeek: 7, aMonth: 5, overAMonth: 1 },
  { industry: 'Healthcare', all: 4, aWeek: 3, aMonth: 5, overAMonth: 2 },
  { industry: 'Insurance', all: 3, aWeek: 4, aMonth: 2, overAMonth: 6 },
  { industry: 'Manufacturing', all: 3, aWeek: 2, aMonth: 4, overAMonth: 1 },
  { industry: 'Media', all: 1, aWeek: 0, aMonth: 1, overAMonth: 0 },
  { industry: 'Others', all: 0, aWeek: 0, aMonth: 0, overAMonth: 0 },
  { industry: 'Pharmaceuticals', all: 2, aWeek: 4, aMonth: 2, overAMonth: 1 },
  { industry: 'Retail', all: 15, aWeek: 16, aMonth: 16, overAMonth: 3 },
  { industry: 'Technology & Cloud', all: 21, aWeek: 21, aMonth: 24, overAMonth: 2 },
  { industry: 'Transportation', all: 1, aWeek: 1, aMonth: 1, overAMonth: 7 },
];

// Data for Figure 4: Breakdown of open roles across industries, by job category
const dataFigure4 = [
  { industry: 'Financial Services', all: 24, cybersecurity: 25, itSecurity: 28, observability: 18 },
  { industry: 'Technology & Cloud', all: 21, cybersecurity: 12, itSecurity: 12, observability: 32 },
  { industry: 'Aerospace & Defense', all: 15, cybersecurity: 33, itSecurity: 9, observability: 11 },
  { industry: 'Retail', all: 15, cybersecurity: 7, itSecurity: 23, observability: 11 },
  { industry: 'Food & Processing', all: 5, cybersecurity: 5, itSecurity: 5, observability: 7 },
  { industry: 'Healthcare', all: 4, cybersecurity: 4, itSecurity: 4, observability: 5 },
  { industry: 'Insurance', all: 3, cybersecurity: 2, itSecurity: 2, observability: 3 },
  { industry: 'Manufacturing', all: 3, cybersecurity: 3, itSecurity: 2, observability: 2 },
  { industry: 'Airline', all: 2, cybersecurity: 2, itSecurity: 2, observability: 3 },
  { industry: 'Automotive & Energy', all: 2, cybersecurity: 1, itSecurity: 2, observability: 2 },
  { industry: 'Pharmaceuticals', all: 2, cybersecurity: 2, itSecurity: 2, observability: 2 },
  { industry: 'Transportation', all: 1, cybersecurity: 0, itSecurity: 4, observability: 1 },
  { industry: 'Apparel', all: 1, cybersecurity: 0, itSecurity: 1, observability: 1 },
  { industry: 'Media', all: 1, cybersecurity: 0, itSecurity: 2, observability: 0 },
  { industry: 'Others', all: 0, cybersecurity: 0, itSecurity: 0, observability: 0 },
];

// Data for Figure 5: Breakdown of seniority across all analyzed open job descriptions
const dataFigure5 = [
  { name: 'Non-Mgt', value: 80 },
  { name: 'Supervisor + Team Lead', value: 6 },
  { name: 'Senior Manager + Manager', value: 10 },
  { name: 'Senior Director + Director + VP + C-level', value: 5 },
];

// Data for Figure 6: Breakdown of net-new jobs versus backfill positions
const dataFigure6 = [
  { seniority: 'Non-Mgt', all: 80, notNew: 81, isNew: 69 },
  { seniority: 'Supervisor + Team Lead', all: 6, notNew: 6, isNew: 6 },
  { seniority: 'Senior Manager + Manager', all: 10, notNew: 8, isNew: 20 },
  { seniority: 'Senior Director + Director + VP + C-level', all: 5, notNew: 5, isNew: 4 },
];

// Data for Figure 7: Average number of applicants for each role, by role seniority
const dataFigure7 = [
  { seniority: 'Non-Mgt', avgApplicants: 40.5 },
  { seniority: 'Supervisor + Team Lead', avgApplicants: 37.2 },
  { seniority: 'Senior Manager + Manager', avgApplicants: 38.6 },
  { seniority: 'Senior Director + Director + VP + C-level', avgApplicants: 50.3 },
  { seniority: 'All', avgApplicants: 40.6 },
];

// Data for Figure 8: Percentage of job applicants for each open role, by job category
const dataFigure8 = [
  { applicants: 'Nobody', cybersecurity: 6, itSecurity: 3, observability: 3 },
  { applicants: '1 to 25 people', cybersecurity: 50, itSecurity: 44, observability: 41 },
  { applicants: '26 to 50 people', cybersecurity: 17, itSecurity: 17, observability: 18 },
  { applicants: '51 to 75 people', cybersecurity: 7, itSecurity: 11, observability: 10 },
  { applicants: '76 to 99 people', cybersecurity: 4, itSecurity: 5, observability: 5 },
  { applicants: '100+ people', cybersecurity: 16, itSecurity: 20, observability: 22 },
];

// Data for Figure 9: Percentage of job applicants, by job location
const dataFigure9 = [
  { applicants: 'None', onSite: 6, hybrid: 3, remote: 1 },
  { applicants: '1 to 25 people', onSite: 46, hybrid: 44, remote: 23 },
  { applicants: '26 to 50 people', onSite: 16, hybrid: 21, remote: 15 },
  { applicants: '51 to 75 people', onSite: 9, hybrid: 11, remote: 12 },
  { applicants: '76 to 99 people', onSite: 4, hybrid: 5, remote: 8 },
  { applicants: '100+ people', onSite: 19, hybrid: 17, remote: 43 },
];

// Data for Figure 10: Frequency of cybersecurity software mentions across job descriptions
const dataFigure10 = [
  { name: 'Identity', value: 56 },
  { name: 'AWS', value: 44 },
  { name: 'SSO + Single sign-on', value: 35 },
  { name: 'Azure', value: 22 },
  { name: 'Kubernetes', value: 18 },
  { name: 'SaaS', value: 6 },
  { name: 'Cloud-native', value: 5 },
  { name: 'SIEM + securityinformationandeventmanagement', value: 4 },
  { name: 'Vulnerability management', value: 4 },
  { name: 'EDR + endpointdetectionandresponse', value: 4 },
  { name: 'Malware', value: 2 },
  { name: 'Threat response + Threatdetection + Threatdetectionandresponse', value: 2 },
  { name: 'Threat hunting', value: 2 },
  { name: 'SOAR + securityorchestrationautomationandresponse', value: 1 },
  { name: 'MFA + multifactor authentication', value: 1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF69B4', '#8A2BE2', '#7FFF00', '#D2691E', '#FFD700', '#ADFF2F', '#FF6347', '#4682B4', '#DA70D6', '#B0E0E6', '#F08080'];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-inter">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 rounded-lg p-2 shadow-md bg-white">
        2025 Enterprise Cybersecurity Talent Index - Appendix C Charts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

        {/* Figure 1: Breakdown of job descriptions analyzed, by industry */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 1: Breakdown of job descriptions analyzed, by industry
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={dataFigure1}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              layout="vertical" // Make it a horizontal bar chart for better readability of long labels
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `${value}%`} />
              <YAxis type="category" dataKey="name" width={150} />
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="% of Total Companies" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Breakdown of job descriptions analyzed, by industry</p>
        </div>

        {/* Figure 2: How long the job had been posted at the time of analysis */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 2: How long the job had been posted at the time of analysis
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={dataFigure2}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {dataFigure2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">How long the job had been posted at the time of analysis</p>
        </div>

        {/* Figure 3: How long the job had been posted at the time of analysis, by industry */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 3: How long the job had been posted at the time of analysis, by industry
          </h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={dataFigure3}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="industry" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Value']} />
              <Legend />
              <Bar dataKey="aWeek" stackId="a" fill="#82ca9d" name="A week" radius={[10, 10, 0, 0]} />
              <Bar dataKey="aMonth" stackId="a" fill="#8884d8" name="A month" />
              <Bar dataKey="overAMonth" stackId="a" fill="#ffc658" name="Over a month" radius={[0, 0, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">How long the job had been posted at the time of analysis, by industry</p>
        </div>

        {/* Figure 4: Breakdown of open roles across industries, by job category */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 4: Breakdown of open roles across industries, by job category
          </h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={dataFigure4}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="industry" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Value']} />
              <Legend />
              <Bar dataKey="cybersecurity" fill="#0088FE" name="Cybersecurity" radius={[10, 10, 0, 0]} />
              <Bar dataKey="itSecurity" fill="#00C49F" name="IT Security + DevSecOps" />
              <Bar dataKey="observability" fill="#FFBB28" name="Observability" radius={[0, 0, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Breakdown of open roles across industries, by job category</p>
        </div>

        {/* Figure 5: Breakdown of seniority across all analyzed open job descriptions */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 5: Breakdown of seniority across all analyzed open job descriptions
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={dataFigure5}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {dataFigure5.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Breakdown of seniority across all analyzed open job descriptions</p>
        </div>

        {/* Figure 6: Breakdown of net-new jobs versus backfill positions */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 6: Breakdown of net-new jobs versus backfill positions
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={dataFigure6}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="seniority" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
              <Bar dataKey="notNew" fill="#8884d8" name="Not New / Not Growing Team" radius={[10, 10, 0, 0]} />
              <Bar dataKey="isNew" fill="#82ca9d" name="New / Growing Team" radius={[0, 0, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Breakdown of net-new jobs versus backfill positions</p>
        </div>

        {/* Figure 7: Average number of applicants for each role, by role seniority */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 7: Average number of applicants for each role, by role seniority
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={dataFigure7}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="seniority" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgApplicants" fill="#a28dff" name="Average Applicants" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Average number of applicants for each role, by role seniority</p>
        </div>

        {/* Figure 8: Percentage of job applicants for each open role, by job category */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 8: Percentage of job applicants for each open role, by job category
          </h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={dataFigure8}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="applicants" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
              <Bar dataKey="cybersecurity" fill="#FF69B4" name="Cybersecurity" radius={[10, 10, 0, 0]} />
              <Bar dataKey="itSecurity" fill="#8A2BE2" name="IT Security + DevSecOps" />
              <Bar dataKey="observability" fill="#7FFF00" name="Observability" radius={[0, 0, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Percentage of job applicants for each open role, by job category</p>
        </div>

        {/* Figure 9: Percentage of job applicants, by job location */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 9: Percentage of job applicants, by job location
          </h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={dataFigure9}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="applicants" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
              <Bar dataKey="onSite" fill="#D2691E" name="On-site" radius={[10, 10, 0, 0]} />
              <Bar dataKey="hybrid" fill="#FFD700" name="Hybrid" />
              <Bar dataKey="remote" fill="#ADFF2F" name="Remote" radius={[0, 0, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Percentage of job applicants, by job location</p>
        </div>

        {/* Figure 10: Frequency of cybersecurity software mentions across job descriptions */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Figure 10: Frequency of cybersecurity software mentions across job descriptions
          </h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={dataFigure10}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              layout="vertical" // Make it a horizontal bar chart for better readability of long labels
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `${value}%`} />
              <YAxis type="category" dataKey="name" width={250} />
              <Tooltip formatter={(value) => [`${value}%`, 'Frequency']} />
              <Legend />
              <Bar dataKey="value" fill="#4682B4" name="Frequency" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-4 text-center">Frequency of cybersecurity software mentions across job descriptions</p>
        </div>

      </div>
    </div>
  );
};

export default App;
