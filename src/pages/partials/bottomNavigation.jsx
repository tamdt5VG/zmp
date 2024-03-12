import React, { useState } from "react";
import { BottomNavigation, Icon, Page } from "zmp-ui";
import { Container } from "react-bootstrap";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const { title } = props;
  return (
    <Container>
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="chat"
          label="Tin Nhắn"
          linkTo="/"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
        />
        <BottomNavigation.Item
          label="Danh bạ"
          key="contact"
          linkTo="hehe"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
        />
        <BottomNavigation.Item
          label="Khám phá"
          key="discovery"
          linkTo=""
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Nhật ký"
          linkTo="hehe"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          linkTo="hehe"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
        />
      </BottomNavigation>
    </Container>
  );
};

export default BottomNavigationPage;
