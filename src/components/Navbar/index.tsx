import { Box, Button } from "@chakra-ui/react";
import { RootState } from "@common/store";
import { decrement, increment } from "@common/store/counter/slice";
import { ACTIONS } from "@common/store/sagaActions";
import { useDispatch, useSelector } from "react-redux";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Box gap="20px">
      <h2>Navbar</h2>
      <Button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrement
      </Button>
      {count}
      <Button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment
      </Button>
    </Box>
  );
};

export default Navbar;
