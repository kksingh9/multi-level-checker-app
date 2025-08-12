import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigate = ({ currentStep = 1, totalSteps = 3, onBack, onNext }) => {
  const canBack = currentStep > 1;
  const canNext = currentStep < totalSteps;

  return (
    <div className="w-full h-16 bg-white flex items-center justify-between rounded-t-2xl px-4">
      <div className="gap-4 flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={!canBack}
          className={`cursor-pointer inline-flex items-center gap-2 text-gray-700 bg-white border text-sm font-medium px-4 py-2 rounded-lg ${
            canBack
              ? 'hover:text-gray-900 hover:border-gray-800 border-gray-700'
              : 'opacity-50 cursor-not-allowed border-gray-300'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="text-gray-900 font-semibold">Select type</h1>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={onNext}
          disabled={!canNext}
          className={`cursor-pointer inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-sm text-white ${
            canNext ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
          }`}
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Navigate;