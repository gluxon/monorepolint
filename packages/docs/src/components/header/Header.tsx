/*!
 * Copyright (c) 2018 monorepolint (http://monorepolint.com). All Right Reserved.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 *
 */

import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { FiGithub } from "react-icons/fi";

import { HOME_URL, SOURCE_URL } from "../../utils/constants";
import Classes from "./Header.module.css";

export function Header() {
  return (
    <div className={Classes.header}>
      <div className={Classes.logoContainer}>
        <Link to={HOME_URL}>
          <h3 className={Classes.logo}>monorepolint</h3>
        </Link>
      </div>
      <div className={Classes.links}>
        <a href={SOURCE_URL}>
          <FiGithub className={Classes.gitLogo} color="#F9F9F9" size={30} />
        </a>
      </div>
    </div>
  );
}