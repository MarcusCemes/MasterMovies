import { Icon } from "antd";
import classnames from "classnames";
import React, { FunctionComponent, useState, useEffect } from "react";

import { socialLinks } from "../../../config";
import styles from "./left.module.css";

export const ContactCardLeft: FunctionComponent = React.memo(() => {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <div className={classnames(styles.container, { [styles.show]: show })}>
      <h1 className={styles.stagger} style={{ transitionDelay: "0.2s" }}>
        Leave me a <b>message</b>.
      </h1>
      <p
        className={styles.stagger}
        style={{ transitionDelay: "0.3s" }}
      >
        Find me on one of my social profiles
      </p>

      <p
        className={styles.stagger}
        style={{ transitionDelay: "0.4s" }}
      >
        {socialLinks.map(link => (
          <a
            className={styles.socialLink}
            key={link.text}
            href={link.link}
            target="_blank"
          >
            <Icon type={link.icon} />
          </a>
        ))}
      </p>
    </div>
  );
});