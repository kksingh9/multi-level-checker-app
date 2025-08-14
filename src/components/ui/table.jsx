import { categories } from "../../constants/mockedData";

const Table = ({ headerCell, rows, getInitials, renderYesNo }) => {
  return (
    <>
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
          <tr>
            {headerCell("User", "name")}
            {headerCell("Office", "office")}
            {headerCell("Team", "team")}
            {categories.map((item) => (
              <th
                key={item.id}
                className="px-4 py-3 text-left text-xs font-medium text-gray-600 border-r-0 border-gray-100"
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 ">
              <td className="px-4 py-3 border-r-1 border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    {getInitials(row.name)}
                  </span>
                  <span className="text-sm text-gray-900">{row.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 border-r-1 border-gray-100">
                {row.office}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 border-r-1 border-gray-100">
                {row.team}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 border-r-1 border-gray-100">
                {renderYesNo(row.cat1)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 border-r-1 border-gray-100">
                {renderYesNo(row.cat2)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 border-r-1 border-gray-100">
                {renderYesNo(row.cat3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
