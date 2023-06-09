import { Link } from "react-router-dom";
import { FcMindMap } from "react-icons/fc";

export default () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-indigo-900 md:flex-shrink-0 md:w-36 md:justify-center">
            <Link to={'/personas'}>
              <FcMindMap className="w-8 h-8 mb-0 p-0 float-left" />
            </Link>
    </div>
  );
};
