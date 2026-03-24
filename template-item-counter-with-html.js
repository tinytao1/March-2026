Example of counter styling:
<!DOCTYPE html>
<html>
<head>
<style>
body {font-family: Arial, Helvetica, sans-serif;
	font-weight: light; 
  background-color: lightblue;
}
#myCounter {display: inline-block;
	margin-left:35px;}
.counter {
	font-size: 1.5rem;   
    }
#myBtn {font-size:1.5rem;
    }
    h1 {margin-bottom:140px;}
    
</style>
</head>

<body>

<h1> Events</h1>


<div class='counter' >

<button id="myBtn"> Item</button>

<h2 id='myCounter' >0</h2>

</div>

<p id="demo"></p>

<script>
/////////////////////////////
/////////////////////////////
/////////////////////////////
//const btn = document.getElementById("myBtn");
//const myCtr = document.getElementById("myCounter");

const s1 = {
	
  myCount: 0,
  
  myFunc(){
    alert(this.myCount);  
  },
  
  count() {
  this.myCount++
  this.myCtr.innerHTML = this.myCount; 
  },
  
  myCtr: document.getElementById("myCounter"),
  btn: document.getElementById("myBtn"),
  
  init_cnt_btn() {
  	this.btn.addEventListener("click", () => this.count());
  }
  
};

// Call it once at start.
s1.init_cnt_btn();

if (s1.myCount == 0) {
	s1.myCtr.style.color = "lightblue";
}
</script>

</body>
</html>

END END END END END END END END END END END 
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
