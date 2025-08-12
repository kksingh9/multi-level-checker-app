import { useMemo, useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { initialRows } from "../../constants/mockedData";
import { getInitials } from "../../utility/getInitials";
import { SortIcon } from "./SortIcon";
import CongratulationsPopUp from "./congratulationpopup";
import Table from "../ui/table";
import Heading from "../heading";

const Step3 = ({currentStep}) => {
  const [sort, setSort] = useState({ key: "name", direction: "asc" });
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    setShowCongratulations(true);

    const timer = setTimeout(() => {
      setShowCongratulations(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const requestSort = (key) => {
    setSort((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const rows = useMemo(() => {
    const sorted = [...initialRows];
    const { key, direction } = sort;
    sorted.sort((a, b) => {
      const aVal = String(a[key] ?? "");
      const bVal = String(b[key] ?? "");
      const cmp = aVal.localeCompare(bVal, undefined, {
        numeric: true,
        sensitivity: "base",
      });
      return direction === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [sort]);

  const renderYesNo = (value) => (value ? "Yes" : "No");

  const headerCell = (label, key) => (
    <th
      scope="col"
      className="px-4 py-3 text-left text-xs font-medium text-gray-600 select-none cursor-pointer"
      onClick={() => requestSort(key)}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        <SortIcon active={sort.key === key} direction={sort.direction} />
      </span>
    </th>
  );

  return (
    <>
      <section>
        <Heading currentStep={currentStep}/>
        <div className="mt-4 rounded-t-xl  overflow-y-auto h-[calc(100vh-330px)] bg-white relative">
          <Table
            headerCell={headerCell}
            rows={rows}
            getInitials={getInitials}
            renderYesNo={renderYesNo}
          />
        </div>
      </section>
      <AnimatePresence>
        {showCongratulations && <CongratulationsPopUp />}
      </AnimatePresence>
    </>
  );
};

export default Step3;
