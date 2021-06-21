import { MobileViewContext } from '../main';
import { Pages } from '../module';
import { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Affix, Button } from "antd";
import { UserSwitchOutlined } from '@ant-design/icons';
import { AnimatedSwitch, spring } from 'react-router-transition';

export default function Body({ projects }) {
  const { showDrawer, setDrawer, mobileView } = useContext(MobileViewContext);

  const mobileSidebarBtn =
    <Affix offsetTop={60}>
      <Button size="large"
        icon={<UserSwitchOutlined />}
        onClick={() => setDrawer(!showDrawer)} />
    </Affix>


  /* -- Page transitions -- */
  // src: http://maisano.github.io/react-router-transition/animated-switch
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 100, // transition speed
      damping: 15, // bounciness
    });
  }

  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

  return (
    <>

      {/* Mobile sidebar btn */}
      {mobileView ? mobileSidebarBtn : null}

      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper body"
      >
        <Route exact path="/" render={() =>
          <Pages.Home className='page' />}
        />
        <Route exact path="/Background" render={() =>
          <Pages.Background className='page' />}
        />
        <Route exact path="/Portfolio" render={() =>
          <Pages.Portfolio projects={projects} className='page' />}
        />
      </AnimatedSwitch>
    </>
  )
}