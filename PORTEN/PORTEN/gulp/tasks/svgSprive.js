import svgSprite from "gulp-svg-sprite"
export const svgSprive =  () => {
   return app.gulp.src(`${app.path.src.svgSprive}`, {})
   .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
         title: "SVG",
         message: "Error: <%= error.message %>"
      }))
   )
   .pipe(svgSprite({
      mode: {
         stack: {
            sprite: `../icons/icons.svg`,
            // Создовать страницу с перечнем иконок (для демонстрации)
            example: true
         }
      }
   }))
   .pipe(app.gulp.dest(`${app.path.build.images}`))
}