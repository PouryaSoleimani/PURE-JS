import axios from "axios";
const myList = document.querySelector(`#usersList`)

// ^ GETDATA FUNCTION USING AXIOS.GET ______________________________________________________
async function getData() {
  try {
    // * 1 - GETTING DATA FROM URL _________________________________________________________
    const response = await axios.get("https://reqres.in/api/users?page=1")
    console.log(response);
    console.log(response.data.data);

    // * 2 - GETTING USERNAMES ____________________________________________________________
    for (const i in response.data.data) {
      if (Object.hasOwnProperty.call(response.data.data, i)) {
        const el = response.data.data[i];
        let content = `${el.first_name} ${el.last_name}`
        // ____________________________________________________________________________
        let userItem = document.createElement(`li`)
        myList.appendChild(userItem)
        userItem.textContent = content
        userItem.classList.add(`flex`, `flex-row-reverse`, `items-center`, `justify-end`, `gap-4`, `my-auto`,
          `hover:bg-slate-600`, `w-full`, `rounded-xl`, `duration-150`)
        // * 3 - GETTING USER IMAGES ___________________________________________________
        let imageSrc = `${el.avatar}`
        let userImage = document.createElement(`img`)
        userItem.appendChild(userImage)
        userImage.setAttribute(`src`, imageSrc)
        userImage.classList.add(`w-12`, `h-12`, `rounded-full`)
      }
    }
    b
  } catch (error) { console.error('ERROR!'); }
}
getData()
