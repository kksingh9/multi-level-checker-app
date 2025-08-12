import { Info } from "lucide-react";
import { demoTree, categories } from "../../constants/mockedData";
const Table = ({ renderTree }) => {
  return (
    <>
      <table className="w-full min-w-[600px]">
        <thead className="sticky z-10 top-0 bg-gray-50">
          <tr>
            <th className="py-3 pl-4 pr-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-r-0 border-gray-600">
              Name
            </th>
            {categories.map((cat) => (
              <th
                key={cat.id}
                className="py-3 px-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-r-0 border-gray-600"
              >
                <div className="flex gap-0.5 items-center">
                  {cat.label}
                  <span className="text-gray-400 ml-1 cursor-pointer">
                    <Info size={14} strokeWidth={2} />
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTree(demoTree)}</tbody>
      </table>
    </>
  );
};

export default Table;
