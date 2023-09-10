import { useState } from 'react';

const TutorProfile = () => {
  // Tutor modelinin her bir alanı için state tanımlayın
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');
  const [education, setEducation] = useState([
    {
      university: '',
      department: '',
      startDate: '',
      endDate: '',
    },
  ]);
  const [experience, setExperience] = useState([
    {
      workplace: '',
      position: '',
      startDate: '',
      endDate: '',
    },
  ]);
  const [subjects, setSubjects] = useState('');

  return (
    <div className="tutor-profile">
      <h1>Tutor Profile</h1>

      {/* Email Input */}
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Name Input */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Last Name Input */}
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Phone Input */}
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* About Input */}
      <div>
        <label>About:</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </div>

      {/* Education Input */}
      <div>
        <label>Education:</label>
        {education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="University"
              value={edu.university}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].university = e.target.value;
                setEducation(newEducation);
              }}
            />
            <input
              type="text"
              placeholder="Department"
              value={edu.department}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].department = e.target.value;
                setEducation(newEducation);
              }}
            />
            <input
              type="date"
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].startDate = e.target.value;
                setEducation(newEducation);
              }}
            />
            <input
              type="date"
              placeholder="End Date"
              value={edu.endDate}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].endDate = e.target.value;
                setEducation(newEducation);
              }}
            />
          </div>
        ))}
        <button onClick={() => setEducation([...education, {}])}>
          Add Education
        </button>
      </div>

      {/* Experience Input */}
      <div>
        <label>Experience:</label>
        {experience.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Workplace"
              value={exp.workplace}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].workplace = e.target.value;
                setExperience(newExperience);
              }}
            />
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].position = e.target.value;
                setExperience(newExperience);
              }}
            />
            <input
              type="date"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].startDate = e.target.value;
                setExperience(newExperience);
              }}
            />
            <input
              type="date"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].endDate = e.target.value;
                setExperience(newExperience);
              }}
            />
          </div>
        ))}
        <button onClick={() => setExperience([...experience, {}])}>
          Add Experience
        </button>
      </div>

      {/* Subjects Input */}
      <div>
        <label>Subjects:</label>
        <input
          type="text"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TutorProfile;
