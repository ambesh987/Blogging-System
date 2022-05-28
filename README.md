# Blogging System Api

## To run the api's:

### 1. To Create Blog Post 

### Request:

`POST  /post/addblog`

`{
    "title":"The life and land",
    "description":"art",
    "label":["art","life"],
    "author":"level" 
}
`
### Response:

`success:
{
    "status": "success",
    "data": {
        "title": "The life and land",
        "description": "art",
        "label": [
            "art",
            "life"
        ],
        "likes": 0,
        "author": "level",
        "published": "false",
        "_id": "62925ad3c116125afa00499c",
        "__v": 0
    }
}`
`error: { status: "failed", error }`

