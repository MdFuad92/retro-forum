const forum = async(searchNewpost = 'Comedy') => {
 
    const newTime =  setTimeout(async()=>{
        const forumInfo = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchNewpost}`)

        const forumData = await forumInfo.json()
        // console.log(forumData)
        const Data = forumData.posts
      
        forumInsert(Data)
    },2000)
  
    
}

// const sendForum = async()=>{
//     const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//     const api = await response.json()
//     console.log(api)
//     const info = api.posts
//     console.log(info)
//     newSection(info)
// }
// sendForum()

// const newSection = (insertComment)=>{
// console.log(insertComment)
// const newComment = document.getElementById('btn-comment')

//  insertComment.forEach((item)=>{
  
//    const newElement = document.createElement('div')
//    newElement.classList = "font-['Mulish'] font-bold card w-72 h-[50px] bg-[white] shadow-xl"
//    newElement.innerHTML =`
//    <p class =" "> ${item?.title}</p>
   
//    `
//    console.log(newElement)
// //    newComment.appendChild(newElement)
  
//  })
// }
const newComment = document.getElementById('btn-comment')

const email = (title)=>{
   console.log('hello',)

   
   const creatComment = document.createElement('div')
   
   creatComment.classList = "flex  gap-4 p-2 font-['Mulish'] font-bold card w-72 h-[60px] bg-[white] shadow-xl"
    creatComment.innerHTML = ` <div class =" "><p > ${title}</p></div>`
    newComment.appendChild(creatComment)

    const number =document.getElementById('value')
    const newNum = number.innerText
    console.log(newNum)
    const latestNum = parseInt(newNum)
   
     const finalNum = latestNum + 1
     console.log(latestNum)
     number.innerText = finalNum 
}

const gmail =(view_count)=> {
   const createView = document.createElement('div')
   createView.innerHTML = ` <div class="flex" ><p class ="flex" > <img class= "" src="./images/icon.svg" alt=""> ${view_count}</p></div> `
   newComment.appendChild(createView)

}




const forumInsert = (sections)=>{
    // console.log(sections)
    const forumSection = document.getElementById('comments')
    const newBtn = document.getElementById('seaarch-btn')
    
    

    forumSection.textContent =``

    sections.forEach((section) =>{
    
    const forumCreate = document.createElement('div')
    forumCreate.classList = "card card-compact lg:w-[600px] w-[300px] h-[300px] bg-[#F3F3F5] lg:p-11 p-3 lg:flex  flex-col shadow-xl"
   


    forumCreate.innerHTML = `
    <div class ="flex gap-5 font-['Mulish']  font-bold">
    <img class= "w-[72px] h-[72px]" src="${section.image}" alt="">
   
   
    <p class" font-bold ">#${section.category}</p>
    <p class="font-['Mulish'] font-bold">Author: ${section.author.name}</p>
    

    
    </div>
   <div class="text-start ml-20 mt-2 font-['Mulish'] font-bold"> 
   <p class ="  "> ${section?.title}</p>
   <p class =" font-['Mulish'] font-light mt-3 mb-3"> ${section.description}</p>
   </div>
    <div class="flex justify-evenly lg:mt-4 ml-5">
    <p class="flex gap-2">  <img  src="/images/tabler-icon-message-2.svg" alt="">${section.comment_count}</p>
    <p class="flex gap-2">  <img  src="/images/icon.svg" alt="">${section.view_count
    }</p>
    <p class="flex gap-2">  <img  src="/images/icon2.svg" alt="">${section.comment_count}</p>
    <button onclick="email('${section.title}'), gmail('${section.view_count}')"  > <img class= "w-[25px] h-[25px]" src="./images/email 1.svg" alt=""></button>
    </div>
    
   
    `
    console.log(forumCreate)
    forumSection.appendChild(forumCreate)
   
    toggleLoading(false)
   
  
    
    })
   
  

}



function searchBtn(){
    const search = document.getElementById('searching')
    const newText = search.value
    console.log(newText)
    forum(newText)
    toggleLoading(true)
  
  
   
    
}


const toggleLoading = (isLoading) =>{
    
    const loadingSpinner = document.getElementById('loading-bar')

    if(isLoading){
      loadingSpinner.classList.remove('hidden')
 
    
    
    }
    else{
        loadingSpinner.classList.add('hidden')
       } 
}

forum()


// Latest Post

const latestPost = async()=>{
    const post = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    console.log(post)
    const newPost = await post.json()
    console.log(newPost)
    latestPoster(newPost)
    
}

const latestPoster = (objects) =>{
    console.log(objects)
 const postUpdate = document.getElementById('latest-posts')
 objects.forEach((object)=>{ 

    const createPost = document.createElement('div')
    createPost.classList = "card p-3 items-start gap-6 w-96 h-[550px] bg-[#FFF] border-[#12132D26] border-solid border-2 font-['Mulish']"
    createPost.innerHTML =`
    
    <img class="rounded-2xl w-72 mt-3 ml-7 " src="${object.cover_image}" alt="">
    <p class="flex gap-3"><img src="./images/dd.svg" alt="">${object.author.posted_date?object.author.posted_date:"No publish date"}</p>
    <p class="font-['Mulish'] font-bold">${object.title}</p>
    <p>${object.description}</p>
    <div class="flex">
    <div class="p-3">
    <img class="w-8" src="${object.profile_image}" alt="">
    </div>
    <div class="">
    <p>${object.author.name}</p>
    <p>${object.author.designation ? object.author.designation:'Unknown'}</p>
    </div>


    </div>
    
    
    `
     console.log(createPost)
    postUpdate.appendChild(createPost)

 })
}



latestPost()









