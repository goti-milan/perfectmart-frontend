
export const allProducts = [
    {
        id: 1,
        mainCategory: "Cloths",
        subCategory: "Mens Fashion",
        images: [
            { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 1' },
            { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 2' },
            { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 3' }
        ],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laboriosam illum dolorum autem ullam vitae ab. Dignissimos explicabo aperiam inventore laborum voluptate vitae, dolores deserunt reprehenderit ratione odio quia doloribus.",
        isWishList: true,
        price: 999,
        mrp: 1999,
        discount: 50,
        size:[
            {id: 101, type: 'L', avail: false },
            {id: 201, type: 'XL', avail: true },
            {id: 301, type: 'XXL', avail: false },
            {id: 401, type: 'M', avail: false }
        ],
        rating: [
            {
                id: 101,
                userId: 1001,
                userName: "johnny dep",
                starRating: 5,
                comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
            },
            {
                id: 101,
                userId: 1001,
                userName: "johnny dep",
                starRating: 5,
                comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
            },
            {
                id: 101,
                userId: 1001,
                userName: "johnny dep",
                starRating: 5,
                comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
            }
        ],
    },
    {
        id: 2,
        mainCategory: "Cloths",
        subCategory: "Mens Fashion",
        images: [
            { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 1' },
            { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 2' },
            { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 3' }
        ],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laboriosam illum dolorum autem ullam vitae ab. Dignissimos explicabo aperiam inventore laborum voluptate vitae, dolores deserunt reprehenderit ratione odio quia doloribus.",
        isWishList: true,
        price: 2499,
        mrp: 4999,
        discount: 45,
        size:[
            {id: 101, type: 'L', avail: false },
            {id: 201, type: 'XL', avail: true },
            {id: 301, type: 'XXL', avail: false },
            {id: 401, type: 'M', avail: false }
        ],
        rating: [
            {
                id: 101,
                userId: 1001,
                userName: "johnny dep",
                starRating: 5,
                comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
            },
            {
                id: 101,
                userId: 1001,
                userName: "johnny dep",
                starRating: 5,
                comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
            },
            {
                id: 101,
                userId: 1001,
                userName: "johnny dep",
                starRating: 5,
                comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
            }
        ],
    }
]

export const singleProduct =  {
    id: 1,
    mainCategory: "Cloths",
    subCategory: "Mens Fashion",
    images: [
        { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 1' },
        { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 2' },
        { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 3' }
    ],
    title: "mens green tshirt polo neck",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laboriosam illum dolorum autem ullam vitae ab. Dignissimos explicabo aperiam inventore laborum voluptate vitae, dolores deserunt reprehenderit ratione odio quia doloribus.",
    isWishList: true,
    price: 999,
    mrp: 1999,
    discount: 50,
    sizes:[
        {id: 101, type: 'L', avail: false },
        {id: 201, type: 'XL', avail: true },
        {id: 301, type: 'XXL', avail: false },
        {id: 401, type: 'M', avail: false }
    ],
    rating: [
        {
            id: 101,
            userId: 1001,
            userName: "johnny dep",
            starRating: 5,
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
        },
        {
            id: 101,
            userId: 1001,
            userName: "johnny dep",
            starRating: 5,
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
        },
        {
            id: 101,
            userId: 1001,
            userName: "johnny dep",
            starRating: 5,
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga molestiae velit minus dolore eius deleniti recusandae harum ratione neque distinctio dolorum, pariatur nostrum, molestias maiores cumque vel saepe blanditiis repellendus ducimus asperiores obcaecati excepturi?",
        }
    ],
}