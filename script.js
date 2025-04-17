"use strict";
//创建一个购物清单数组
let shoppingList = ["milk", "egg", "bread"];

//向购物清单中添加两样物品，并输出更新后的清单。

shoppingList.push("juice", "avocado");
console.log(shoppingList);

//购物清单中删除最后一项物品，并输出结果。
shoppingList.pop();
console.log(shoppingList);

////////////////////////////////
// 条件与循环：

// 创建一个函数，当购物清单中的物品超过5项时，在控制台输出"你的购物车满了"。

// 使用循环语句遍历购物清单，将每一项物品在控制台上以编号的形式输出。例如：
const shoppingCart = function (items = [], maxItems = 5) {
  const isFull = items.length >= maxItems;
  console.log(
    isFull
      ? "Your cart is full:"
      : `You can add ${maxItems - items.length} more to your cart:`
  );
  items
    .slice(0, isFull ? maxItems : items.length)
    .forEach((item, i) => console.log(`${i + 1}. ${item}`));
};

shoppingCart(shoppingList);

////////////////////////////////
// 函数与对象：

// 创建一个函数，该函数接受物品名称作为参数，并返回该物品是否在购物清单中。

// 创建一个购物物品对象，其中包括物品名称、价格和数量。例如:

let items = {
  name: "milk",
  price: "5",
  quantity: 2,
};

const capitalizeInput = str =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const formatItemText = itemName => capitalizeInput(itemName.trim());

const checkItem = function (item) {
  if (typeof item !== "string" || item.trim() === "") {
    return console.log("Invalid input.");
  }

  const hasItem = item.trim().toLowerCase() === items.name.toLowerCase();
  const targetItem = formatItemText(item);

  console.log(
    hasItem
      ? `${targetItem} is in your list.`
      : `There is no ${targetItem} in your list.`
  );
};

checkItem("milk");
checkItem(" Milk");
checkItem("🍕");
checkItem("");
