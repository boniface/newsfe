### KEY COMMANDS 

GENERAL COMMANDS

`ng g i  [FOLDER]/file  -d`

`ng g c  [FOLDER]/file   -d`

`ng g s  [FOLDER]/file  -d`

`ng g m [MODULE NAME OR PACKAGE NAME]  --routing`

1) START HERE ..BE IN THE WORKING DIRECTORY
=================================
cd [FOLDER WHERE PROJECT IS]

cd ~/webprojects/hashusersweb

CREATING A MODULE OR PACKAGE
=============================

ng g m security  --routing -d
ng g m books --routing -d

===============THE REST ======================================
*** START FROM HERE ******

1) CREATE: SERVICE  EXAMPLE
===================================
ng g s roles/services/roles --spec=false -d
ng
2) INTERFACE EXAMPLE:
======================
 ng g i article/state/models/views model -d 

3)  COMPONENT EXAMPLE
===========================
  ng g c roles/components/role --m=/roles/roles.module.ts --spec=false -d



  ============CREATING GUARDS=======


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
