
const forum = async() => {
    const forumInfo = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')

    const forumData = await forumInfo.json()
    console.log(forumData)
    const Data = forumData.posts
  
    forumInsert(Data)
}



const forumInsert = (sections)=>{
    console.log(sections)
    const forumSection = document.getElementById('comments')

    sections.forEach((section) =>{
    
    const forumCreate = document.createElement('div')
    forumCreate.classList = "card card-compact w-[600px] h-[300px] bg-[#F3F3F5] p-11 flex "
   


    forumCreate.innerHTML = `
    <div class ="flex gap-5">
    <img class= "w-[72px] h-[72px]" src="${section.image}" alt="">
   
    <p> </p>
    <p class" font-semibold ">#${section.category}</p>
    <p class="font-['Mulish'] font-bold">Author: ${section.author.name}</p>
    

    
    </div>
   <div class="text-start ml-20 mt-2"> <p class =" font-['Mulish'] font-bold"> ${section.title}</p>
   <p class =" font-['Mulish'] font-light mt-3 mb-3"> ${section.description}</p></div>
    <div class="flex justify-evenly mt-4 ml-5">
    <p class="flex gap-2">  <img  src="/images/tabler-icon-message-2.svg" alt="">${section.comment_count}</p>
    <p class="flex gap-2">  <img  src="/images/icon.svg" alt="">${section.view_count
    }</p>
    <p class="flex gap-2">  <img  src="/images/icon2.svg" alt="">${section.comment_count}</p>
    <button> <img class= "w-[25px] h-[25px]" src="./images/email 1.svg" alt=""></button>
    </div>
    
   
    `
    console.log(forumCreate)
    forumSection.appendChild(forumCreate)
  
    })
    
   

}




forum()