import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
import React from 'react';

const NavbarHeader = React.createClass({
  render() {
    return (
      <Navbar toggleNavKey={0} fluid={true}>
        <NavBrand>EMCC</NavBrand>
        <Nav right eventKey={0}>
          <NavItem eventKey={1} href="#">首页</NavItem>
          <NavItem eventKey={2} href="#">宣传片</NavItem>
          <NavItem eventKey={3} href="#">最新资讯</NavItem>
          <NavItem eventKey={4} href="#">产品中心</NavItem>
          <NavItem eventKey={5} href="#">纪念册</NavItem>
          <NavItem eventKey={6} href="#">教学服务</NavItem>
          <NavItem eventKey={3} href="#">影视服务</NavItem>
          <NavItem eventKey={3} href="#">教学套餐</NavItem>
          <NavItem eventKey={3} href="#">联系我们</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

export default NavbarHeader;
