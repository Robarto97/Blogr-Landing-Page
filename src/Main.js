const Main = () => {
  return (
    <main>
      <section className="design">
        <h2>Designed fo the future</h2>
        <div className="content">
          <article>
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </article>
          <article>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </article>
        </div>
        <div className="img-wrapper"></div>
      </section>
      <section className="state-art">
        <div className="img-wrapper"></div>
        <article>
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </article>
      </section>
      <section className="tools">
        <div className="img-wrapper"></div>
        <div className="content">
          <article>
            <h2>Free, open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </article>
          <article>
            <h2>Powerful tooling</h2>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;
