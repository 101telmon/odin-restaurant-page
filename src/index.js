import "./styles.css";
import fancy_food from "./fancy-food.webp";

const content_div = document.getElementById("content");

// Our Header Buttons
const home_btn = document.getElementById("home");
const menu_btn = document.getElementById("menu");
const about_btn = document.getElementById("about");

// Home Page
const fancy_food_img = document.createElement("img");
const content_header = document.createElement("h1");
const content_desc = document.createElement("p");

fancy_food_img.src = fancy_food;
fancy_food_img.className = "bg-img";

content_header.textContent = "A pristine experience for all";

content_desc.textContent =
    "Experience the sensation of a great dining experience with our\
                top-of-the-line menu molded by Michelin star chefs.";

// Menu Page
const bland_food = document.createElement("h2");
const bland_food_desc = document.createElement("p");

bland_food.textContent = "Bland Food";
bland_food_desc.textContent =
    "This is really bland food, with NO seasoning and just salt!";

const boring_food = document.createElement("h2");
const boring_food_desc = document.createElement("p");

boring_food.textContent = "Boring Food";
boring_food_desc.textContent =
    "This tastes of nothing, and you will NOT enjoy it...";

const nothing_burger = document.createElement("h2");
const nothing_burger_desc = document.createElement("p");

nothing_burger.textContent = "Nothing Burger";
nothing_burger_desc.textContent = "Truly a nothing burger; no patty, all buns.";

// About Page
const email = document.createElement("p");
email.textContent = "Email: my-fancy-email@fancy.com";

const phone = document.createElement("p");
phone.textContent = "Phone: 07485 40-fancy";

const address = document.createElement("p");
address.textContent = "Address: 123 Fancy Pants Street, Manchester";

// Event Listeners
home_btn.addEventListener("click", show_home);
menu_btn.addEventListener("click", show_menu);
about_btn.addEventListener("click", show_about);

show_home();

function show_home() {
    remove_all_children();
    content_div.appendChild(fancy_food_img);
    content_div.appendChild(content_header);
    content_div.appendChild(content_desc);
}

function show_menu() {
    remove_all_children();
    content_div.appendChild(bland_food);
    content_div.appendChild(bland_food_desc);
    content_div.appendChild(boring_food);
    content_div.appendChild(boring_food_desc);
    content_div.appendChild(nothing_burger);
    content_div.appendChild(nothing_burger_desc);
}

function show_about() {
    remove_all_children();
    content_div.appendChild(email);
    content_div.appendChild(phone);
    content_div.appendChild(address);
}

function remove_all_children() {
    while (content_div.firstChild) {
        content_div.removeChild(content_div.firstChild);
    }
}
