import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-500 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {task.title}
      </h1>
      <p className="text-slate-400">{task.description}</p>
      <hr />
    </div>
  );
}


//https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md

// TaskCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   id: PropTypes.number,
// //  anyProp: PropTypes.any,
// //  booleanProp: PropTypes.bool,
//  // functionProp: PropTypes.func,
// //  arrayProp: PropTypes.array,
//  // objectPerop: PropTypes.object,
// //  symbolProp: PropTypes.symbol,
// };