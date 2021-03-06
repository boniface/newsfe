### KEY COMMANDS 

GENERAL COMMANDS

`ng g i  [FOLDER]/file  -d`

`ng g c  [FOLDER]/file   -d`

`ng g s  [FOLDER]/file  -d`

`ng g m [MODULE NAME OR PACKAGE NAME]  --routing`

1) START HERE ..BE IN THE WORKING DIRECTORY
=================================
```bash
cd [FOLDER WHERE PROJECT IS]
```

```bash 
cd ~/webprojects/hashusersweb
```

CREATING A MODULE OR PACKAGE
=============================

```bash
ng g m security  --routing -d
```
```bash
ng g m books --routing -d
```

===============THE REST ======================================
*** START FROM HERE ******

1) CREATE: SERVICE  EXAMPLE
===================================
```bash
ng g s users/state/services/change-password --skip-tests=true -d
```

2) INTERFACE EXAMPLE:
======================
 ```bash
 ng g i article/state/models/views model -d 
 ```

3)  CONTAINER EXAMPLE
===========================
    
```bash 
ng g c articles/pages/containers/articles --flat=true --skip-tests=true -d 
```

 COMPONENT EXAMPLE
 ===========================

```bash 
ng g c websites/pages/components/website  --skip-tests=true -d 
```


  ===CREATING GUARDS=======


  ===== THE TODO LISTS ====

## Quick start

```bash
# choose a repo
# download the example or clone the repo from github
git clone https://github.com/ganatan/angular-example-seo.git

# download the example or clone the repo from gitlab
git clone https://gitlab.com/ganatan/angular-example-seo.git

# download the example or clone the repo from bitbucket
git clone https://bitbucket.org/ganatan/angular-example-seo.git

# change directory
cd angular-example-seo

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 

## Getting Started

### Installation
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Developpement
* `npm run start`
* in your browser [http://localhost:4200](http://localhost:4200) 

## Tests
* `npm run lint`
* `npm run test`
* `npm run e2e`

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* in your browser [http://localhost:4000](http://localhost:4000) 

### Prototype Bootstrap 4
* `change directory` cd ui
* launch html pages in your browser

### Prototype Bootstrap 5.0.0-alpha3
* `change directory` cd ui-v5
* launch html pages in your browser


### Author
* Author  : danny

### Documentation

English Tutorials
- Installation - https://www.ganatan.com/tutorials/search-engine-optimization-with-angular
- Tutorials Step-by-Step - https://www.ganatan.com/tutorials/en

Tutoriels en français
- Installation - https://www.ganatan.com/tutorials/search-engine-optimization-avec-angular
- Tutoriels Etape par étape - https://www.ganatan.com/tutorials

```scala
  override def routes: Routes = {
    // Get Articles
    case GET(p"/today/$zone") =>
      articlesController.getTodayStories(zone)
    case GET(p"/today/count/$zone") =>
      articlesController.getNumberOfArticles(zone)
    case GET(p"/week/$zone") =>
      articlesController.getThisWeekStories(zone)
    case GET(p"/lastweek/$zone") =>
      articlesController.getLastWeekStories(zone)
    case GET(p"/month/$zone") =>
      articlesController.getMonthlyStories(zone)
    //  Report Abuse
    case POST(p"/abuse") =>
      articlesController.reportAbuse
    //Discussion
    case POST(p"/comment/create") =>
      articlesController.postComment
    case GET(p"/comment/get/$id") =>
      articlesController.getComments(id)
    case POST(p"/response/create") =>
      articlesController.postResponse
    case GET(p"/response/get/$commentId") =>
      articlesController.getResponses(commentId)
    //Votes
    case POST(p"/vote/down") =>
      articlesController.castDownVoteForComment
    case POST(p"/vote/up") =>
      articlesController.castUpVoteForComment
    case GET(p"/vote/get/$id") =>
      articlesController.getCommentVotes(id)
    //Count
    case POST(p"/count/view") =>
      articlesController.countView
    case GET(p"/count/get/$id") =>
      articlesController.getViews(id)

```
