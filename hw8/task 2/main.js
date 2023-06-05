const originalObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'Madird',
        country: 'Spain',
        home: {
            first: "First",
            second: "Second"
        }
    },
    hobbies: ['reading', 'gaming', 'gym']
};

function shallowCopy(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject("Arg is not an Object")
        }

        const shallowCopyObj = Array.isArray(obj) ? [...obj] : { ...obj };
  
        for (let key in shallowCopyObj) {
          if (shallowCopyObj.hasOwnProperty(key) && typeof shallowCopyObj[key] === 'object') {
            shallowCopyObj[key] = shallowCopy(shallowCopyObj[key]);
          }
        }

        resolve(shallowCopyObj)
    })
}




shallowCopy(originalObject)
    .then((copyVal) => {
        copyVal.address.city = 'Barcelona'
        console.log("copied: " + copyVal.address.city)
        console.log("original: " + originalObject.address.city)
    })
    .catch((error) => {
        console.log(error.message);
    });