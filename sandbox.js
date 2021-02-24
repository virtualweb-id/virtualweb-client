let url = 'https://www.youtube.com/watch?v=WSOFpsZFMjo&ab_channel=Fam%E2%80%A2iLy'

let afterReplace = url.split('&').slice(0,1).join().replace('watch?v=','embed/')
console.log(afterReplace)