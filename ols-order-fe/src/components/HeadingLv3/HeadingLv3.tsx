import React from "react";
import styles from './headingLv3.module.scss';

export const HeadingLv3: React.FC<{children: React.ReactNode}> = ({children}) => {
 return <div className={styles.headingLv3}>
    <h1 className={styles.title}>
        {children}
    </h1>
 </div>
}