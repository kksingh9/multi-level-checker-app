import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Navigate from "../components/navigate";
import { renderStep } from "../components/renderStep";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Layouts = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const totalSteps = 3;
  
    const goNext = () => setCurrentStep((s) => Math.min(totalSteps, s + 1));
    const goBack = () => setCurrentStep((s) => Math.max(1, s - 1));
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 ">
        <Header />
        <main className="flex-1 ">
          <div className="mx-auto max-w-full p-4">
             <div className="bg-white rounded-2xl border border-gray-200 h-[calc(100vh-160px)]">
               <Navigate
                 currentStep={currentStep}
                 totalSteps={totalSteps}
                 onBack={goBack}
                 onNext={goNext}
               />
              <div className="border border-gray-200 m-4 mt-0 rounded-2xl h-[calc(100vh-240px)]">
                <div className="flex w-full h-full">
                  {isDesktop && <Sidebar activeStep={currentStep} />}
                   <div className="flex-1 p-4 pb-0 overflow-auto">
                     {renderStep(currentStep)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
} 

export default Layouts;