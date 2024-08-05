const CustomLoading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center my-5 bg-white">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-purple-300 rounded-full animate-bounce"></div>
    </div>
  );
};

export default CustomLoading;
