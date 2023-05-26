package main

import "fmt"
//Structure
type Employee struct{
	Name string 
	Id int 
	Email string 
	Dept string 
	year int
}

func main(){
	fmt.Println("Hello")
	var Name string
	fmt.Println("Enter your Name")
	fmt.Scan(& Name)
	fmt.Println("Name: ",Name)
	result:=add(1000,2000)
	fmt.Println("Sum of two numbers",result)
	num1:=20002
	num2:=30003
	fmt.Println("Before Swapping",num1,num2)
	num1,num2=swap(num1,num2)
	 //_,num2 =swap(num1,num2)
	//fmt.Println("After Swapping",num2)
	fmt.Println("After Swapping",num1,num2)


	u1:=Employee{"Adarsh",1001,"adaras@npci.ac.in","blockchain",1} 
	fmt.Println(u1)
	fmt.Println(u1.Name)
	fmt.Println(u1.Email)
    fmt.Println(u1.add1())
	//Pointer	
	var a *int
	a1:=200002
	a= &a1
	var b *int
	b1:=500005
	b= &b1
	fmt.Println("Sum is with pointers:",addp(a,b))
	//Pointer & Struct
	ps:=&u1
	fmt.Println("pointer with struct Employee Details",*ps)
	fmt.Println("pointer with struct Employee Details Email:",*&ps.Email)
	//Array
	var arr2= [5]string{"Indy","Iroha"," "," ","Besu"}
	fmt.Println("Array length arr2",len(arr2))
	fmt.Println("Array elements arr2",arr2)
	fmt.Println("Array elements arr2",arr2[1])
	//Slice
	var arr2s= []string{"Indy","Iroha","Burrow","Cacti","Besu"}
	fmt.Println("Slice length arr2s",len(arr2s))
	fmt.Println("Slice elements before append",arr2s)
	arr2s=append(arr2s,"Caliper","Explorer" )
	fmt.Println("Slice length arr2s after append",len(arr2s))
	fmt.Println("Slice elements after append",arr2s)

}
//Function
func add(a,b int)int{
	return a+b
}

func swap(a,b int)(int,int){
	return b,a
}
//Method
func (u1 Employee)add1() int{
	return (u1.year+u1.Id)
}
//Pointer Function
func addp(c,d *int) int {
res:=*c+*d
return res
}
// package main

// import "fmt"

// type User struct {

// Name string

// Age int

// Email string

// }

// func main() {

// fmt.Println("Methods in golang")

// user1 := User{"vinesh", 25, "email.com"}

// modified_age := user1.modifyAge()

// fmt.Println(modified_age)

// fmt.Println(user1.Age)
// user2 := User{"abith", 20, "test@email"}

// mod_age := user2.modified_age_ptr(10)

// fmt.Println(mod_age)

// fmt.Println(user2.Age)

// }

// func (u User) modifyAge() int {

// u.Age += 5

// return u.Age

// }

// func (u *User) modified_age_ptr(change int) int {

// u.Age += change

// return u.Age
// }