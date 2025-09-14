const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-6 flex flex-col items-center
        justify-center h-50"
    >
      <div
        className="mb-2 text-3xl font-extrabold tracking-tight bg-gradient-to-r
          from-purple-600 via-pink-500 to-red-500 dark:from-cyan-400
          dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent
          hover:scale-105 transition-transform duration-300 py-4"
      >
        Money Transfer
      </div>
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Money Transfer Comparison App. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
