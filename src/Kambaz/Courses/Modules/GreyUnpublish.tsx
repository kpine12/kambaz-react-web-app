import { MdDoNotDisturbAlt } from "react-icons/md";

export default function GreyUnpublish() {
  return (
    <span className="me-1 position-relative">
      <MdDoNotDisturbAlt style={{ top: "8px" }} className="text-gray me-1 position-absolute fs-6" />
    </span>
    );
}