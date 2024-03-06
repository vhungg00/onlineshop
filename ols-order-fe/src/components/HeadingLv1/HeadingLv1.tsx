import React from "react";
import styles from './headingLv1.module.scss';

export const HeadingLv1: React.FC<{children: React.ReactNode}> = ({children}) => {
 return <div className={styles.headingLv1}>
    <h1 className={styles.title}>
        {children}
    </h1>
 </div>
}