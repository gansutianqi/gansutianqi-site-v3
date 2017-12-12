# gansutian site v3
gansutianqi official site,build on top of [october CMS](https://github.com/octobercms/october).

## install
+ install october CMS via composer `composer create-project october/october PROJECT_NAME`
+ `php artisan october:install`
+ make `storage` and `themes` directory writable `chmod -R 777 storage themes`.
+ before update october,you need run `composer update` first,then run `php artisan october:update`
+ remove some files `rm .gitattributes .editorconfig README.md`
+ install dependence plugins
    + install october.dirvers `php artisan plugin:install October.Drivers`
    + install rainlab.user `php artisan plugin:install RainLab.User`
    + nstall rainlab.pages `php artisan plugin:install RainLab.Pages`
+ clone this repository
    + in the project root directory run `git init`
    + `git remote add origin https://github.com/gansutianqi/gansutianqi-site-v3.git`
    + `git pull origin master`
+ after pull completed
    + install buuug7.news `php artisan plugin:refresh Buuug7.News`
+ run `php artisan october:env` generate a `.env` file for common configuration.    
+ when develop in local,make sure to add `APP_ENV=dev` for use dev config.    

+ theme
    + run `yarn run bulid` to compile assert of bs4 theme
    + run `yarn run watch` to watch and compile the theme assert
