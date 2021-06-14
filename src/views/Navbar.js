import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Steps } from "antd";
const { Step } = Steps;

import '../styles/navbar.scss';

export default function Navbar() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Steps
        type="navigation"
        current={current}
        onChange={(step) => setCurrent(step)}
        className="nav"
      >
        <Step title={<NavLink exact to="/">Home</NavLink>} />

        <Step title={<NavLink to="/portfolio">Portfolio</NavLink>} />

        <Step title={<NavLink to="/background">Background</NavLink>} />
      </Steps>
    </>
  );
}
