function Tag({ tag, variant, showDot = false }) {
  const variants = {
    tech: 'bg-(--accent-dim) border border-(--accent-border)',
    live: 'bg-[rgb(74,240,128,0.2784)] border border-[rgb(74,240,128,0.6)]',
    wip: 'bg-[rgb(251,176,36,0.0784)] border border-[rgb(251,176,36,0.6)]',
    category: 'bg-(--bg-tertiar) border-2 border-(--border)',
  };
  const dotColors = {
    live: 'bg-[rgb(34,221,97)]',
    wip: 'bg-[rgb(251,176,36)]',
  };

  return (
    <div
      className={` rounded-3xl flex justify-between items-center gap-1.5 px-3 py-0.5 mr-3 my-6 w-fit ${variants[variant]}`}
    >
      {showDot && (
        <span className={`rounded-full p-1 ${dotColors[variant]}`}></span>
      )}
      {tag}
    </div>
  );
}

export default Tag;
