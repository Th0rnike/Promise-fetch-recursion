// დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად
//  ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს.
//  მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

// // task 1

// function expo(num, pow, cb){
//     if(pow === 0){
//         return 1
//     }else{
//         return num * expo(num, pow - 1, cb)
//     }
// }

// let res = expo(5, 3, (res) => {
//     console.log(res)
// })



// console.log(res)



// // task 2

url = "https://jsonplaceholder.typicode.com/posts"

const bodyElem = document.querySelector('body')

const refresh = document.getElementById("minimalist-button")

refresh.addEventListener('click', () => {
    location.reload()
})

async function postData(){
    try {
        const rawData = await fetch(url)

        if(!rawData.ok){
            throw Error("bad request")
        }

        const data = await rawData.json()

        for (const iterator of data) {
            
            const userId = iterator.userId

            if(userId === Math.floor(Math.random() * 4) + 1){

                const card = document.createElement('div')
                const titleEl = document.createElement('h3')
                const titleId = document.createElement('p')
                const profileBody = document.createElement('p')
    
                bodyElem.appendChild(card)
                card.appendChild(titleEl)
                card.appendChild(titleId)
                card.appendChild(profileBody)
    
                let title = iterator.title
                titleEl.innerText = title
    
                let id = iterator.id
                titleId.innerText = id
    
                let profile = iterator.body
                profileBody.innerText = profile
    
                card.classList.add("profile-card")
                titleEl.classList.add("profile-title")
                titleId.classList.add("profile-id")
                profileBody.classList.add("profile-body")                
            }            
        }

    } catch (error) {
        console.error(error)
    }
}

postData();