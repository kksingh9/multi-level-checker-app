import { steps } from '../constants/mockedData'

const Sidebar = ({ activeStep = 1 }) => {
  return (
    <aside className="w-72 border-r border-gray-100 p-6">
      <ol className="space-y-6">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep;
          const isCompleted = step.id < activeStep;

          return (
            <li key={step.id} className={`flex items-start gap-3 p-1.5 rounded-[5px] ${isActive? "bg-blue-50":""}`}>
              <div className="relative">
                <div
                  className={
                    "h-9 w-9 rounded-full grid place-items-center text-sm font-semibold " +
                    (isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : isCompleted
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-gray-50 text-gray-500 border border-gray-200")
                  }
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-9 -translate-x-1/2 h-6 w-px bg-gray-200" />
                )}
              </div>
              <div className="mt-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-blue-900" : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default Sidebar;
