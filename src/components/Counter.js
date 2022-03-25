import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = (props) => (
  <>
    <CountUp end={props.num} redraw={true} >
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
  </>
);

export default Counter;