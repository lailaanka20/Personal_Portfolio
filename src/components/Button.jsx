function Button({ text, variant = 'primary', onClick }) {
  const variants = {
    primary: 'bg-(--accent) text-white hover:bg-(--accent-hover)',
    secondary:
      'border-2 border-(--accent) bg-transparent text-(--accent) hover:bg-(--accent-dim)',
    ghost: 'bg-transparent text-(--text-secondary) hover:text-(--text-primary)',
  };
  return (
    <button
      className={`
        flex items-center round-btn  py-3 px-8
        ${variants[variant]}
        `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
