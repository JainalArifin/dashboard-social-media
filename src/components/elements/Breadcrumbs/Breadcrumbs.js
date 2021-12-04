import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import styled from "styled-components";
import kebabCase from "voca/kebab_case";
// import {
//   COLOR_BREADCRUMB,
//   COLOR_PRIMARY,
//   COLOR_PRIMARY_LIGHT,
// } from "@codex-by-telkom/component-library.styles.css";
// import { ArrowRight } from "@codex-by-telkom/component-library.assets.icons";
import PropTypes from "prop-types";

const Link = styled.a`
  display: inline-block;
  font-family: Ubuntu, Arial;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.09rem;
  ${"" /* color: ${COLOR_PRIMARY}; */}
  ${"" /* color: blue; */}
  text-transform: capitalize;
  margin-right: 8px;

  :hover {
    cursor: pointer;
    ${"" /* color: ${COLOR_PRIMARY_LIGHT}; */}
  }
`;

export default function Breadcrumbs({
  handleClick,
  routes = [],
  handleLinkRedirect,
}) {
  const breadcrumbs = useBreadcrumbs(routes).filter(
    ({ breadcrumb }) => breadcrumb.props.children !== "Pool-data"
  );

  const _handleLinkRedirect = (url) => {
    if (!handleLinkRedirect) {
      return url;
    }
    return handleLinkRedirect(url);
  };

  return (
    <div style={{ display: "inline-block" }}>
      {breadcrumbs.map(({ breadcrumb, match: { url }, key }, index) => {
        const _breadcrumb =
          typeof breadcrumb.type === "function"
            ? breadcrumb
            : breadcrumb.props.children.replace(/-/g, " ");

        return (
          <span key={key}>
            {index < breadcrumbs.length - 1 ? (
              <Link
                data-testid={`link-${kebabCase(_breadcrumb)}`}
                onClick={() => handleClick(_handleLinkRedirect(url))}
              >
                {_breadcrumb}
              </Link>
            ) : (
              <span
                data-testid={`link-${kebabCase(_breadcrumb)}`}
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  spacing: "0.09rem",
                }}
              >
                {_breadcrumb}
              </span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span
                style={{
                  display: "inline-block",
                  width: 16,
                  height: 16,
                  // color: COLOR_BREADCRUMB,
                  verticalAlign: "sub",
                  marginRight: 8,
                }}
              >
                {" "}
                {"<-"}{" "}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

Breadcrumbs.propTypes = {
  handleClick: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      breadcrumb: PropTypes.string,
    })
  ),
  handleLinkRedirect: PropTypes.func,
};
