import React from "react";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import menuData from "~/utils/menuData";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT,
  COLOR_PRIMARY_LIGHT2,
  COLOR_ERROR,
} from "~/styles";

const ListItemStyled = Styled(ListItem)`
  background-color: ${(props) =>
    props.activeLink ? `${COLOR_PRIMARY_LIGHT2}` : "none"};
  border-left: ${(props) =>
    props.activeLink ? `6px solid ${COLOR_PRIMARY} !important` : "none"} ;
  border-radius: 0 20px 20px 0 ;
  color: ${(props) => (props.activeLink ? "white" : "black")};
  &:hover {
     background-color: ${(props) =>
       props.activeLink ? `${COLOR_PRIMARY_LIGHT2}` : `${COLOR_PRIMARY_LIGHT}`};
  }
`;

const LinkStyled = Styled(Link)`
  text-decoration: none
`;

export default function SideBar() {
  const activeLink = (url) => {
    // eslint-disable-next-line no-unused-expressions
    if (window.location.pathname.includes(url)) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <Toolbar>
        <h2 style={{ color: COLOR_ERROR, fontWeight: "bold" }}>
          So.<span style={{ color: COLOR_PRIMARY }}>media</span>
        </h2>
      </Toolbar>
      {/* <Typography variant="h6">jajal</Typography> */}
      {/* <h2>So.Media</h2> */}
      <Divider />
      <List>
        {menuData.map((item, index) => (
          <LinkStyled to={item.url}>
            <ListItemStyled
              button
              key={index}
              activeLink={activeLink(item.url)}
            >
              <ListItemIcon>
                <item.icon
                  style={{
                    color: activeLink(item.url) && "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemStyled>
          </LinkStyled>
        ))}
      </List>
    </div>
  );
}
