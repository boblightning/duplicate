import React, { useEffect, useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup
} from "reactstrap";
import "./InputSearch.css"

const InputSearch = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  const renderBtnDropdown = () => {
    return (
      <ButtonDropdown toggle={toggle} isOpen={visible}>
        <DropdownToggle
          caret
          style={{
            borderTopLeftRadius: 200,
            borderBottomLeftRadius: 200,
            backgroundColor: "red",
            color: "white",
          }}
          children="Semua Produk"
        />

        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }

  return (
    <div className="input-search-container">
      <div className="input-search-content">
        <InputGroup>
          {renderBtnDropdown()}
          
          <Input placeholder="Cari games di G2G" />
        </InputGroup>
      </div>
    </div>
  )
}

export default InputSearch