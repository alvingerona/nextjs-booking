import { setInformationModal } from "@/store/reducers/globalSlice";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";

const QuestionButton = ({ body, title }: { body: string; title: string }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="hover:text-indigo-500"
        onClick={() => {
          dispatch(
            setInformationModal({
              title,
              body,
              show: true,
            })
          );
        }}
      >
        <QuestionMarkCircleIcon className="h-5 w-5" />
      </button>
    </>
  );
};

export default QuestionButton;
