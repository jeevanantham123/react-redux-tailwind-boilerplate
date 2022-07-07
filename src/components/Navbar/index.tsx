import { Box, Button } from "@chakra-ui/react";
import { RootState } from "@common/store";
import { decrement, increment } from "@common/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Box gap="20px">
      <h2>Navbar</h2>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      {count}
      <Button onClick={() => dispatch(increment())}>Increment</Button>
    </Box>
  );
};

export default Navbar;
