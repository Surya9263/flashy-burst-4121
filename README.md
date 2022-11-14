## Getting Started
> e-commenre platform cloned based on ZARA.com which contains Latest trends in clothing for women, men & kids at TAKEITNOW online. Find new arrivals, fashion catalogs, collections & lookbooks every week.

- All the contents like products, slider images on home page, are coming from backend.
- everything can be managed from admin dashboard.
- users role can also be managed from admin page.
- navigation links are dynamic, can also be managed from admin page.

### PROJECT NAME :  TAKEITNOW

## Checkout Project [Deployed Link](https://takeitnow.vercel.app/) 
### Contributors - 
- [Surya Srivastava](https://github.com/Surya9263)  
- [Akshaya Annadurai](https://github.com/AkshayaAnnadurai) 
- [Prashant kumar](https://github.com/PRASHANT7277)
- [Vishwajeet Haldar](https://github.com/vishwajeethaldar)
- [Vaibhav Kaware](https://github.com/vkaware)


### Tech Stacks used - 
[NextJs](), [Chakra UI](), [Redux Toolkit](), [mongoose](), [axios](), [React Icons](), [jsonwebtoken](), [argon2]()

#
# Project Preview 
#
## : : Client Side
!["Client Side Image"](https://github.com/vishwajeethaldar/vishwajeethaldar/blob/main/ProjectImages/takeitnow/takenowclient.gif?raw=true)

## : : Admin Side
!["Admin Side Image"](https://github.com/vishwajeethaldar/vishwajeethaldar/blob/main/ProjectImages/takeitnow/takeitnowAdmin.gif?raw=true)



## How to deploy this project on netilify

### Step 1 :
    > Clone the projet repository.

### Step 2 :
    > cd flashy-burst-4121
    <!-- - move to repo directory  -->

### Step 3 :
    > run npm install


### Step 4 :
    > install vercel cli [npm i -g vercel]
[vercel cli documentation](https://vercel.com/docs/cli)

### Step 5 :
    > create account on vercel official website

### Step 6 :
    > run - vercel login  [to login vercel account using cli]

### Step 7 :
    > run - vercel

### Step 8 :
    > run - vercel --prod [after successfull execution of vercel command]


### Step 9 :
    > create two Environment variable on vercel webiste under your project settings.
    [during vercel command you will get your project build page link or you can mannualy check it by logging to your vercel account.]

    1. MONGO_URI = "your mongodb database uri"
    2. BASEURL = 'http://localhost:3000/api'

    [replce http://localhost:3000/ with your new domain, that you will get after completion of . vercel --prod command]
    [for me url for setting env variable on vercel is - https://vercel.com/myusername/myprojectname/settings/environment-variables]
### Step 10 : 
    To access the admin page create one user in your mopngodb database with role = "admin", based on given schema(model).

    [for schema open -  models/user.model.ts]   




## Directory structure


### 1. Pages Directory
    -  All Client Routing files are directoly inside Pages directory 
    -  All Admin Routing files are inside Pages>admin directory .
    - api is inside Paged>api directory

### 2. Controller Directory
    - Controller directory contains all the api logics, controller files are directly used api, inside pages>api.

### 3. Models
    Models directory contains schemas and models of mongodb database.

### 4. Store
    all the reduxtoolkit logic, which is used to manage redux store are stored here.

### 5. Components 
    All the required UI components stored here

### 5. Context
    Managing global context for cart items

### 6. Interface 
    all the typescript interface for client, admin, mongodb schema, and controller functions are written here.
### 7. Lib
    lib directory contains, argon2 logic for password hashing and validation, jwt logic for generating and validating tokens, mongodb connection logic, some local varibals.

 
