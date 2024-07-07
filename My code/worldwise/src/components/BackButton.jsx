import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  // const x = function back(e) { }
  return (
    <Button
      type={"back"}
      onClick={(e) => {e.preventDefault(); navigate(-1)}}
    >
      &larr; Back
    </Button>
  );
}
