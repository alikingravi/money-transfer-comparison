import { AlertCircle } from "lucide-react";

export const ErrorPage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      className="w-full max-w-3xl mx-auto mt-12 p-8 rounded-2xl
        bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900
        dark:to-red-800 shadow-lg flex flex-col items-center text-center"
    >
      <div className="p-4 rounded-full bg-red-200 dark:bg-red-700 mb-4">
        <AlertCircle
          className="h-12 w-12 text-red-600 dark:text-red-300 animate-pulse"
        />
      </div>

      <h3
        className="text-xl sm:text-2xl font-semibold text-red-700
          dark:text-red-100 mb-2"
      >
        Something Went Wrong
      </h3>

      <p className="text-red-500 dark:text-red-300 mb-6">
        {message ||
          "We encountered an unexpected error. Please try again later."}
      </p>
    </div>
  );
};
