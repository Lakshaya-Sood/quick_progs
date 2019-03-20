let afterOne = (num) => new Promise(res => {
    setTimeout(()=>console.log(num) || res(),1000)
  })
async function main(){
    for(let i = 0;i<5;i++){
      await afterOne(i)
	  //console.log('123')
    }
}
main();
