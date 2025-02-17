import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";
import axios from "axios";
function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
        >
          {menuItem.label}
        </Label>
      ))}
    </nav>
  );
}

// function HeaderRightContent() {
//   const { user } = useSelector((state) => state.auth);
//   const { cartItems } = useSelector((state) => state.shopCart);
//   const [openCartSheet, setOpenCartSheet] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   function handleLogout() {
//     dispatch(logoutUser());
//   }

//   useEffect(() => {
//     dispatch(fetchCartItems(user?.id));
//   }, [dispatch]);

//   console.log(cartItems, "sangam");

//   return (
//     <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//       <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
//         <Button
//           onClick={() => setOpenCartSheet(true)}
//           variant="outline"
//           size="icon"
//           className="relative"
//         >
//           <ShoppingCart className="w-6 h-6" />
//           <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
//             {cartItems?.items?.length || 0}
//           </span>
//           <span className="sr-only">User cart</span>
//         </Button>
//         <UserCartWrapper
//           setOpenCartSheet={setOpenCartSheet}
//           cartItems={
//             cartItems && cartItems.items && cartItems.items.length > 0
//               ? cartItems.items
//               : []
//           }
//         />
//       </Sheet>

//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Avatar className="bg-black">
//             <AvatarFallback className="bg-black text-white font-extrabold">
//               {/* {user?.userName[0].toUpperCase()} */}
//             </AvatarFallback>
//           </Avatar>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent side="right" className="w-56">
//           <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => navigate("/shop/account")}>
//             <UserCog className="mr-2 h-4 w-4" />
//             Account
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={handleLogout}>
//             <LogOut className="mr-2 h-4 w-4" />
//             Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }
// function HeaderRightContent() {
//   const { user } = useSelector((state) => state.auth);
//   const { cartItems } = useSelector((state) => state.shopCart);
//   const [openCartSheet, setOpenCartSheet] = useState(false);
//   const [predictedSize, setPredictedSize] = useState(null);  // State for predicted size
//   const [loading, setLoading] = useState(false);  // State for loading
//   const [error, setError] = useState(null);  // State for error handling

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Function to call Flask backend API for size prediction
//   const handleSizePrediction = async (age, height, weight) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post("http://localhost:4000/predict", {
//         age: age,
//         height: height,
//         weight: weight,
//       });
//       setPredictedSize(response.data.prediction);  // Set predicted size
//     } catch (err) {
//       setError("Error predicting size: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function for logging out
//   function handleLogout() {
//     dispatch(logoutUser());
//   }

//   useEffect(() => {
//     dispatch(fetchCartItems(user?.id));
//   }, [dispatch]);

//   return (
//     <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//       {/* Cart Button and Cart Sheet */}
//       <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
//         <Button
//           onClick={() => setOpenCartSheet(true)}
//           variant="outline"
//           size="icon"
//           className="relative"
//         >
//           <ShoppingCart className="w-6 h-6" />
//           <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
//             {cartItems?.items?.length || 0}
//           </span>
//           <span className="sr-only">User cart</span>
//         </Button>
//         <UserCartWrapper
//           setOpenCartSheet={setOpenCartSheet}
//           cartItems={
//             cartItems && cartItems.items && cartItems.items.length > 0
//               ? cartItems.items
//               : []
//           }
//         />
//       </Sheet>

//       {/* Avatar and Dropdown */}
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Avatar className="bg-black">
//             <AvatarFallback className="bg-black text-white font-extrabold">
//               {/* {user?.userName[0].toUpperCase()} */}
//             </AvatarFallback>
//           </Avatar>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent side="right" className="w-56">
//           <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => navigate("/shop/account")}>
//             <UserCog className="mr-2 h-4 w-4" />
//             Account
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={handleLogout}>
//             <LogOut className="mr-2 h-4 w-4" />
//             Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* Add Size Prediction Section */}
//       <div className="mt-4">
//         <Label className="text-sm">Predict Your Size</Label>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             // You can replace with real values, for now, using static values
//             handleSizePrediction(25, 170, 65); // Example age, height, and weight
//           }}
//           className="flex gap-2 items-center"
//         >
//           <input
//             type="number"
//             placeholder="Age"
//             required
//             className="input input-bordered"
//           />
//           <input
//             type="number"
//             placeholder="Height (cm)"
//             required
//             className="input input-bordered"
//           />
//           <input
//             type="number"
//             placeholder="Weight (kg)"
//             required
//             className="input input-bordered"
//           />
//           <Button type="submit" variant="outline" disabled={loading}>
//             {loading ? "Loading..." : "Get Size"}
//           </Button>
//         </form>
//         {predictedSize && (
//           <p className="mt-2 text-sm font-semibold">Predicted Size: {predictedSize}</p>
//         )}
//         {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Button } from "../ui/button";
// import { ShoppingCart, LogOut, UserCog } from "lucide-react";
// import { Sheet } from "../ui/sheet";
// import { Avatar, AvatarFallback } from "../ui/avatar";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "@/store/auth-slice";
// import { fetchCartItems } from "@/store/shop/cart-slice";
// import UserCartWrapper from "./cart-wrapper";
// import axios from "axios";
// import { Label } from "../ui/label";

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const [predictedSize, setPredictedSize] = useState(null);  // State for predicted size
  const [loading, setLoading] = useState(false);  // State for loading
  const [error, setError] = useState(null);  // State for error handling
  const [openPredictionForm, setOpenPredictionForm] = useState(false);  // State for form visibility

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to call Flask backend API for size prediction
  const handleSizePrediction = async (age, height, weight) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:4000/predict", {
        age: age,
        height: height,
        weight: weight,
      });
      setPredictedSize(response.data.prediction);  // Set predicted size
    } catch (err) {
      setError("Error predicting size: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function for logging out
  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      {/* Cart Button and Cart Sheet */}
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
        />
      </Sheet>

      {/* Avatar and Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {/* {user?.userName[0].toUpperCase()} */}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Add Button for Size Prediction Form */}
      <Button
        onClick={() => setOpenPredictionForm(!openPredictionForm)}
        variant="outline"
      >
        {openPredictionForm ? "Close Size Prediction" : "Size Prediction"}
      </Button>

      {/* Size Prediction Form */}
      {openPredictionForm && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
          <Label className="text-sm">Predict Your Size</Label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const age = parseInt(e.target.age.value);
              const height = parseInt(e.target.height.value);
              const weight = parseInt(e.target.weight.value);
              handleSizePrediction(age, height, weight); // Call prediction function
            }}
            className="flex gap-2 items-center"
          >
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              className="input input-bordered"
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              required
              className="input input-bordered"
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              required
              className="input input-bordered"
            />
            <Button type="submit" variant="outline" disabled={loading}>
              {loading ? "Loading..." : "Get Size"}
            </Button>
          </form>
          {predictedSize && (
            <p className="mt-2 text-sm font-semibold">Predicted Size: {predictedSize}</p>
          )}
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </div>
      )}
    </div>
  );
}




function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          {/* <HousePlug className="h-6 w-6" /> */}
          <span className="font-bold">Suitspot</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
