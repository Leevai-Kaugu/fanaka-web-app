'use client';

import React from "react";

export default function ImpactTable() {
  const data = [
    {
      sdg: 'SDG 1: No Poverty',
      rows: [
        {
          Target_indicator: 'Population living under $1.25/day',
          Definition: 'Proportion of clients below the international extreme poverty line',
          Fanaka_metric: 'Baseline: 12% ↓ Year 1: 4% (-8 pp)',
        },
        {
          Target_indicator: 'Population living below national poverty line',
          Definition: 'Proportion of clients under national poverty threshold',
          Fanaka_metric: '5% avg. reduction across client cohort within 12 months',
        },
        {
          Target_indicator: '1.3.1 Coverage by social protection systems',
          Definition: '% clients with formal insurance cover',
          Fanaka_metric: '100% of borrowers insured via i‑Care and credit life',
        },
        {
          Target_indicator: 'Secure tenure rights to land',
          Definition: '% adult clients with documented land rights',
          Fanaka_metric: '16.9% of land‑owning clients hold title deeds',
        },
        {
          Target_indicator: 'ODA grants for poverty reduction',
          Definition: 'Total blended capital mobilized',
          Fanaka_metric: 'US$0.3M in equity, debt & grants (2025)',
        },
        {
          Target_indicator: 'Pro‑poor public social spending',
          Definition: 'Our policy advocacy contributions',
          Fanaka_metric: 'Co‑authored 1 national MSME inclusion guidelines',
        },
      ],
    },
    {
      sdg: 'SDG 4: Quality Education & Lifelong Learning',
      rows: [
        {
          Target_indicator: 'Participation in formal & non‑formal education',
          Definition: '% youth/adults trained in past yea',
          Fanaka_metric: '1 200 MSME owners trained in financial & digital skills',
        },
        {
          Target_indicator: 'ICT skills among adults',
          Definition: '% clients achieving digital proficiency',
          Fanaka_metric: '50% scoring ≥70% on e‑learning assessments',
        },
        {
          Target_indicator: 'Functional literacy & numeracy',
          Definition: '% achieving financial literacy benchmarks',
          Fanaka_metric: '+30 pp improvement post-training',
        },
        {
          Target_indicator: 'Mainstreaming education for sustainable development',
          Definition: 'Extent of sustainability modules integrated',
          Fanaka_metric: '100% courses include SDG‑aligned modules',
        },
      ],
    },
    {
      sdg: 'SDG 5: Gender Equality & Women’s Empowerment',
      rows: [
        {
          Target_indicator: 'Women’s secure rights to economic resources',
          Definition: '(a) % women clients owning land; (b) share of women rights‑bearers',
          Fanaka_metric: '17.5% of clients own land; 60.9% of portfolio female-founded',
        },
        {
          Target_indicator: 'Mobile phone ownership by sex',
          Definition: '% female clients with mobile access',
          Fanaka_metric: '100% USSD/mobile app access for women borrowers',
        },
        {
          Target_indicator: 'Women in managerial positions',
          Definition: '% female Field Entrepreneurs and staff',
          Fanaka_metric: '60% of Field Entrepreneurs & 50% senior roles held by women',
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-auto mt-10 w-full px-4">
      <div className="inline-block min-w-full rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-fp text-white">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider">Target – Indicator</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider">Definition</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider">Fanaka Metric</th>
            </tr>
          </thead>
          <tbody>
            {data.map((section, i) => (
              <React.Fragment key={i}>
                <tr className="bg-gray-100">
                  <td colSpan={3} className="px-5 py-4 font-semibold text-flp text-sm uppercase tracking-wide">
                    {section.sdg}
                  </td>
                </tr>
                {section.rows.map((row, j) => (
                  <tr key={j} className={j % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 text-sm text-gray-800">{row.Target_indicator}</td>
                    <td className="px-5 py-4 text-sm text-gray-800">{row.Definition}</td>
                    <td className="px-5 py-4 text-sm text-gray-800">{row.Fanaka_metric}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
