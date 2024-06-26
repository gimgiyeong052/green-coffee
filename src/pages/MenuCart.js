import React, { useEffect, useState } from "react";
import { getCartList } from "../api/menuAxios";
import MenuCartItems from "../components/menucart/MenuCartItems";
import { MenuCartWrap } from "../styles/MenuCartStyle";
import ChangeOption from "../components/menucart/ChangeOption";

const MenuCart = () => {
  const [menuCartData, setMenuCartData] = useState([]);
  const [payload, setPayload] = useState([
    {
      cartmenu_id: menuCartData.cartmenu_id,
      name: menuCartData.name,
      img: menuCartData.menu?.menu_imgurl,
      ice: menuCartData.ice,
      shot: menuCartData.shot,
      cream: menuCartData.cream,
      quantity: menuCartData.quantity,
      menu_price: menuCartData.menu_price,
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(payload.quantity);
  const openChangeOption = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    getCartList(setMenuCartData);
  }, []);

  console.log(menuCartData);
  return (
    <MenuCartWrap>
      <div className="mypage_menu_cart">
        <div className="store_title">대구 중구 중앙로점</div>
        <MenuCartItems
          menuCartData={menuCartData}
          openChangeOption={openChangeOption}
        />
      </div>

      {modalOpen && <ChangeOption setShowModal={setModalOpen} />}
    </MenuCartWrap>
  );
};

export default MenuCart;
