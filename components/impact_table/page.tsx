'use client';

export default function FancyTable() {
  const users = [
    { Target_indicator: 'John Doe', Definition: 'john@example.com', Fanaka_metric: 'Active' },
    { Target_indicator: 'Jane Smith', Definition: 'jane@example.com', Fanaka_metric: 'Inactive' },
    { Target_indicator: 'Michael Johnson', Definition: 'michael@example.com', Fanaka_metric: 'Active' },
    { Target_indicator: 'Emily Davis', Definition: 'emily@example.com', Fanaka_metric: 'Pending' },
  ];

  return (
    <div className="overflow-x-auto mt-10 w-full">
      <div className="inline-block min-w-full rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead className="bg-flp text-white w-full">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Target – Indicator
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Definition
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Fanaka Metric
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-70'}
              >
                <td className="px-5 py-5 text-sm">{user.name}</td>
                <td className="px-5 py-5 text-sm">{user.email}</td>
                <td className="px-5 py-5 text-sm">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
