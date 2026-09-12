function Tag({ tag, variant, moreProp = '' }) {
  const variants = {
    tech: 'bg-(--accent-dim) border-(--accent-border) text-(--text-muted)',
    live: 'bg-[rgba(31,118,60,0.28)] border-[rgb(74,240,128,0.6)] text-[rgb(74,240,128)]',
    wip: 'bg-[rgb(251,176,36,0.0784)] border-[rgb(251,176,36,0.6)] text-[rgb(251,176,36)]',
    category: 'bg-(--bg-tertiar) border-2 border-(--border)',
  };
  const dotColors = {
    live: 'bg-[rgb(34,221,97)]',
    wip: 'bg-[rgb(251,176,36)]',
  };

  return (
    <div
      className={`border-[0.75px] text-[11px] md:text-md font-bold rounded-3xl flex justify-between items-center w-fit px-2 ${moreProp} ${variants[variant]}`}
    >
      {/* {showDot && (
        <span className={`rounded-full p-1 ${dotColors[variant]}`}></span>
      )} */}
      {
        <span
          className={`${dotColors[variant] ? 'rounded-full p-0.75 mr-0.75' : ''} ${dotColors[variant]}`}
        ></span>
      }
      {tag}
    </div>
  );
}

export default Tag;
