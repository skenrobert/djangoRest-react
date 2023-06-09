import { useRouteError,isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return  (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }

}

// function ErrorBoundary() {
//     const error = useRouteError();
//     console.error(error);
//     return <div>{error.message}</div>;
//   }
  
//   <div
//     errorElement={<ErrorBoundary />}
//     loader={() => {
//       // unexpected errors in loaders/actions
//       something.that.breaks();
//     }}
//     action={() => {
//       // stuff you throw on purpose in loaders/actions
//       throw new Response("Bad Request", { status: 400 });
//     }}
//     element={
//       // and errors thrown while rendering
//       <div>{breaks.while.rendering}</div>
//     }
//   />;

//https://reactrouter.com/en/main/utils/is-route-error-response