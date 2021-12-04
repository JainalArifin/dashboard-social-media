import React from "react";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import menuData from "~/utils/menuData";
import Styled from "styled-components";

const ListItemStyled = Styled(ListItem)`
  background-color: ${(props) => (props.activeLink ? "#04a4a4ab" : "none")};
  border-left: ${(props) =>
    props.activeLink ? "6px solid #04A4A4 !important" : "none"} ;
  border-radius: 0 20px 20px 0 ;
  color: ${(props) => (props.activeLink ? "white" : "black")};
  &:hover {
    background-color: #04a4a466;
  }
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
      <Toolbar />
      <Divider />
      <List>
        {menuData.map((item, index) => (
          <ListItemStyled button key={index} activeLink={activeLink(item.url)}>
            <ListItemIcon>
              <item.icon
                style={{
                  color: activeLink(item.url) && "white",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemStyled>
        ))}
      </List>
    </div>
  );
}
