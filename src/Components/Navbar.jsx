import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Collapse,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as HomeLink, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  ></Link>
);

export default function Navbar() {
  const { prodArray } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenMenu, onToggle } = useDisclosure();

  const { isAuth, logoutUser } = useContext(AuthContext);

  const navigate=useNavigate();

  let totalCount = 0;

  prodArray.map((ele) => (totalCount += ele.quantity));

  console.log("count", totalCount);

  console.log("isAuth", isAuth);

  return (
    <>
      {/* // Navbar Starts// */}

      <Box
        bg={"white"}
        px={4}
        borderBottom={"2px solid black"}
        pos={"fixed"}
        top={0}
        zIndex={9999}
        width={"100%"}
      >
        <Flex
          height={"110px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HomeLink to="/">
              <Box>
                <Image
                  src={`https://i.ibb.co/tb29NvM/project-logo-1.png`}
                  ml="50px"
                  width="55%"
                />
              </Box>
            </HomeLink>
          </HStack>

          <InputGroup w="35%" mr="200px" border={"1px solid #D2D5D2"}>
            <Input
              type="text"
              placeholder="search for a product or brand"
              borderRadius={"none"}
            />
            <InputRightElement width="5rem">
              <Button h="1.9rem" size="sm">
                <Image
                  src={
                    "https://img.icons8.com/material-sharp/24/null/search.png"
                  }
                />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex
            alignItems={"center"}
            justifyContent={"space-around"}
            mr="40px"
            width="20%"
          >
            <Menu>
              <HStack>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://img.icons8.com/pastel-glyph/64/null/user-male-circle.png"
                    }
                  />
                </MenuButton>
                <Text>Account</Text>
                <MenuList>
                  <HomeLink to="/login">
                    {" "}
                    <MenuItem>
                      <Button width={"full"} disabled={isAuth}>
                        Login
                      </Button>
                    </MenuItem>
                  </HomeLink>
                  <MenuItem>
                    <Button width={"full"}>Register</Button>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button width={"full"}>Admin</Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      width={"full"}
                      disabled={!isAuth}
                      onClick={() => {
                        logoutUser()
                        navigate("/");
                      }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </MenuList>
              </HStack>
            </Menu>
            <Menu>
              <HStack spacing={1}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://img.icons8.com/external-creatype-outline-colourcreatype/64/null/external-basket-e-commerce-creatype-outline-colourcreatype.png"
                    }
                  />
                </MenuButton>
                <Text
                  backgroundColor={"black"}
                  color={"white"}
                  borderRadius={"50%"}
                  paddingX={"3px"}
                  fontSize={"11px"}
                >
                  {totalCount}
                </Text>
                <Text>Cart</Text>

                <MenuList>
                  <MenuItem>
                      <Button width={"full"} onClick={()=>navigate("/cart")}>
                       View Cart
                      </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button width={"full"}>My Orders</Button>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button width={"full"}>Wishlist</Button>
                  </MenuItem>
                </MenuList>
              </HStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Navbar Ends */}

      {/* DropDown Menu Starts */}

      <Box pos={"fixed"} top={112} width={"100%"} zIndex={999}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"40px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpenMenu ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpenMenu} animateOpacity></Collapse>
      </Box>

      {/* DropDown Menu Ends */}
      <Stack backgroundColor={"#F2F2F2"} mb="20px" mt="152px" width="100%">
        <HStack
          border={"0px solid gray"}
          backgroundColor={"#F2F2F2"}
          h="60px"
          w="73%"
          m={"auto"}
          justifyContent={"space-between"}
        >
          <HStack>
            <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgoJPHBhdGggY2xhc3M9InJlc3BvbnNpdmVVc3BfaWNvbl9zdmctZmlsbCIgZD0iTTE3Ljg3NCAyNmE0LjAwMiA0LjAwMiAwIDAgMS03Ljc0OCAwSDkuMDQ3VjEyLjAyMkgyNHYxLjk5OUwyOCAxNGwzIDUgLjAyMyA3LjAyOC0xLjE1My0uMDFBNC4wMDIgNC4wMDIgMCAwIDEgMjIuMTI2IDI2aC00LjI1MnpNMjMgMTZ2NGg2di0xbC0yLTNoLTR6bS05IDExYTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNHptMTIgMGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6Ii8+Cjwvc3ZnPg==" />
            <Text>FREE US Shipping Over $49</Text>
          </HStack>
          <HStack>
            <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBjbGFzcz0icmVzcG9uc2l2ZVVzcF9pY29uX3N2Zy1maWxsIiBkPSJNMjEuNDUgMjhjMy4yMyAwIDUuODUtMi42ODYgNS44NS02cy0yLjYyLTYtNS44NS02Yy0zLjIzIDAtNS44NSAyLjY4Ni01Ljg1IDZzMi42MiA2IDUuODUgNnptMCAyYy00LjMwOCAwLTcuOC0zLjU4Mi03LjgtOHMzLjQ5Mi04IDcuOC04IDcuOCAzLjU4MiA3LjggOC0zLjQ5MiA4LTcuOCA4eiIvPgoJPHBhdGggY2xhc3M9InJlc3BvbnNpdmVVc3BfaWNvbl9zdmctZmlsbCIgZD0iTTE1LjczMiAyNi43ODJjLTMuNDMtLjg0LTUuOTgyLTQuMDA2LTUuOTgyLTcuNzgyIDAtNC40MTggMy40OTItOCA3LjgtOCAyLjgxNCAwIDUuMjggMS41MjkgNi42NTIgMy44MmwtMS42NjIgMS4wNDdDMjEuNDgyIDE0LjA5OCAxOS42MSAxMyAxNy41NSAxM2MtMy4yMyAwLTUuODUgMi42ODYtNS44NSA2IDAgMi43OTIgMS44NzUgNS4xOTcgNC40ODUgNS44MzZsLS40NTMgMS45NDZ6TTIyLjQyNSAxOGgxLjk1bC0zLjkgOGgtMS45NXoiLz4KPC9zdmc+" />
            <Text>Refer a Friend, Get $15</Text>
          </HStack>
          <HStack>
            <Image
              src="https://img.icons8.com/ios-filled/2x/task-completed.png"
              width={"20px"}
              height={"23px"}
            />
            <Text>New Customers Save 20%-Use Code NEWBIE</Text>
          </HStack>
          <HStack>
            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGNsYXNzPSJyZXNwb25zaXZlVXNwX2ljb25fc3ZnLWZpbGwiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LDIgTDE4LDIyIEw2LDIyIEw2LDIgTDE4LDIgWiBNMTIsMTkgQzExLjQ0NzcxNTMsMTkgMTEsMTkuNDQ3NzE1MyAxMSwyMCBDMTEsMjAuNTUyMjg0NyAxMS40NDc3MTUzLDIxIDEyLDIxIEMxMi41NTIyODQ3LDIxIDEzLDIwLjU1MjI4NDcgMTMsMjAgQzEzLDE5LjQ0NzcxNTMgMTIuNTUyMjg0NywxOSAxMiwxOSBaIE0xNiw1IEw4LDUgTDgsMTggTDE2LDE4IEwxNiw1IFogTTE0LDMgTDEwLDMgTDEwLDQgTDE0LDQgTDE0LDMgWiIvPgo8L3N2Zz4=" />
            <Text>Download Our App</Text>
          </HStack>
        </HStack>
      </Stack>
      <Stack
        width={"90%"}
        h={"45px"}
        border="0px solid orange"
        m={"auto"}
        backgroundColor={"black"}
        color="white"
        _hover={{ backgroundColor: "white", color: "black" }}
        alignItems={"center"}
        mb="20px"
      >
        <HStack
          w={"80%"}
          m="auto"
          border="0px solid white"
          alignItems={"center"}
        >
          <Text fontSize={"20px"}>
            {" "}
            <b>
              25% off with code REPLAY + free PCA SKIN Rejuvenate and Hydrate
              Duo (worth $33.50) @ $ 130+ | SHOP NOW{" "}
            </b>{" "}
          </Text>
        </HStack>
      </Stack>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("white", "gray.800");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const backGround = useColorModeValue("black", "gray.800");

  return (
    <Box
      display={"flex"}
      spacing={1}
      border={"0px solid black"}
      ml="8%"
      width={"1300px"}
      justifyContent={"space-between"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  bg: backGround,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"lg"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"sm"}
                width={"auto"}
              >
                <HStack alignItems={"start"}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </HStack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Box>
  );
};

const DesktopSubNav = ({ label, subLabel }) => {
  return (
    <HomeLink
      to="/products"
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#EEEEE9") }}
    >
      <Stack textAlign={"left"} spacing={2} borderTop={"1px solid gray"}>
        <Box mt="15px">
          <Text
            transition={"all .1s ease"}
            _groupHover={{ color: "#C83E4D" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        {subLabel.map((el, i) => (
          <Text fontSize={"sm"} key={i}>
            {el}
          </Text>
        ))}
      </Stack>
    </HomeLink>
  );
};

const NAV_ITEMS = [
  {
    label: "Holiday Gifts🎁",
    children: [
      {
        label: "Popular Categories",
        subLabel: [
          "Shop All Holiday Beauty Gifts",
          "Our Favourite Beauty Gift Sets",
          "Tvacha Store Exlusive Gifts",
          "Tvacha Stores Holiday Edit Box",
          "Holiday Gift Ideas For Her",
          "Holiday Gift Ideas For Him",
        ],
        href: "#",
      },
      {
        label: "By Gift Ideas",
        subLabel: [
          "Budget Friendly And Small Gifts",
          "Stoking Stuffer Ideas",
          "Thoughtfull Gifts For Smart Splurges",
          "Luxury Holiday Gifts",
          "Last Minute Gift Ideas",
          "Gift For YOu",
        ],
        href: "#",
      },
      {
        label: "By Price",
        subLabel: [
          "Gift Under $25",
          "Gift Under $50",
          "Gift Under $100",
          "Gift Over $100",
        ],
        href: "#",
      },
      {
        label: "By Category",
        subLabel: [
          "Skin Care Gifts",
          "Body Care Gifts",
          "Home Scents And Candle Gifts",
          "Makeup Gifts",
          "Hair Care Gifts",
          "Beauty Tools And Hair Styling Gifts",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Skin Care",
    children: [
      {
        label: "Popular Categories",
        subLabel: [
          "View All Skin Care",
          "New In",
          "Clean Skincare",
          "5 Rated Products",
          "Gifts & Sets",
          "Surprises & Duo",
          "Travel Sizes",
        ],
        href: "#",
      },
      {
        label: "By Product Type",
        subLabel: [
          "Cleansers",
          "Moisturizers",
          "Serums",
          "Eye Serums",
          "Exfoliaters",
          "Masks",
          "Eye Care",
          "Toners",
          "Lip Care",
          "Oils",
          "Treatments",
          "Mists",
          "Self Tanning",
          "Tools",
        ],
        href: "#",
      },
      {
        label: "By Ingredient",
        subLabel: [
          "Vitamin C",
          "AHA",
          "Caffeine",
          "Retinol",
          "Hyluronic Acid",
          "Niacinamide",
          "Lactic Acid",
          "Salicylic Acid",
          "Glycolic Acid",
          "Azelaic Acid",
        ],
        href: "#",
      },
      {
        label: "By Specific Concern",
        subLabel: [
          "Acne & Blemishes",
          "Fine Lines & Wrinkles",
          "Dark Circles",
          "Dry Skin",
          "Dullness",
          "Lack of Fairness",
          "Pigmentaion",
          "Pregnancy Skincare",
          "Redness & Rosacea",
          "Sensitive Skin",
          "Visible Pores",
        ],
        href: "#",
      },
      {
        label: "Sunscreen & Suncare",
        subLabel: [
          "Take The SPF Quiz",
          "SPF 30 and over",
          "SPF 50 and over",
          "After Sun",
          "Tinted",
          "Mineral",
          "Eye Protection",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Hair",
    children: [
      {
        label: "Popular Categories",
        subLabel: [
          "View All Skin Care",
          "New In",
          "Clean Skincare",
          "5 Rated Products",
          "Gifts & Sets",
          "Surprises & Duo",
          "Travel Sizes",
        ],
        href: "#",
      },
      {
        label: "Product Type",
        subLabel: [
          "Shampoo",
          "Conditioners",
          "Hair Treatments",
          "Hair Masks",
          "Hair Oils",
          "Hair Sprays",
          "Hair Styling",
          "Hair Thinning & Loss",
          "Hair Color Treatments",
          "Hair Supplements",
          "Hair Brushes & Combs",
        ],
        href: "#",
      },
      {
        label: "Hair Type",
        subLabel: [
          "Anti-Dandruff & Scalp Care",
          "Coarse & Textured Hair",
          "Colored Hair",
          "Curly & Wavy Hair",
          "Damaged Hair",
          "Dry hair",
          "Fine Hair",
          "Oily Hair",
        ],
        href: "#",
      },
      {
        label: "Electrical",
        subLabel: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
        href: "#",
      },
      {
        label: "Hair Removal",
        subLabel: [
          "Hair Removal Devices",
          "Hair Removal Products",
          "Mens Shaving Products",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Makeup",
    children: [
      {
        label: "Popular Categories",
        subLabel: [
          "New In",
          "Clean Makeup",
          "5 Rated Products",
          "Gifts & Sets",
          "Brushes & Applicators",
          "Makeup Palettes",
          "Nails",
        ],
        href: "#",
      },
      {
        label: "Eyes",
        subLabel: [
          "Eye Liners",
          "Lash & Brow Enhancers",
          "Eye Shadows",
          "Mascaras",
          "Brow Pencils",
        ],
        href: "#",
      },
      {
        label: "Face",
        subLabel: [
          "BB && CC Cream",
          "Blushers",
          "Bronzers",
          "Color Correctors",
          "Concealers",
          "Contour",
          "Face Powders",
          "Foundations",
          "Highlighters",
          "Makeup Removers",
          "Makeup Setting Spray",
          "Primers",
          "Tinted Moisturizer",
        ],
        href: "#",
      },
      {
        label: "Lips",
        subLabel: [
          "Lipstics",
          "Lip Balms",
          "Lip Glosses",
          "Lip Liners",
          "Lip Plumpers",
          "Liquid Lipsticks",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Bath & Body",
    children: [
      {
        label: "Popular Categories",
        subLabel: [
          "View All Bath & Body",
          "New In",
          "Clean Bath & Body",
          "5 Rated Products",
          "Gifts & Sets",
          "Travel Sizes",
          "At Home Spa",
          "Decorants",
          "Oral Care",
        ],
        href: "#",
      },
      {
        label: "Bath & Shower",
        subLabel: [
          "Baths Oils/Soak",
          "Bath Salts",
          "Body Washes",
          "Cleansing bars",
          "Exfoliators",
        ],
        href: "#",
      },
      {
        label: "Self Tanners",
        subLabel: [
          "Accessories",
          "Pre-Tan Preparation",
          "Body Tanners",
          "Post Tanning",
        ],
        href: "#",
      },
      {
        label: "Moisturizers",
        subLabel: ["Balms", "Butters", "Creams", "Lotions", "Oils"],
        href: "#",
      },
      {
        label: "Targeted Care",
        subLabel: [
          "Bust",
          "Cellulite",
          "Dry Skin",
          "Hair Removal",
          "Hands & Foot Care",
          "Hans Soap Senitizers & Creams",
          "Legs",
          "Simming & Sculpting",
          "Strecth Marks",
          "Sunscreen",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Fragrance",
    children: [
      {
        label: "Popular Categories",
        subLabel: ["View All Fragrance", "New In", "5 Rated Products"],
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: [
          "NEOM Organics",
          "Glasshouse Fragrances",
          "KORRES",
          "NEST Fragrance",
          "Molton Brown",
        ],
        href: "#",
      },
      {
        label: "Personal Fragrance",
        subLabel: [
          "Perfume",
          "EAU de Toilette",
          "Body Spray",
          "For Her",
          "For Him",
        ],
        href: "#",
      },
      {
        label: "Home Fragrance",
        subLabel: [
          "Scented Candles",
          "Diffusers",
          "Aromatherapy",
          "Pillow Mists",
          "Room Sprays",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Self-Care",
    children: [
      {
        label: "Popular Categories",
        subLabel: [
          "View All Wellness Products",
          "New In",
          "5 Rated Products",
          "At Home Spa",
        ],
        href: "#",
      },
      {
        label: "Sexual Wellness",
        subLabel: ["Devices", "Skin Care"],
        href: "#",
      },
      {
        label: "Supplements",
        subLabel: [
          "Skin",
          "Hair",
          "Immune Boosting",
          "Health & Wellbeing",
          "Weight Loss",
        ],
        href: "#",
      },
      {
        label: "Clean Beauty",
        subLabel: [
          "Clean Skincare",
          "Clean HairCare",
          "Clean Makeup",
          "Clean Bath & Body",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Tools",
    children: [
      {
        label: "Popular Categoris",
        subLabel: ["View All Tools", "Makeup Brushes & Accesories"],
        href: "#",
      },
      {
        label: "Hair Care",
        subLabel: [
          "Hair Dryers",
          "Flat Irons",
          "Rollers & Curling Irons",
          "Hair Brushes",
        ],
        href: "#",
      },
      {
        label: "Skin Care",
        subLabel: [
          "LED Light Therapy",
          "Facial Toning",
          "Cleansing",
          "Dermabrasion",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "News & Trending",
    children: [
      {
        label: "Latest Branch",
        subLabel: [
          "ISDIN",
          "Act + Acre",
          "Ellis Brroklyn",
          "Rituals",
          "Julliette Has a Gun",
          "Chris Collins",
          "Cire Trudon",
          "Carriere Freres",
          "Alurx",
          "Lumira",
          "Hermetica",
          "Veronique Gabai",
          "Liquides Imaginaires",
          "Arquiste Pefumeur",
          "David Mallett",
        ],
        href: "#",
      },
      {
        label: "View All New",
        subLabel: [
          "New Skin Care",
          "New Makeup",
          "New Hair care",
          "New Bath Body",
          "Nwe Fragrance",
        ],
        href: "#",
      },
      {
        label: "Trending Now",
        subLabel: ["Best of British Brands"],
        href: "#",
      },
    ],
  },
  {
    label: "Build a Routine",
    children: [
      {
        label: "Skin Type Routine",
        subLabel: [
          "Dry Skin Routine",
          "Normal Skin Routine",
          "Oily Skin Routine",
          "Combination Skin Routine",
          "Sensitive Skin Routine",
        ],
        href: "#",
      },
      {
        label: "Skin Concern Routine",
        subLabel: [
          "Acne Routine",
          "Fine Line & Wrinkles Routine",
          "Dark Spots & Discoloration Routine",
          "Redness & Rosacea Routine",
          "Dullness & Brightening Routine",
        ],
        href: "#",
      },
      {
        label: "Build a Hair Routine",
        subLabel: [
          "Fine Thinning Hair Routine",
          "Healty Scalp Routine",
          "Colored Hair Routine",
          "Dray Damaged Hair Routine",
          "Oily Hair Routine",
          "Hair Styling Routine",
        ],
        href: "#",
      },
    ],
  },
];
