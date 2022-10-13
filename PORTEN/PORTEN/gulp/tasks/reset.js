import del from "del";
// Перед подключением установите модуль "del" с помощю команды npm i -D del
export const reset = () => {
   return del(app.path.clean);
}
