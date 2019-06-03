//引入gulp模块
const gulp = require('gulp');
const imgmin = require('gulp-imagemin');
const jsmin = require('gulp-uglify');
const cssmin = require('gulp-clean-css');
// const fileconcat = require('gulp-concat');
const connect = require('gulp-connect');
const es6 = require('gulp-babel');
/** 
 *  1: gulp.task(参数1，参数2，参数3)
 *          参数1 ： 任务的名称  ->自定义任务的名字
 *          参数2 ： 需要执行的任务
 *          参数3 ： 回调函数
 * 
 *  2：gulp.src()    源路径找寻;  （输入源） （操作的问价 的路径  必须是 相对路径  ./当前目录）
 * 
 *  3:  .pipe()    管道输送（加工）
 * 
 *  4: gulp.dest()   文件的转存  相关文件产生变化之后 监听
 * 
 * 
 * 
 *  5：监听   gulp.watch(参数1，参数2)
 * 
 *      参数1： 监听哪些文件产生变化
 *      参数2： 文件产生变化之后执行的任务[]
 * 
 * 
*/

//拷贝index.html
gulp.task('copyIndex',() => {
    //要copy的文件
    gulp.src('./src/index.html')
    //管道输送
    .pipe(gulp.dest('./dist/html'))//文件的转存
    .pipe(connect.reload()) //服务端刷新
})

gulp.task('copyhtml',() => {
    //要copy的文件
    gulp.src('./src/html/*.html')
    //管道输送
    .pipe(gulp.dest('./dist/html'))//文件的转存
    .pipe(connect.reload()) //服务端刷新
})

//把两个文件合并在一个文件夹里面
// gulp.task('marge',() => {
//     //找到要合并的文件
//     gulp.src(['./src/js/js/banner.js','./src/css/index.css'])
//     .pipe(gulp.dest('./dist/demo'))
    
// })

// //图片压缩 （  先下载 图片压缩的 模块 ，再引用模块 ）
gulp.task('imgMin',() => {
    //找到要压缩的图片
    gulp.src('./src/images/*')
    //通过管道进行压缩再输送
    .pipe(imgmin())
    //文件的转存
    .pipe(gulp.dest('./dist/images'));
})
// //es6转义
gulp.task('es',() => {
    gulp.src('./src/js/lib/*.js')
    .pipe(es6({
        presets : ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js/lib'))
})

// //js压缩（先下载 gulp-uglify）

gulp.task('jsMin',() => {
    //找到js路径
    gulp.src('./dist/js/lib/*.js')
    //通过管道压缩
    .pipe(jsmin())
    .pipe(gulp.dest('./dist/js/lib'))
})


// //css压缩（先下载 gulp-clean-css 模块）
gulp.task('cssMin',() => {
    gulp.src('./src/css/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('copyjson',() => {
    //要copy的文件
    gulp.src('./src/js/js/json/*.json')
    //管道输送
    .pipe(gulp.dest('./dist/js/json'))//文件的转存
    .pipe(connect.reload()) //服务端刷新
})

gulp.task('copyicon',() => {
    //要copy的文件
    gulp.src('./src/iconfont/*')
    //管道输送
    .pipe(gulp.dest('./dist/iconfont'))//文件的转存
    .pipe(connect.reload()) //服务端刷新
})
gulp.task('copyphp',() => {
    //要copy的文件
    gulp.src('./src/php/*')
    //管道输送
    .pipe(gulp.dest('./dist/php'))//文件的转存
    .pipe(connect.reload()) //服务端刷新
})


// //文件的合并（下载  gulp-concat）
// gulp.task('concatJs',() => {
//     gulp.src('./src/js/js/*')
//     .pipe(fileconcat('./all.js'))  //创建新的js文件
//     //把新创建的文件 放在 dist文件
//     .pipe(gulp.dest('./dist/js'))
// })




gulp.task('default',['listen','server']);





// //开启服务  （先下载 gulp-connect）
gulp.task('server',() => {
    //调用 connect.server({})
    connect.server({
        root : './',
        prot : '8000',
        livereload : true
    })
})


// //监听
gulp.task('listen',() => {
    //监听某个文件发生改变的时候，去执行某个任务
    gulp.watch('./src/html/*.html',['copyhtml'])
    gulp.watch('./src/js/json',['copyjson'])
    //实时刷新首页
    gulp.watch('./src/index.html',['copyIndex'])

})





//任务的出口任务



