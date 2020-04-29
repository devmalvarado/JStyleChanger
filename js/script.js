const inputs = document.querySelectorAll('.control input');
// Look at the methods avaliable for the objects created with the querySelector
//Try using others Querys selectors

function manageUpdate(){
    console.log(this.dataset)
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


  inputs.forEach(input => input.addEventListener('change', manageUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', manageUpdate));