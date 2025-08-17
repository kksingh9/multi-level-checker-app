import { steps } from '../constants/mockedData'
import { Check } from 'lucide-react';

const Sidebar = ({ activeStep = 1 }) => {
  return (
    <aside className="w-72 border-r border-gray-100 p-6">
      <ol className="space-y-6">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep;
          const isCompleted = step.id < activeStep;

          return (
            <li key={step.id} className={`flex items-start gap-3 p-1.5 rounded-[5px] ${isActive? "bg-[#f5f9ff]":""}`}>
              <div className="relative">
                <div
                  className={
                    "h-9 w-9 rounded-full grid place-items-center text-sm font-semibold " +
                    (isActive
                      ? "bg-blue-50 text-[#2d8eff] border border-[#2d8eff]"
                      : isCompleted
                      ? "bg-[#00b663] text-[#00b663] border border-[#00b663]"
                      : "bg-gray-100 text-gray-600 border border-gray-100")
                  }
                >
                  {isCompleted ? <Check className="w-5.5 h-5.5 text-white" strokeWidth={3} />:step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`absolute left-1/2 top-10.5 -translate-x-1/2 h-6 w-px ${isActive?"bg-[#2d8eff]" : isCompleted ? "bg-[#00b663]": "bg-gray-300"}`} />
                )}
              </div>
              <div className="mt-[8px]">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-[#2d8eff]" : isCompleted? "text-[#00b663]": "text-gray-600"
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
