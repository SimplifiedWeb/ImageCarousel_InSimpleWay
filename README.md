# ImageCarousel_InSimpleWay
I develope a image carousel in simple way let me explain you.
So desinging is easy, Logic is must to understand. So focus on logic too.

REFERENCE THIS DESCRIPTION WITH MY CODE, YOU WILL UNDERSTAND BETTER WHAT'S GOING ON UNDERNEATH THE HOOD.

so first lets think about it How we gonna do this.
step1 -- lets think we have 5 images and when we click right than we get the next and when we click left we get the left one.
step2 -- so we want a left and the right button to navigate through one image to another.
step3 -- so we create a container so it was also a challengeing thing how the step by step structure should be followed.
step4 -- so now, we create each container for the images and give the classes one is to target all the images with same
class and the other class is the for targetting unique ones. why we do this bcz we have to loop the images one by one
bcz at a time we have to show only one image and the other was disabled or display: none. That's why we want to 
have a same class name to each container to get all the containers. How we are gonna get all the images and loop
it?
step5 -- We use the getElementsByClassName property which give a html collections and we get each elements by
index numbers. That's how we gonna take every images and loop it.
step6 -- now we have everything set up. 
step7 -- So we know that when i click right or left we navigate through the images left and right. so the naviagtion 
were doing is basically we are targetting the index of the images.

so here is the logic. so we declare a vairable name index and intialize the value 0. 
var index = 0; why? to handle the index of the images array that we get from the getElementByClassName.like imgaes[0].style.display = block;
so this [0] we control over this index variable and keep track of it.
	when we click on the next Button.
	we start from index = 0 to index = 1 than 3, 4, 5.
	 now we know that we have 5 images so the array length should be five but the index start from 0 so it should go 
to up 4. on this care we use -1.
	so when we reached to the end images, we set a one more condition if index === images.length than we go back to index = 0 
and start again.

	so when we start directly from the left button so we go all over to the last images and navigate to backwords.
so in this we use the condition if index === 0 then do index = images.length-1 means that give the imgae array length it should be 5 and 
assign it to the index. so it go all over the last images and come backword. each time when we click it.

and the most important part was the hiding other images and showing one at a time. we know understand how we are navigating,
and going forward and backward.

so we know that javascript executes code line by line. right.
so, in this we first remove all the images and set to the display none.
after immediatly, on the next line
we set the current index whatever the user click left and right that image index as a display block to see one 
image at a time.

that's how the functionality was working.

refrence the javascript code that i've written. You will understand clearly.
