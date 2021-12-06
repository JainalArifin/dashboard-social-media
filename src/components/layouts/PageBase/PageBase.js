import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { SideBar } from "..";
import Styled from "styled-components";
import { ROUTES } from "~/configs";
import { Breadcrumbs } from "@elements";

const drawerWidth = 240;

const DrawerStyle = Styled(Drawer)`
  box-shadow: 0px 5px 10px 0px #a29e9ead;
  padding-right: 10px;
  height: 100vh;
`;

function PageBase(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const routes = [
    {
      path: ROUTES.USERS(),
      breadcrumb: "Userspage",
    },
    {
      path: ROUTES.USERS(),
      breadcrumb: "Postspage",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Toolbar
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {},
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
        <DrawerStyle
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </DrawerStyle>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Breadcrumbs routes={routes} /> */}
        <Grid>{props.children}</Grid>
      </Box>
    </Box>
  );
}

PageBase.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default PageBase;
