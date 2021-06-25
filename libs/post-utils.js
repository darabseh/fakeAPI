export async function GetAllPosts()
{
    const response = await fetch("https://mockend.com/darabseh/nextjs-blog/posts");
    const data = await response.json();
    return data;
    // return(
    //     [
    //         {
    //             "createdAt": "1957-09-21T20:47:11Z",
    //             "id": 1,
    //             "published": false,
    //             "slug": "XexLxChNdz",
    //             "title": "MEDyfLxqeF",
    //             "views": 56
    //         },
    //         {
    //             "createdAt": "1974-08-22T03:42:31Z",
    //             "id": 2,
    //             "published": true,
    //             "slug": "ySiymmNIVf",
    //             "title": "YEBlKOVrgg",
    //             "views": 22
    //         },
    //         {
    //             "createdAt": "1976-12-30T13:00:17Z",
    //             "id": 3,
    //             "published": true,
    //             "slug": "nFsCyhwllo",
    //             "title": "sMzheVnQeT",
    //             "views": 43
    //         },
    //     ]
    // )
}