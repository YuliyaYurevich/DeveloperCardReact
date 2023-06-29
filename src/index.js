import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const skillsData = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: 'green',
  },

  {
    skill: 'JavaScript',
    level: 'intermidiate',
    color: 'yellow',
  },

  {
    skill: 'React',
    level: 'beginner',
    color: 'red',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/img_1888.jpg" alt="Yuliya" className="avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h2>Yuliya</h2>
      <p>Info about Yuliya</p>
    </div>
  );
}

function SkillList() {
  const skills = skillsData;
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const emoji =
    skillObj.level === 'beginner'
      ? '👏'
      : skillObj.level === 'intermidiate'
      ? '👍'
      : skillObj.level === 'advanced'
      ? '❤'
      : null;

  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill + emoji}
    </li>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
