import Tag from '../components/Tag';

function About() {
  return (
    <section id="about" className="bg-(--bg-secondary) py-15">
      <div className="container w-full ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-18 ">
          <div className="min-w-75 h-85 mx-auto rounded-2xl bg-(--bg-tertiary) flex items-center justify-center">
            <span className="text-(--text-muted)">Photo</span>
          </div>
          <div className="flex-col items-center justify-between md:p-10 text-center lg:text-left h-fit">
            <h2 className="text-(--accent) text-xl font-bold mb-4">About</h2>
            <h2 className="text-h2 my-6">
              Designer who codes, developer who designs.
            </h2>
            <p className="text-(--text-secondary) lg:max-w-full text-[12px] md:text-lg mb-6 text-center lg:text-left">
              I'm Layla, a UX/UI designer and frontend developer based in
              Masyaf.I focus on building interfaces that are both visually sharp
              and technically solid—designing in Figma and bringing them to life
              in React.
            </p>
            <span className="text-(--text-muted) text-label px-1 py-10">
              Currently Learning
            </span>
            <div className="flex flex-wrap gap-1.5 items-center justify-center mt-3 lg:mt-0 lg:justify-start">
              <Tag tag="React" variant="tech" showDot={false}></Tag>
              <Tag tag="Figma" variant="tech" showDot={false}></Tag>
              <Tag tag="UX Resxearch" variant="tech" showDot={false}></Tag>
              <Tag
                tag="LLM App Development"
                variant="tech"
                showDot={false}
              ></Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
