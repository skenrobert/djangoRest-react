import { useEffect } from "react";
import { useForm } from "react-hook-form"; // complement yup and zod
import { useNavigate, useParams } from "react-router-dom";
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,// Automatic validations
    handleSubmit,//Administer shipping form
    formState: { errors }, // Form error
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => { // not need create obj for save task automatic useForm create with input in the formulario 
    console.log('useForm', data);

    if (params.id) {
      await updateTask(params.id, data);

      toast.success("Task updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
      
    } else {
      await createTask(data);

      toast.success("New Task Added", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });

    }

    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}  //validation useForm
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.title && <span>title is required</span>}

        <textarea
          placeholder="Description"
          {...register("description", { required: true })}  //validation useForm
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.description && <span>description is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>



      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {

              const accepted = window.confirm("Are you sure?");

              if (accepted) {
                await deleteTask(params.id);
                toast.success("Task Removed", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/tasks");
              }
            }}
          >
            delete
          </button>
        </div>
      )}


    </div>
  );
}
