//用来作为购物车储存用户添加的商品。
//export 表示该变量允许其他module脚本访问。
export let cart=JSON.parse(localStorage.getItem('cart'));
//第一次启动程序的时候cart为null。
// removeStorage();
if(!cart)
{
    cart=[]
}

// export let cart=[
//     {
//         productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quanity:2,
//     },
//     {
//         productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
//         quanity:1,
//     }
// ];

export function addProductToCart(productId) {
    console.log(productId);
    //如果购物车中已经存在则数量+1
    let matchedItem = cart.find((x) => x.productId === productId);
    if (matchedItem != undefined) {
        matchedItem.quanity += 1;
    }
    //否则添加到购物车中
    else {
        cart.push({ productId: productId, quanity: 1 });
    }
    saveToStorage();
}

export function removeProductFromCart(productId)
{
    const newCart=cart.filter((x)=>x.productId!==productId);
    cart=newCart;
    saveToStorage();
}

//将数据储存到浏览器本地
function saveToStorage()
{
    localStorage.setItem("cart",JSON.stringify(cart));
}

function removeStorage()
{
    localStorage.removeItem('cart');
}