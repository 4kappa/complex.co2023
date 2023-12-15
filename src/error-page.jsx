import { useRouteError } from "react-router-dom";
import "./assets/css/error.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="block-error">
        <div id="error-page">
        <h1>Вы забрели куда-то не туда...</h1>
        <img src="../public/wolf.png" alt="" />
        </div>
        <a href="/">ВЕРНУТЬСЯ НА ГЛАВНУЮ</a>
    </div>
  );
}