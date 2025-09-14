import { DatabaseZap } from "lucide-react";

export const NoData: React.FC = () => {
  return (
    <div
      className="w-full max-w-3xl mx-auto mt-12 p-8 rounded-2xl
        bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800
        dark:to-gray-900 shadow-lg flex flex-col items-center text-center"
    >
      <div className="p-4 rounded-full bg-gray-200 dark:bg-gray-700 mb-4">
        <DatabaseZap
          className="h-12 w-12 text-gray-400 dark:text-gray-300 animate-bounce"
        />
      </div>

      <h3
        className="text-xl sm:text-2xl font-semibold text-gray-700
          dark:text-gray-100 mb-2"
      >
        No Comparison Data
      </h3>

      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Sorry, we couldn’t find any providers for this currency pair at the
        moment. Try changing your selection or check back later.
      </p>
    </div>
  );
};
