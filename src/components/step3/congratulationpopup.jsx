import { motion } from 'motion/react'

 const CongratulationsPopUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-center">Congratulations! 🎉</h3>
      </div>
    </motion.div>
  );
};

export default CongratulationsPopUp;
