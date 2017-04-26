# look4me

## Install & run

Pour installer l'app :

    git clone git@github.com:WildCodeSchool/chartres-0916-look4me.git look4me
    cd look4me
    nodemon

Accède ensuite à l'URL [http://localhost:3000](http://localhost:3000)

## Créer un compte admin

    mongo
    > use look4me
    > db.users.insert({username:"admin", password:"$2a$10$g6iVUpxL.dQUb6.LesUyQ.PxWZ6getDbGjeuMrKYHlgAN0ohrm5rK"})
    > exit
    
Tu peux ensuite te connecter à l'administration [http://localhost:3000/#/admin](http://localhost:3000/#/admin) avec les identifiants suivants :

* username : admin
* password : admin