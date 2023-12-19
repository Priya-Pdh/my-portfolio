import data from '../../data.json';
function Education() {
    const { education} = data;
    return (
      <section >
        <h2 >Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <div >
              <img src={edu.logo} alt={edu.name}  />
              <div>
                <p >{edu.name}</p>
                <p >{edu.subject}</p>
              </div>
            </div>
            <a
              href={edu.website}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Visit {edu.name}
            </a>
          </div>
        ))}
      </section>
    );
  }
  
  export default Education;
  