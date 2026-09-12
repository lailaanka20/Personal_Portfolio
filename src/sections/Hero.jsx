import Button from '../components/Button';

function Hero() {
  return (
    <section className="w-full relative flex items-center justify-center overflow-hidden h-1/2 py-30">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 100%)',
        }}
      />
      <div
        className="container flex flex-col 
    items-center justify-center gap-10 md:gap-10 relative overflow-hidden"
      >
        <span
          className="border border-(--accent) rounded-3xl text-[10px] md:text-[15px]
     px-2 py-0.5  md:py-1.5 md:px-4 bg-(--accent-dim) text-(--accent)"
        >
          AVAILABLE FOR WORK
        </span>

        <h1 className="text-center text-display flex ">
          <p className=" tracking-wide ">
            I design interfaces and
            <span className="text-(--accent) "> build them.</span>
          </p>
        </h1>
        <p className="text-(--text-secondary) text-center text-sm md:text-lg  max-w-lg mx-auto mb-10">
          UX/UI Designer & Frontend Developer. I turn ideas into fast,
          accessible web experiences.
        </p>
        <div className="flex w-fit gap-5">
          <Button text="Download CV" variant="primary">
            Download
          </Button>
          <Button text="view projects" variant="secondary">
            Download
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
