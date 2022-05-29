# Blogging System API

`A Backend API to Create Blog, View, Like a Blog, To search blogs and much more!`

`PROBLEM STATEMENT: ` `Assignment 3`

`Develop NodeJS backend APIs to support a blogging system`

`Description:`

`The APIs should support following operations:
- Adding new Blogs to the backend system – blog would have properties like title,
description, labels, author, etc.
- Ability to list all blogs by popularity (maximum number of likes appears on top
of list)
- Ability to search blogs based on author and title
- Ability to publish blog after it is saved
- Ability to view a blog
- Ability to like a blog`


## To run the API:

`Backend-API: [https://blogging23.herokuapp.com/](https://blogging23.herokuapp.com/) `


## 1. To Create Blog Post 

### Request:

    POST  /post/addblog

        {
            "title":"blog title",
            "description":"blog description",
            "label":["blog_label"],
            "author":"blog_author" 
        }

### Response:


        success:{
            "status": "success",
            "data": {
                    "title" : "blog title",
                    "description" : "blog description",
                    "label":["blog_label"],
                    "author":"blog_author"
                    }
               }


            error: { 
                   status: "failed",
                   error 
                   }


## 2. To get blogs on the basis of popularity

### Request

    GET /post/all

### Response

    Success (Status Code 200): 

            {
              status : "Success",
              blogs : blogs      
            }

    Failure (Status Code 401): 

            {
                status : "error",
                error : error
            }


## 3. Search Blogs based on Author and Title

### Request

        GET /post/search?author=author_name&title=title

### Response

    Success (Status Code 200)

        {
              status : "Successfully Fetched",
              blog : response    
        }

      Failure (Status Code 401)

        {
                status : "Failed",
        }


## 4. Publish Blog

### Request

        PATCH /post/publish/:id

### Response

        Success (Status Code 200)

            {
                  status: "Successfully Published"
            }

        Failure (Status Code 401)

          {
                status: "Error"
           }
  

  ## 5. To View a Blog

  ### Request
  
          GET /post/:id

  ### Response

          Success (Status Code 200)
 
         {
              status : "Success",
              post : data
         }

         Failure (Status Code 401)
          
          {
               status : "Failed"
          }

## 6. To like a blog

### Request

        POST /post/updatelikes/:id

### Response

        Success (Status Code 200)

        {
              status : 'Success'
        }

        Failure (Status Code 401)

        {
             status : "Error"
        }



