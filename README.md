# Blogging System Api

## To run the api's:

### 1. To Create Blog Post 

### Request:

`POST  /post/addblog`

{
    "title":"The life and land",
    "description":"art",
    "label":["art","life"],
    "author":"level" 
}

### Response:


success:{
    "status": "success",
    "data": {
            "title" : "blog title",
            "description" : "blog description",
            "label" : "blog label"
            }
}


error: { 
       status: "failed",
       error 
    }

