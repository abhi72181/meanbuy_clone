import React from "react";
import { Input, useDisclosure } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdShoppingCart } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/auth.action";
import { useEffect } from "react";
const Navbar = () => {
  const {isAuth}=useSelector((state)=>state.auth.authenticate)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const data = [
    {
      name: "Flash Sale",
      path: "/watches",
    },
    {
      name: "Best Deals",
      path: "/watches",
    },
    {
      name: "Trending",
      path: "/watches",
    },
    {
      name: "New Arrivals",
      path: "/watches",
    },
  ];

  const CategoriesData = [
    {
      heading: "Men",
      list: [
        { name: "Watches", path: "/watches" },
        { name: "Shirts", path: "/watches" },
        { name: "jeans", path: "/watches" },
      ],
    },
    {
      heading: "Women",
      list: [
        { name: "Jewellery", path: "/watches" },
        { name: "Makeup Accessories", path: "/watches" },
        { name: "Watches", path: "/watches" },
      ],
    },
    {
      heading: "Electronics",
      list: [
        { name: "Gaming Accessories", path: "/watches" },
        { name: "Keyboards & Mouse", path: "/watches" },
        { name: "Laptops", path: "/watches" },
        { name: "Small Appliances", path: "/watches" },
      ],
    },
    {
      heading: "KIDS & MOM",
      list: [
        { name: "Kid's Shoes", path: "/watches" },
        { name: "School Backpacks", path: "/watches" },
        { name: "Toys", path: "/watches" },
      ],
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout=()=>{
   dispatch(logout())
   navigate("/login")
  }
// useEffect(()=>{
// if(!isAuth){
//   navigate("/login")
// }
// },[isAuth])
  return (
    <div className="mainNav">
      <div className="topNav">
        <div className="leftTopNav">
          <Link to="/" className="imgleftTopNav">
            <img
              src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png"
              alt="logo"
            ></img>
          </Link>

          <div className="inputDivTopNav">
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon w={10} h={6} color="gray.300" />}
              />
              <Input type="text" placeholder="Search..." />
            </InputGroup>
          </div>
        </div>
        <div className="rightTopNav">
         {isAuth ? <div className="belowrightTopNav"><Button colorScheme="orange" onClick={handleLogout}>Logout</Button></div>:<div className="belowrightTopNav">
            <div>
              <Link to="/login">LOGIN</Link> / <Link to="/signup">SIGNUP</Link>
            </div>

            <div className="welcome">WELCOME GUEST</div>
          </div>} 

          <div className="carticon">
           <Link to="/cart"> <MdShoppingCart size={40} /></Link>
          </div>
        </div>
      </div>
      <div className="bottomNav">
        <div className="leftBottomNav">
          <Button onClick={onOpen}>Categories</Button>
          <GoTriangleDown className="triangle" size={20} />
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            size="4xl"
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Categories</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  <div className="CategoriesMain">
                    {CategoriesData.map((e) => {
                      return (
                        <div key={e.heading}>
                          <div className="CategoriesHeading">{e.heading}</div>
                          <br />
                          {e.list.map((s) => {
                            return (
                              <div className="footerList" key={s.name}>
                                <Link to={s.path} onClick={onClose}>
                                  {s.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="rightBottomNav">
          {data.map((e) => {
            return (
              <div key={e.name}>
                <Link to={e.path}>{e.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
