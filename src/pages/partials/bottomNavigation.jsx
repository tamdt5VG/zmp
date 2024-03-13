import React, { useState } from "react";
import { BottomNavigation, Icon, Page } from "zmp-ui";
import { Container } from "react-bootstrap";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("index");
  const { title } = props;
  return (
    <Container>
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="discover"
          label="Khám phá"
          linkTo="/"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid" />}
        />
        <BottomNavigation.Item
          label="Tìm kiếm"
          key="search"
          linkTo="hehe"
          icon={<Icon icon="zi-search" />}
          activeIcon={<Icon icon="zi-search" />}
        />
        <BottomNavigation.Item
          label="Trang chủ"
          key="index"
          linkTo="/"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
        />
        <BottomNavigation.Item
          key="cart"
          label="Giỏ hàng"
          linkTo="/cart"
          icon={<Icon icon="zi-calendar" />}
          activeIcon={<Icon icon="zi-calendar" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          linkTo="hehe"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user" />}
        />
      </BottomNavigation>
    </Container>
  );
};

export default BottomNavigationPage;
