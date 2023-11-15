
import React from "react";
import styles from '@/styles/Home.module.scss';
import Link from "next/link";

interface Props{
  setToggle: any
}

const Header:React.FC<Props> = (props: any) => {
  const {setToggle} = props;

  return (
    <div className={styles.headerDiv}>
      <div className={styles.imageHeader}>
        <h1 className={styles.heading}>Rakesh Chintada.</h1>
      </div>
      <ul className={styles.sectionHeader}>
        <li onClick={() => setToggle('About')} className={styles.sections}>About</li>
        <li onClick={() => setToggle('Experience')} className={styles.sections}>Experience</li>
        <li onClick={() => setToggle('Projects')} className={styles.sections}>Projects</li>
        <li onClick={() => setToggle('Contact')} className={styles.sections}>Contact</li>
        <li className={styles.sections}>
      <Link className={styles.sections} href="/api/auth/login">Login</Link>
      </li> 
      {/* <li className={styles.sections}><a className={styles.sections} href="/api/auth/logout">Logout</a></li> */}
      </ul> 
    </div> 
  );
};

export default Header;
