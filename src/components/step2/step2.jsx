import { useCallback, useState } from "react";
import { categories } from "../../constants/mockedData";
import TriStateCheckbox from "./tristatecheckbox";
import { ChevronRight } from "lucide-react";
import { collectLeafIds } from "./nodeState";
import Heading from "../heading";
import Table from "./table";
import { computeNodeState } from "./nodeState";

const Step2 = ({ currentStep }) => {
  const [selectedByCategory, setSelectedByCategory] = useState(() => {
    return {
      cat1: new Set(),
      cat2: new Set(),
      cat3: new Set(),
    };
  });

  const [expanded, setExpanded] = useState(
    () => new Set(["office-1", "office1-team-1"])
  );

  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const setMany = (categoryId, leafIds, shouldSelect) => {
    setSelectedByCategory((prev) => {
      const next = { ...prev, [categoryId]: new Set(prev[categoryId]) };
      for (const id of leafIds) {
        if (shouldSelect) next[categoryId].add(id);
        else next[categoryId].delete(id);
      }
      return next;
    });
  };

  const toggleNodeForCategory = useCallback((node, categoryId, shouldSelect) => {
    if (node.type === "person") {
      setMany(categoryId, [node.id], shouldSelect);
    } else {
      const leaves = collectLeafIds(node);
      setMany(categoryId, leaves, shouldSelect);
    }
  },[]);

  const renderRow = (node, depth = 0) => {
    const isGroup = node.type !== "person";

    return (
      <tr key={node.id} className="border-b border-gray-100 ">
     
        <td className="py-3 pl-4 pr-3 border-r-1 border-gray-100">
          <div
            className="flex items-center gap-3"
            style={{ paddingLeft: depth * 16 }}
          >
            {!isGroup ? (
              
              <span className="h-8 w-8 grid place-items-center rounded-full bg-gray-100 text-base">
                {node.avatar || "👤"}
              </span>
            ):null}
            <div>
              <div className="text-sm font-medium text-gray-900">
                {node.label}
              </div>
              {node.subtitle && (
                <div className="text-xs text-gray-500">{node.subtitle}</div>
              )}
            </div>
            {isGroup ? (
              <button
                onClick={() => toggleExpand(node.id)}
                className="h-6 w-6 grid place-items-center rounded hover:bg-gray-100 text-gray-600"
                aria-label={expanded.has(node.id) ? "Collapse" : "Expand"}
              >
                <span
                  className={`cursor-pointer transition-transform ${
                    expanded.has(node.id) ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight size={16} />
                </span>
              </button>
            ) : null}
          </div>
        </td>
        {categories.map((cat) => {
          const state = computeNodeState(node, cat.id, selectedByCategory);
          return (
            <td key={cat.id} className={`py-3 px-3 border-r-1 border-gray-100  `}  >
              <div style={{ marginLeft: depth * 36 }} className="flex justify-center">
              <TriStateCheckbox
                state={state}
                onToggle={(shouldSelect) =>
                  toggleNodeForCategory(node, cat.id, shouldSelect)
                }
              />
              </div>
            </td>
          );
        })}
      </tr>
    );
  };

  const renderTree = (nodes, depth = 0) => {
    return nodes.flatMap((node) => {
      const row = renderRow(node, depth);
      if (node.children && node.children.length > 0 && expanded.has(node.id)) {
        return [row, ...renderTree(node.children, depth + 1)];
      }
      return [row];
    });
  };
  //console.log(renderTree(demoTree));

  return (
    <section>
      <Heading currentStep={currentStep} />
      <div className="w-full mt-4 rounded-t-xl  overflow-auto h-[calc(100vh-333px)] relative">
        <Table renderTree={renderTree} />
      </div>
    </section>
  );
};

export default Step2;
