import React from 'react'
import styles from './scheduleDemo.module.css' 
const ScheduleDemo = () => {
  return (
    <div className={styles.demo_container}>
      <div className={styles.container_heading}>
        <p>
          Our software platform empowers<strong> scientists,</strong>
          <br /> <strong>researchers and labs </strong> to get realtime
          <br /> <strong>parameters</strong>
        </p>

        <button>Schedule demo</button>
      </div>
    </div>
  );
}

export default ScheduleDemo 