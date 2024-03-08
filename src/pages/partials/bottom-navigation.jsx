import React , { useState }from 'react';
import {
  Page, BottomNavigation , Icon, Text
} from 'zmp-ui';

const BotNav = () => {
  const [activeTab, setActiveTab] = useState("index");

  return (
    <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => {
          setActiveTab(key)
        }}
      >
        <BottomNavigation.Item
          key="index"
          label="Trang chủ"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
        />
        <BottomNavigation.Item
          label="Danh mục"
          key="hehe"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid-solid" />}
        />
        <BottomNavigation.Item
          label="Giỏ hàng"
          key="cart"
          icon={<Icon icon="zi-add-story" />}
          activeIcon={<Icon icon="zi-add-story" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
        />
      </BottomNavigation>
  );
}
export default withRouter(BotNav);