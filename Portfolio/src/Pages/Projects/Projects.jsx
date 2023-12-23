import data from '../../data.json';

function Project() {
    const { projects } = data;
  return (
    <section className="my-8">
      {projects.map((project, index) => (
        <div key={index} >
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} className="w-full h-auto rounded-md" style={{width: "50%"} } />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to view the project
          </a>
        </div>
      ))}
    </section>
  );
}

export default Project;