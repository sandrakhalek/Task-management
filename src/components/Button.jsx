function Button({ label, ...props }) {
  return (
    <button className="text-stone-400 text-xs md:text-base bg-stone-700 py-2 px-4 rounded-md hover:bg-stone-600 hover:text-stone-100" {...props}>
      {label}
    </button>
  );
}

export { Button };
